import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import {
  ImodalsAtom,
  ImodalsAtomDim,
  useModalsStore,
} from "../data/atom/modalAtom";

interface IDim {
  active: boolean;
  isCloseOnDimClick: boolean; // 딤 클릭 시 모달 닫기 여부
  styles?: ImodalsAtomDim["styles"] | undefined;
  innerBoundSizeUnitPixel: number; // 모달 바운더리의 내부 여백
}

export default function Dim({
  children,
  isCloseOnDimClick,
  active,
  styles,
  innerBoundSizeUnitPixel,
}: PropsWithChildren & IDim) {
  const setModalSlice = useModalsStore((state) => state.setState);

  return (
    <SDimRoot
      $innerBoundSizeUnitPixel={innerBoundSizeUnitPixel}
      style={styles?.dimRoot}
      className={`dim_root`}
      $active={active}
    >
      <SInnerDim
        style={styles?.dimRoot}
        className={`dim_inner`}
        onClick={(event: React.MouseEvent) => {
          if (event.target !== event.currentTarget) return;
          if (!isCloseOnDimClick) return;

          setModalSlice((prev) => ({
            ...prev,
            modals: [],
          }));
        }}
      >
        {children}
      </SInnerDim>
    </SDimRoot>
  );
}

const dimStyle = {
  active: css`
    pointer-events: auto;
  `,
  disActive: css`
    pointer-events: none;
    background-color: transparent;
  `,
};

const SDimRoot = styled.section<any>`
  position: fixed;
  /* TODO: 모달용 z-index 상수로 교체 */
  z-index: 90;
  left: 0;
  top: 0;
  width: 100%;

  // re-resizable 모달을 내부로 가두기 위한 패딩\
  // 드래그 및 드롭 기능의 경계선
  padding: ${({ $innerBoundSizeUnitPixel }) =>
    `${$innerBoundSizeUnitPixel}px` || 0};
  height: 100%;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);

  ${({ $active }) => ($active ? dimStyle.active : dimStyle.disActive)};

  & * {
    box-sizing: border-box;
  }
`;
// 모달의 포지션을 내부로 제한하기 위한 레이아웃
// 이거 없으면 re-resizable 모달을 내부로 가두기 어려움
const SInnerDim = styled.section<any>`
  position: relative;
  width: 100%;
  height: 100%;
`;
