import Dim from "./Dim";
import { useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import ModalContainer from "./ModalContainer";
import { ImodalsAtom, useModalsStore } from "../data/atom/modalAtom";

/**
 * @컨셉
 * 모달 data를 확인하여 포탈로 렌더링
 *
 * @사용방법
 * 앱의 최상단에 선언한다. 앱 컴포넌트는 자식으로 감쌀 필요 없다.
 *
 * @example
 * const App = () => {
 *   return (
 *     <>
 *       <Home />
 *       <ModalRenderer />
 *     </>
 *   );
 * };
 */
export default function ModalRenderer() {
  const modalSlice = useModalsStore((state) => state);

  /**
   * 모달 전역 상태를 오버라이드하여 기본 세팅 값 구축
   */
  const { show, dim, documentBody, modals } = {
    show: (() => {
      return modalSlice?.show &&
        Array.isArray(modalSlice?.modals) &&
        modalSlice?.modals?.length > 0
        ? true
        : false;
    })(),
    dim: {
      active: true,
      isCloseOnDimClick: true,
      ...modalSlice?.dim,
    },
    documentBody: {
      style: {
        overflow: "hidden",
        ...modalSlice?.documentBody?.style,
      },
    },
    modals: modalSlice?.modals ?? [],
  } satisfies Omit<ImodalsAtom, "setState">;

  const hasDuplicateIds = useMemo(() => {
    console.log("hasDuplicateIds modals", modals);
    const ids = modals.map((el) => el.metadata.id);
    const uniqueIds = new Set(ids);
    return ids.length !== uniqueIds.size;
  }, [modals]);

  if (hasDuplicateIds) {
    console.warn(
      "중복된 modal id가 감지되었습니다. key 충돌이 발생할 수 있습니다."
    );
  }

  // 모달 렌더링 시 적용한 스타일을 저장
  // 모달을 끌 시, 원래상태로 복원 목적
  const appliedStyleRef = useRef<Partial<
    Record<keyof CSSStyleDeclaration, string>
  > | null>(null);

  // 모달 렌더링에 맞게 body style 변경
  useEffect(
    function updateBodyStyleForModal() {
      const bodyStyle = document.body.style;
      const styleObject = documentBody?.style;

      if (
        show &&
        styleObject &&
        // 현재 적용된 스타일과 새로 적용할 스타일이 다를 때만 업데이트
        appliedStyleRef.current !== styleObject
      ) {
        Object.entries(styleObject).forEach(([key, value]) => {
          if (typeof value === "string") bodyStyle[key as any] = value;
        });
        appliedStyleRef.current = styleObject; // 적용한 스타일 저장
      }

      if (!show && appliedStyleRef.current) {
        Object.keys(appliedStyleRef.current).forEach((key) => {
          bodyStyle.removeProperty(key);
        });
        appliedStyleRef.current = null; // 제거 후 초기화
      }

      return () => {
        if (appliedStyleRef.current) {
          Object.keys(appliedStyleRef.current).forEach((key) => {
            bodyStyle.removeProperty(key);
          });
          appliedStyleRef.current = null;
        }
      };
    },

    [show, modals, documentBody]
  );

  const setModalTop = (modalId: string) => () => {
    if (!modalSlice?.setState) {
      console.error("setModalTop에서 에러가 발생.");
      return;
    }

    modalSlice.setState((prev) => {
      const target = prev.modals.find((el) => el.metadata.id === modalId);

      if (!target) return prev;

      const others = prev.modals.filter((el) => el.metadata.id !== modalId);

      return {
        ...prev,
        modals: [...others, target], // 맨 뒤로 보내면 시각적으로 가장 위에 표시됨
      };
    });
  };

  return !show
    ? null
    : createPortal(
        <Dim active={dim.active} isCloseOnDimClick={dim.isCloseOnDimClick}>
          {modals.map((el, idx) => (
            <ModalContainer
              onBringToFront={setModalTop(el.metadata.id)}
              modal={el}
              key={el.metadata.id}
            />
          ))}
        </Dim>,

        document.body
      );
}
