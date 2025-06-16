import { useModalsStore } from "@/components/Modal/data/atom/modalAtom";
import ModalContent from "@/components/Modal/ui/ModalContent";
import ModalFooter from "@/components/Modal/ui/ModalFooter";
import ModalHeader from "@/components/Modal/ui/ModalHeader";
import ModalLayout from "@/components/Modal/ui/ModalLayout";
import { getModalContainerStyle } from "@/components/Modal/util/mapping";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function MultipleModal() {
  const id = "MultipleModal1";

  const [openModalId, setOpenModalId] = useState<string | undefined>();
  const { setModalJotai, modals } = useModalsStore(
    useShallow((state) => ({
      setModalJotai: state.setState,
      modals: state.modals,
    }))
  );
  // 모달 컨테이너 스타일 프리셋을 가져옴
  const modalStyle = useMemo(() => getModalContainerStyle("default"), []);
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
      dim: {
        active: false,
      },
      modals: [
        ...prev.modals,

        {
          metadata: {
            id: String(id),
          },
          container: {
            dragAndDrop: {
              able: true,
            },
          },
          component: ({ modalController, modalFlag }) => (
            <ModalLayout>
              {" "}
              <ModalHeader
                title="두번째 모달"
                onClose={() => {
                  setOpenModalId(undefined);
                }}
                modalController={modalController}
                modalFlag={modalFlag}
              />
              <ModalContent></ModalContent>
              <ModalFooter modalController={modalController} />
            </ModalLayout>
          ),
        },
      ],
    }));
    //
  }, [openModalId, setOpenModalId, setModalJotai]);

  return (
    <div>
      <button onClick={handleClickBtnOpenModal}>두번째 모달 열기</button>
    </div>
  );
}
