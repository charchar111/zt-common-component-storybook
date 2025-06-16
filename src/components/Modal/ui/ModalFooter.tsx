import React from "react";
import styled from "styled-components";
import { IModalController } from "../types/state";
import { IVariant } from "@/stories/Modal/examples/Basic";

export default function ModalFooter({
  modalController,
  variant = "alert",
}: {
  modalController: IModalController;
  variant?: IVariant;
}) {
  return (
    <SLayout>
      {(() => {
        switch (variant) {
          case "alert": {
            return (
              <SButton
                onClick={() => {
                  modalController?.handleClose &&
                    modalController?.handleClose();
                }}
              >
                확인
              </SButton>
            );
          }
          case "confirm": {
            return (
              <>
                <SButton
                  onClick={() => {
                    modalController?.handleClose &&
                      modalController?.handleClose();
                  }}
                >
                  취소
                </SButton>
                <SButton
                  onClick={() => {
                    modalController?.handleClose &&
                      modalController?.handleClose();
                  }}
                >
                  확인
                </SButton>
              </>
            );
          }
          case "prompt": {
            return (
              <>
                <SButton
                  onClick={() => {
                    modalController?.handleClose &&
                      modalController?.handleClose();
                  }}
                >
                  취소
                </SButton>
                <SButton
                  onClick={() => {
                    modalController?.handleClose &&
                      modalController?.handleClose();
                  }}
                >
                  입력
                </SButton>
              </>
            );
          }
          default:
            return null;
        }
      })()}
    </SLayout>
  );
}

const SLayout = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const SButton = styled.button`
  min-width: 60px;
  padding: 5px 10px;
  background-color: #5252ff;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.8);
  }
`;
