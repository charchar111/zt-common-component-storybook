import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export default function ModalContent({ children }: PropsWithChildren) {
  return (
    <SLayout>
      {children}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint
        doloremque vero voluptates earum iste exercitationem id delectus quas
        ab? Nihil sint consectetur eveniet aspernatur at corrupti, veniam magni
        unde?
      </div>
    </SLayout>
  );
}

const SLayout = styled.div`
  overflow: auto;
  height: 100%;
  padding: 20px;
`;
