import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { Resizable } from "re-resizable";

export interface IModalBbox {
  x: string | number | undefined;
  y: string | number | undefined;
  width: string | number | undefined;
  height: string | number | undefined;
  minWidth: string | number | undefined;
  minHeight: string | number | undefined;
}

export interface IModalController {
  handleClose: (() => void) | undefined;
  handleMaximize: ((isMaximize?: boolean) => void) | undefined;
  handleDragListener:
    | (SyntheticListenerMap & {
        onMouseDown: React.MouseEventHandler;
      })
    | undefined;
}

export interface IModalRef {
  resizableContainer: Resizable | null;
}

// 드래그 및 리사이즈 시, 최초의 위치를 저장
export interface IResizeStartPosition {
  x: string | number | undefined;
  y: string | number | undefined;
}

export interface IModalFlag {
  isMaximize: boolean;
  isResizable: boolean;
  isDraggable: boolean;
}
