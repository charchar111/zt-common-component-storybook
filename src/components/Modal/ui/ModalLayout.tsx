import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export default function ModalLayout({
  children,
  ...rest
}: PropsWithChildren<any>) {
  return (
    <SLayout {...rest} className="ModalLayout_SLayout">
      {children}
    </SLayout>
  );
}
const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;
