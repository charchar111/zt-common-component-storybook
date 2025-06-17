import BaseButtonCss from "../themes/css/button/BaseButtonCss";
import styled from "styled-components";
import { CommonVariantProps } from "../themes/types/variant";
import { ReactNode } from "react";

export interface ButtonProps extends CommonVariantProps {
  /** 버튼의 내용물  string | ReactNode*/
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({ label, onClick, ...props }: ButtonProps) => {
  return (
    <SButton onClick={onClick} {...props}>
      {label}
    </SButton>
  );
};

const SButton = styled.button<CommonVariantProps>`
  ${BaseButtonCss as any}
`;
