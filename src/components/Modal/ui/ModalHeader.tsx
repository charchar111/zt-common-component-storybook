import React, { useState } from "react";
import styled from "styled-components";
import { IModalController, IModalFlag } from "../types/state";
import CloseSvg from "../assets/cancel.svg";
import Fullscreen from "../assets/전체화면.png";

interface IModalHeader {
  title: string;
  modalController: IModalController;
  modalFlag: IModalFlag;
  onClose?: () => void;
}

export default function ModalHeader({
  title,
  modalController,
  modalFlag,
  onClose,
}: IModalHeader) {
  return (
    <SLayout
      onDoubleClick={() => {
        if (modalController?.handleMaximize) {
          modalController.handleMaximize();
        }
      }}
      // onMouseDown={(event: React.MouseEvent) => {
      //   event.stopPropagation();
      // }}
      // // @ts-ignore
      // onTouchStart={(event: React.MouseEvent) => {
      //   event.stopPropagation();
      // }}
      {...(modalController?.handleDragListener || null)}
    >
      <SColumn1>
        <h5>{title}</h5>
      </SColumn1>
      <SBtnBox>
        <SBtn
          $isToggle={modalFlag.isMaximize}
          onClick={() => {
            if (modalController?.handleMaximize) {
              modalController.handleMaximize();
            }
          }}
          onMouseDown={(event: React.MouseEvent) => {
            event.stopPropagation();
          }}
          onTouchStart={(event: React.MouseEvent) => {
            event.stopPropagation();
          }}
        >
          <img
            style={{ height: "100%" }}
            src={Fullscreen}
            alt="풀스크린 버튼"
          />
        </SBtn>
        <SBtn
          onClick={(event: React.MouseEvent) => {
            if (modalController?.handleClose) {
              modalController?.handleClose();
              onClose && onClose();
            }
          }}
          onMouseDown={(event: React.MouseEvent) => {
            event.stopPropagation();
          }}
          onTouchStart={(event: React.MouseEvent) => {
            event.stopPropagation();
          }}
        >
          <img src={CloseSvg} alt="" />
        </SBtn>
      </SBtnBox>
    </SLayout>
  );
}

const SLayout = styled.div`
  cursor: move;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;
  color: white;
  background-color: #0665d4;
  gap: 10px;
`;

const SColumn1 = styled.div`
  padding: 10px;
  display: flex;

  align-items: center;
`;

const SBtnBox = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  padding: 0;
  overflow: hidden;
  color: white;
  transition: all 0.1s ease-in-out;
`;

const SBtn = styled.button<any>`
  background-color: ${(props) => (props?.$isToggle ? " #122d84" : "#0665d4")};
  cursor: pointer;
  color: inherit;
  user-select: none;
  border: none;
  &:hover {
    filter: brightness(0.8);
  }
  padding: 10px;
`;
