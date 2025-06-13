import { useModalsStore } from "@/components/Modal/data/atom/modalAtom";
import ModalContent from "@/components/Modal/ui/ModalContent";
import ModalFooter from "@/components/Modal/ui/ModalFooter";
import ModalHeader from "@/components/Modal/ui/ModalHeader";
import ModalLayout from "@/components/Modal/ui/ModalLayout";
import ModalRenderer from "@/components/Modal/ui/ModalRenderer";
import { getModalContainerStyle } from "@/components/Modal/util/mapping";
import React, { useCallback, useMemo, useState } from "react";

export default function Controller() {
  const [openModalId, setOpenModalId] = useState<string | undefined>();
  const setModalJotai = useModalsStore((state) => state.setState);
  const modalStyle = useMemo(() => getModalContainerStyle("setting"), []);

  const handleClickBtnSwipeMap = useCallback(() => {
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

      dim: {
        // active: true,
        active: false,
      },

      modals: [
        ...prev.modals,
        {
          metadata: {
            id: String(newId),
          },

          container: {
            style: modalStyle,
            resize: {
              able: true,
            },
            dragAndDrop: {
              able: true,
            },
          },

          component: ({ modalController, modalFlag }) => (
            <ModalLayout>
              <ModalHeader
                title={"스와이프 맵"}
                modalController={modalController}
                modalFlag={modalFlag}
                onClose={() => {
                  setOpenModalId(undefined);
                }}
              />
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
      <button onClick={handleClickBtnSwipeMap}>모달 열기</button>
      <ModalRenderer />
    </>
  );
}
