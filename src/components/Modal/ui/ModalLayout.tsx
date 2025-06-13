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
const SLayout = styled.div<any>`
  display: flex;
  flex-direction: column;
  /* min-height: 100%; */
  height: 100%;
  /* background-color: white; */
`;
