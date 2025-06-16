import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export default function ModalContent({ children }: PropsWithChildren) {
  return (
    <SLayout>
      {children}
      <div></div>
    </SLayout>
  );
}

const SLayout = styled.div`
  overflow: auto;
  height: 100%;
  padding: 20px;
`;
