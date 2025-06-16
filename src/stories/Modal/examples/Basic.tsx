import {
  ImodalsAtom,
  useModalsStore,
} from "@/components/Modal/data/atom/modalAtom";
import ModalContent from "@/components/Modal/ui/ModalContent";
import ModalFooter from "@/components/Modal/ui/ModalFooter";
import ModalHeader from "@/components/Modal/ui/ModalHeader";
import ModalLayout from "@/components/Modal/ui/ModalLayout";
import ModalRenderer from "@/components/Modal/ui/ModalRenderer";
import { getModalContainerStyle } from "@/components/Modal/util/mapping";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { useShallow } from "zustand/shallow";

export type IVariant = "alert" | "confirm" | "prompt";

/**
 * 가장 기본적인 형태의 모달 예시
 * @param param0
 * @returns
 */
export default function Basic({
  title,
  dim,
  id,
  content,
  footerVariantName,
  container,
  showCancelBtn,
  showMaximizeBtn,
}: {
  title?: string;
  dim?: ImodalsAtom["dim"];
  id: string;
  content?: ReactNode;
  footerVariantName?: IVariant;
  container?: ImodalsAtom["modals"]["0"]["container"];
  showCancelBtn?: boolean;
  showMaximizeBtn?: boolean;
}) {
  const [openModalId, setOpenModalId] = useState<string | undefined>();
  const { setModalJotai, modals } = useModalsStore(
    useShallow((state) => ({
      setModalJotai: state.setState,
      modals: state.modals,
    }))
  );

  // 모달 컨테이너 스타일 프리셋을 가져옴
  const modalStyle = useMemo(() => getModalContainerStyle("hug"), []);

  useEffect(() => {
    if (openModalId && !modals.find((el) => el.metadata.id === id)) {
      setOpenModalId(undefined);
    }
  }, [modals]);

  const handleClickBtnOpenModal = useCallback(() => {
    if (openModalId) {
      setOpenModalId(undefined);

      setModalJotai((prev) => ({
        ...prev,
        documentBody: undefined,
        modals: prev.modals.filter((el) => {
          return el.metadata.id !== openModalId;
        }),
      }));
      return;
    }

    setOpenModalId(id);
    setModalJotai((prev) => ({
      ...prev,

      dim: dim || undefined,

      modals: [
        ...prev.modals,
        {
          metadata: {
            id: String(id),
          },

          container: {
            style: modalStyle,
            ...container,
          },

          component: ({ modalController, modalFlag }) => (
            <ModalLayout>
              {!title && !showCancelBtn && !showMaximizeBtn ? null : (
                <ModalHeader
                  title={title}
                  onClose={() => {
                    setOpenModalId(undefined);
                  }}
                  modalController={modalController}
                  modalFlag={modalFlag}
                  showCancelBtn={showCancelBtn}
                  showMaximizeBtn={showMaximizeBtn}
                />
              )}

              <ModalContent>{content || null}</ModalContent>

              <ModalFooter
                variant={footerVariantName}
                modalController={modalController}
              />
            </ModalLayout>
          ),
        },
      ],
    }));
    //
  }, [openModalId, setOpenModalId, setModalJotai]);

  return (
    <SLayout className="layout">
      <button onClick={handleClickBtnOpenModal}>모달 열기</button>
      <ModalRenderer />
    </SLayout>
  );
}

const SLayout = styled.div`
  width: 100%;
  height: 100vh;
`;
