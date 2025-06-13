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
import React, { useCallback, useMemo, useState } from "react";

/**
 * 가장 기본적인 형태의 모달 예시
 * @param param0
 * @returns
 */
export default function Basic({
  title,
  dim,
}: {
  title?: string;
  dim?: ImodalsAtom["dim"];
}) {
  const [openModalId, setOpenModalId] = useState<string | undefined>();
  const setModalJotai = useModalsStore((state) => state.setState);
  const modalStyle = useMemo(() => getModalContainerStyle("default"), []);

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

    const newId = "스와이프 맵";
    setOpenModalId(newId);
    setModalJotai((prev) => ({
      ...prev,

      dim: dim || undefined,

      modals: [
        ...prev.modals,
        {
          metadata: {
            id: String(newId),
          },

          container: {
            style: modalStyle,
          },

          component: () => (
            <ModalLayout>
              {!title ? null : (
                <ModalHeader
                  title={title}
                  onClose={() => {
                    setOpenModalId(undefined);
                  }}
                />
              )}

              <ModalContent />

              <ModalFooter />
            </ModalLayout>
          ),
        },
      ],
    }));
    //
  }, [openModalId, setOpenModalId, setModalJotai]);

  return (
    <>
      <button onClick={handleClickBtnOpenModal}>모달 열기</button>
      <ModalRenderer />
    </>
  );
}
