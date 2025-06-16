import { useMemo, useRef, useState } from "react";
import { ImodalsComponentAtom, useModalsStore } from "../data/atom/modalAtom";
import ModalResizing from "../features/ModalResizing";
import ModalDefaultControl from "../features/ModalDefaultControl";
import { MODAL_DEFAULT_SIZE_UNIT_PIXEL } from "../constants/constants";
import {
  IModalBbox,
  IModalController,
  IModalFlag,
  IModalRef,
} from "../types/state";
import ModalDraggable from "../features/dragAndDrop/ModalDraggable";
import { extractNumberFromStyleValue } from "../util/format";

interface IModalContainer {
  modal: ImodalsComponentAtom;
  onBringToFront?: () => void;
}

// 모달 창
export default function ModalContainer({
  onBringToFront,
  modal,
}: IModalContainer) {
  const setModalJotai = useModalsStore((state) => state.setState);

  // 모달창의 위치 및 크기
  const [modalBbox, setModalBbox] = useState<IModalBbox>(() => {
    const width =
      modal.container?.style?.width || MODAL_DEFAULT_SIZE_UNIT_PIXEL.WIDTH;
    const height =
      modal.container?.style?.height || MODAL_DEFAULT_SIZE_UNIT_PIXEL.HEIGHT;

    // todo: 각 단위를 px로 계산하는 공식 필요
    return {
      x:
        (document.documentElement.clientWidth -
          (extractNumberFromStyleValue(width) ||
            MODAL_DEFAULT_SIZE_UNIT_PIXEL.WIDTH)) /
        2,
      y:
        (document.documentElement.clientHeight -
          (extractNumberFromStyleValue(height) ||
            MODAL_DEFAULT_SIZE_UNIT_PIXEL.HEIGHT)) /
        2,
      width,
      height,
    };
  });

  console.log("modalBbox", modalBbox);

  /**
   * 모달의 일부 기능 활성화 여부
   * isMaximize - 모달창 최대화
   *  */
  const [modalFlag, setModalFlag] = useState<IModalFlag>({
    isMaximize: false,
    isResizable: modal.container?.resize?.able ?? false,
    isDraggable: modal.container?.dragAndDrop?.able ?? false,
  });

  /**
   * 자식 컴포넌트에게 props로 전달할 모달 조작 함수
   * handleClose - 모달창 끄기
   * handleMaximize - 모달창 최대화(최대화 상태에서는 리사이즈, 드래그 앤 드롭 비활성화)
   * handleDragListener - 모달창 드래그를 활성화시키는 이벤트 리스너
   *  */
  const [modalController, setModalController] = useState<IModalController>({
    handleClose: undefined,
    handleMaximize: undefined,
    handleDragListener: undefined,
  });

  // 모달창을 참조하기 위한 ref
  // 드래그 앤 드롭 시, 모달 창의 기존 style 값을 참조하기 위함
  const modalRef = useRef<IModalRef>({
    resizableContainer: null,
  });

  return (
    <ModalResizing
      active={modalFlag.isResizable && !modalFlag.isMaximize}
      modalBbox={modalBbox}
      setModalBbox={setModalBbox}
      modalFlag={modalFlag}
      modalRef={modalRef}
      onBringToFront={onBringToFront}
    >
      <ModalDraggable
        id={modal.metadata.id}
        active={modalFlag.isDraggable && !modalFlag.isMaximize}
        modalBbox={modalBbox}
        setModalBbox={setModalBbox}
        modalFlag={modalFlag}
        setModalController={setModalController}
        modalRef={modalRef}
        onBringToFront={onBringToFront}
      >
        <ModalDefaultControl
          id={modal.metadata.id}
          setModalJotai={setModalJotai}
          modalFlag={modalFlag}
          setModalFlag={setModalFlag}
          setModalController={setModalController}
        >
          {useMemo(() => {
            return typeof modal.component === "function"
              ? modal.component({
                  modalController,
                  setModalController,
                  modalFlag,
                })
              : modal.component;
          }, [modalController, setModalController, modalFlag])}
        </ModalDefaultControl>
      </ModalDraggable>
    </ModalResizing>
  );
}
