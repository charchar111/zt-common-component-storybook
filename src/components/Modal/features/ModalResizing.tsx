import React, {
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";
import { Resizable, ResizeCallback, ResizeStartCallback } from "re-resizable";
import { flushSync } from "react-dom";
import {
  IModalBbox,
  IModalFlag,
  IModalRef,
  IResizeStartPosition,
} from "../types/state";
import {
  MODAL_DEFAULT_SIZE_UNIT_PIXEL,
  MODAL_MIN_SIZE_UNIT_PIXEL,
} from "../constants/constants";
import { convertStyleValue } from "../util/format";

interface IModalContainer {
  // 리사이즈 기능 활성화 여부. true = 활성화
  active: boolean;
  modalBbox: IModalBbox;
  setModalBbox: React.Dispatch<React.SetStateAction<IModalBbox>>;
  modalFlag: IModalFlag;
  modalRef: React.RefObject<IModalRef>;
  onBringToFront?: () => void;
}

// 모달 창
// 모달창 끄기, 최대화 로직
// 리사이즈, 드래그앤 드롭 로직
export default function ModalResizing({
  active,
  modalBbox,
  setModalBbox,
  modalFlag,
  modalRef,
  children,
  onBringToFront,
}: PropsWithChildren & IModalContainer) {
  const [resizeStartPosition, setResizeStartPosition] =
    useState<IResizeStartPosition>({
      x: undefined,
      y: undefined,
    });

  // 리사이즈 시작 시 최초 위치와 크기를 저장하는 함수
  const handleResizeStart: ResizeStartCallback = useCallback(
    (_, __, ref) => {
      setResizeStartPosition({
        x: ref.offsetLeft, // 현재 크기의 width 저장
        y: ref.offsetTop, // 현재 크기의 height 저장
      });
    },
    [setResizeStartPosition]
  );
  // 리사이즈 시 모달 크기 변경
  // direction 방향에 따라 아래에 if문으로 처리한 방향들은 이것들 없이는 모달 창의 left, top 값이 수정되지 않음.
  // 따라서 state로 직접 조정
  const handleResize: ResizeCallback = useCallback(
    (_, direction, ref, d) => {
      if (resizeStartPosition.x === undefined) return;
      if (resizeStartPosition.y === undefined) return;

      flushSync(() => {
        if (direction === "left" || direction === "bottomLeft") {
          setModalBbox((prev) => {
            return {
              ...prev,
              x: Number(resizeStartPosition.x) - d.width,
            };
          });
        }
        if (direction === "top") {
          setModalBbox((prev) => {
            return {
              ...prev,
              y: Number(resizeStartPosition.y) - d.height,
            };
          });
        }
        if (direction === "topLeft") {
          setModalBbox((prev) => {
            return {
              ...prev,
              x: Number(resizeStartPosition.x) - d.width,
              y: Number(resizeStartPosition.y) - d.height,
            };
          });
        }

        if (direction === "topRight") {
          setModalBbox((prev) => {
            return {
              ...prev,
              y: Number(resizeStartPosition.y) - d.height,
            };
          });
        }

        // 👉 크기 갱신
        setModalBbox((prev) => ({
          ...prev,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        }));
      });
    },
    [resizeStartPosition, setModalBbox]
  );

  const beforeMaximizeStyle = useRef<{
    memo: boolean;
    x: string | number | undefined;
    y: string | number | undefined;
    width: string | number | undefined;
    height: string | number | undefined;
  }>({
    memo: false,
    x: undefined,
    y: undefined,
    width: undefined,
    height: undefined,
  });

  // 최대화 시, 스타일 변경
  // 최대화 해제 시, 이전 스타일로 되돌리기
  useEffect(
    function maximizeModal() {
      if (modalFlag.isMaximize) {
        setModalBbox((prev) => {
          beforeMaximizeStyle.current.width = prev.width;
          beforeMaximizeStyle.current.height = prev.height;
          beforeMaximizeStyle.current.x = prev.x;
          beforeMaximizeStyle.current.y = prev.y;

          return { ...prev, x: 0, y: 0, width: "100%", height: "100%" };
        });

        beforeMaximizeStyle.current.memo = true;
      } else if (beforeMaximizeStyle.current.memo) {
        const snapShotBeforeMaximizeStyle = beforeMaximizeStyle.current;

        setModalBbox((prev) => ({
          ...prev,
          x: snapShotBeforeMaximizeStyle.x,
          y: snapShotBeforeMaximizeStyle.y,
          width: snapShotBeforeMaximizeStyle.width,
          height: snapShotBeforeMaximizeStyle.height,
        }));

        beforeMaximizeStyle.current = {
          memo: false,
          x: undefined,
          y: undefined,
          width: undefined,
          height: undefined,
        };
      }
    },
    [modalFlag.isMaximize]
  );

  return (
    <Resizable
      ref={(el) => {
        if (modalRef.current) {
          modalRef.current.resizableContainer = el;
        }
      }}
      defaultSize={{
        // width: MODAL_DEFAULT_SIZE_UNIT_PIXEL.WIDTH,
        // height: MODAL_DEFAULT_SIZE_UNIT_PIXEL.HEIGHT,
        width: useMemo(() => modalBbox.width, []),
        height: useMemo(() => modalBbox.height, []),
      }}
      enable={
        active && {
          top: true,
          right: true,
          bottom: true,
          left: true,
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true,
        }
      }
      onResizeStart={handleResizeStart}
      onResize={handleResize}
      style={{
        position: "absolute",
        left: convertStyleValue(modalBbox.x),
        top: convertStyleValue(modalBbox.y),
        // 자식 요소에 그림자 렌더링이 안되서 끔. 문제 되면 다시 수정
        // overflow: "hidden",
        pointerEvents: "auto",
      }}
      minWidth={MODAL_MIN_SIZE_UNIT_PIXEL.WIDTH}
      minHeight={MODAL_MIN_SIZE_UNIT_PIXEL.HEIGHT}
      size={{ width: modalBbox.width, height: modalBbox.height }}
      // 이거 꼭 있어야 함!!
      boundsByDirection={true}
      bounds={"parent"}
    >
      <SContainer
        onClick={() => {
          onBringToFront && onBringToFront();
        }}
        onDragStart={() => {
          onBringToFront && onBringToFront();
        }}
        $isMaximize={modalFlag.isMaximize}
      >
        {children}
      </SContainer>
    </Resizable>
  );
}

const containerStyle = {
  maximize: css`
    width: 100%;
    height: 100%;
  `,
  disMaximize: css``,
};

// 모달 창
const SContainer = styled.section<any>`
  width: 100%;
  height: 100%;
  /* 자식 요소에 그림자 렌더링이 안되서 끔. 문제 되면 다시 수정 */
  /* overflow: hidden; */
  background-color: white;
  border-radius: 8px;
  pointer-events: auto;
  transition: all 0.1s ease-in-out;

  ${({ $isMaximize }) =>
    $isMaximize ? containerStyle.maximize : containerStyle.disMaximize}
`;
