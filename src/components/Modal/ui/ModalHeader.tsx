import React, { useState } from "react";
import styled from "styled-components";
import { IModalController, IModalFlag } from "../types/state";
import CloseSvg from "../assets/cancel.svg";
import Fullscreen from "../assets/전체화면.png";

interface IModalHeader {
  title?: string;
  modalController?: IModalController;
  modalFlag?: IModalFlag;
  onClose?: () => void;
  showCancelBtn?: boolean;
  showMaximizeBtn?: boolean;
}

export default function ModalHeader({
  title,
  modalController,
  modalFlag,
  onClose,
  showCancelBtn,
  showMaximizeBtn,
}: IModalHeader) {
  console.log("modalController", modalFlag, modalController);
  return (
    <SLayout
      className="layout"
      $isDraggable={Boolean(modalController?.handleDragListener)}
      onDoubleClick={() => {
        if (modalController?.handleMaximize) {
          modalController.handleMaximize();
        }
      }}
      {...(modalController?.handleDragListener || null)}
    >
      <SColumn1>
        <h5 className="title">{title || ""}</h5>
      </SColumn1>
      <SBtnBox>
        {!showMaximizeBtn || !modalController?.handleMaximize ? null : (
          <SBtn
            $isToggle={modalFlag?.isMaximize}
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
        )}

        {!showCancelBtn || !modalController?.handleClose ? null : (
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
            <img style={{ filter: "invert(1" }} src={CloseSvg} alt="" />
          </SBtn>
        )}
      </SBtnBox>
    </SLayout>
  );
}

const SLayout = styled.div<any & { $isDraggable?: boolean }>`
  cursor: ${(props) => (props?.isDraggable ? "move" : "default")};
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

  .title {
    margin: 0;
    padding: 10px 0;
    font-size: 20px;
    font-weight: 600;
  }
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
