import { css } from "styled-components";
import { getThemeVariantValue } from "../../utils/utils";
import { CommonVariantProps } from "../../types/variant";

export const BaseBoxCss = css<CommonVariantProps>`
  ${({ $color = "primary", $typo = "large", $layout = "large", theme }) => {
    // todo: 구현 필요
    const getVariantStyleBox = getThemeVariantValue({
      theme,
      component: "box",
    });

    const colorStyle = getVariantStyleBox({
      category: "color",
      context: `mode/${theme?.options?.mode}`,
      name: $color,
    });

    return css`
      ${colorStyle}
    `;
  }}
`;
