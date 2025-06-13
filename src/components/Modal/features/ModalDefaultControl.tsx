import React, { memo, PropsWithChildren, useEffect } from "react";
import { SetStateAction } from "jotai";
import { ImodalsAtom } from "../data/atom/modalAtom";
import { IModalController, IModalFlag } from "../types/state";

interface ModalDefaultControlProps {
  id: string;
  setModalJotai: React.Dispatch<SetStateAction<ImodalsAtom>>;
  modalFlag: IModalFlag;
  setModalFlag: React.Dispatch<React.SetStateAction<IModalFlag>>;

  setModalController: React.Dispatch<React.SetStateAction<IModalController>>;
}

// todo: 메모 테스트
// 리사이징으로 인한 반복적 리렌더링 해제 목적
export default memo(function ModalDefaultControl({
  children,
  setModalJotai,
  setModalFlag,

  id,
  setModalController,
}: PropsWithChildren & ModalDefaultControlProps) {
  /**
   * 모달창 끄기
   *  */
  const handleClose = () => {
    setModalJotai((prev) => {
      return {
        ...prev,
        modals: prev.modals.filter((el) => el.metadata.id !== id), // Retain other properties
      };
    });
  };

  /**
   * 모달창 최대화
   * 관련 플래그 설정
   *  */
  const handleMaximize = (isMaximize?: boolean) => {
    if (isMaximize === true || isMaximize === false) {
      return setModalFlag((prev) => ({ ...prev, isMaximize: isMaximize }));
    }
    return setModalFlag((prev) => ({ ...prev, isMaximize: !prev.isMaximize }));
  };

  useEffect(() => {
    setModalController((prev) => ({ ...prev, handleClose, handleMaximize }));
  }, [setModalController, setModalJotai, setModalFlag]);

  return children;
});
