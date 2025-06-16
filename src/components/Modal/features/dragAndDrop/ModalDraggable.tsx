import {
  DndContext,
  DragMoveEvent,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import {
  IModalBbox,
  IModalController,
  IModalFlag,
  IModalRef,
  IResizeStartPosition,
} from "../../types/state";
import { extractNumberFromStyleValue } from "../../util/format";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

interface IModalDraggableItem {
  id: string;
  // onMouseDown: (() => void) | undefined;
  onMouseDown: (() => void) | undefined;
  setModalController: React.Dispatch<React.SetStateAction<IModalController>>;
}
function ModalDraggableItem({
  children,
  id,
  onMouseDown,
  setModalController,
}: PropsWithChildren & IModalDraggableItem) {
  const { attributes, listeners, node, setNodeRef } = useDraggable({
    id,
  });

  const customListener: SyntheticListenerMap & {
    onMouseDown: React.MouseEventHandler;
  } = {
    ...listeners,
    onMouseDown: (event: React.MouseEvent) => {
      onMouseDown && node.current && onMouseDown();
      listeners?.onMouseDown(event);
    },
  };

  // 리스너 갱신 로직
  useEffect(() => {
    setModalController((prev) => ({
      ...prev,
      handleDragListener: customListener,
    }));
  }, [onMouseDown]);

  return (
    <SLayout
      ref={setNodeRef}
      {...attributes}
      className="ModalDraggable__SLayout"
    >
      {children}
    </SLayout>
  );
}

const SLayout = styled.div`
  /* position: absolute; */
  /* overflow: auto; */
  width: 100%;
  height: 100%;
`;

interface IModalDraggable {
  id: string;
  active: boolean;
  setModalBbox: React.Dispatch<React.SetStateAction<IModalBbox>>;
  modalFlag: IModalFlag;
  setModalController: React.Dispatch<React.SetStateAction<IModalController>>;
  modalRef: React.RefObject<IModalRef>;
  onBringToFront?: () => void;
  innerBoundSizeUnitPixel: number;
}

export default function ModalDraggable({
  id,
  active,
  setModalBbox,
  modalFlag,
  setModalController,
  modalRef,
  children,
  onBringToFront,
  innerBoundSizeUnitPixel,
}: PropsWithChildren & IModalDraggable) {
  const [resizeStartPosition, setResizeStartPosition] =
    useState<IResizeStartPosition>({
      x: undefined,
      y: undefined,
    });

  // 리사이즈 시작 시 최초 위치와 크기를 저장하는 함수
  const handleDragStart = useCallback(() => {
    onBringToFront && onBringToFront();
    setResizeStartPosition({
      x: extractNumberFromStyleValue(
        modalRef.current?.resizableContainer?.resizable?.style.left
      ), // 현재 크기의 width 저장
      y: extractNumberFromStyleValue(
        modalRef.current?.resizableContainer?.resizable?.style.top
      ), // 현재 크기의 height 저장
    });
  }, [
    setResizeStartPosition,
    modalRef.current?.resizableContainer?.resizable,
    onBringToFront,
  ]);

  const handleDragMove = useCallback(
    (event: DragMoveEvent) => {
      const delta = event.delta;

      setModalBbox((prev) => {
        const extractprevValueWidth = extractNumberFromStyleValue(prev.width);
        const extractprevValueHeight = extractNumberFromStyleValue(prev.height);

        if (!extractprevValueWidth || !extractprevValueHeight) return prev;

        return {
          ...prev,
          x: Math.min(
            Math.max(
              Number(extractNumberFromStyleValue(resizeStartPosition.x)) +
                delta.x,
              0
            ),
            document.documentElement.clientWidth -
              extractprevValueWidth -
              innerBoundSizeUnitPixel * 2
          ),
          y: Math.min(
            Math.max(
              Number(extractNumberFromStyleValue(resizeStartPosition.y)) +
                delta.y,
              0
            ),
            document.documentElement.clientHeight -
              extractprevValueHeight -
              innerBoundSizeUnitPixel * 2
          ),
        };
      });
    },
    [resizeStartPosition, setModalBbox]
  );
  //   최대화 모드 활성화 시, 비활성화
  const isActiveDrag = active && !modalFlag.isMaximize;

  // sensor로 드래그 이벤트 트리거에 제약을 걸어야, 내부 요소의 마우스 관련 이벤트가 막히지 않음
  // 자꾸 에러 나서 delay 없앰
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      // delay: 150,
      distance: 10, // 5px 이상 움직여야 드래그 시작
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      // delay: 150, // 150ms 유지해야 드래그 시작
      distance: 10, // 5px 이상 움직여야 드래그 시작
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext
      sensors={sensors}
      onDragMove={isActiveDrag ? handleDragMove : undefined}
    >
      <ModalDraggableItem
        onMouseDown={isActiveDrag ? handleDragStart : undefined}
        id={id}
        setModalController={setModalController}
      >
        {children}
      </ModalDraggableItem>
    </DndContext>
  );
}
