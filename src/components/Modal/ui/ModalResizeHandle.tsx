// 일단 보류
import React from "react";
import styled from "styled-components";
function ModalResizeHandle() {
  return (
    <>
      <Top />
      <Bottom />
      <Left />
      <Right />
      <TopLeft />
      <TopRight />
      <BottomLeft />
      <BottomRight />
    </>
  );
}

const HandleBase = styled.div`
  position: absolute;
  user-select: none;
  /* 테스트용 */
  background-color: red;
`;

const Top = styled(HandleBase)`
  width: 100%;
  height: 10px;
  top: -5px;
  left: 0;
  cursor: row-resize;
`;

const Bottom = styled(HandleBase)`
  width: 100%;
  height: 10px;
  bottom: -5px;
  left: 0;
  cursor: row-resize;
`;

const Left = styled(HandleBase)`
  width: 10px;
  height: 100%;
  top: 0;
  left: -5px;
  cursor: col-resize;
`;

const Right = styled(HandleBase)`
  width: 10px;
  height: 100%;
  top: 0;
  right: -5px;
  cursor: col-resize;
`;

const TopLeft = styled(HandleBase)`
  width: 20px;
  height: 20px;
  top: -10px;
  left: -10px;
  cursor: nw-resize;
`;

const TopRight = styled(HandleBase)`
  width: 20px;
  height: 20px;
  top: -10px;
  right: -10px;
  cursor: ne-resize;
`;

const BottomLeft = styled(HandleBase)`
  width: 20px;
  height: 20px;
  bottom: -10px;
  left: -10px;
  cursor: sw-resize;
`;

const BottomRight = styled(HandleBase)`
  width: 20px;
  height: 20px;
  bottom: -10px;
  right: -10px;
  cursor: se-resize;
`;
