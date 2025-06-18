import { css } from "styled-components";
import { CommonVariantProps } from "../../types/variant";
import {
  getThemeFoundationValue,
  getThemeVariantValue,
} from "../../utils/utils";

const BaseButtonCss = css<CommonVariantProps>`
  ${({
    $color = "primary",
    $typo = "large",
    $shape = "medium4",
    $layout = "xlarge",
    $elevation = "shadow1",
    theme,
  }) => {
    const getVariantStyleButton = getThemeVariantValue({
      theme,
      component: "button",
    });

    return [
      ...(getVariantStyleButton({
        category: "$color",
        context: `mode/${theme?.options?.mode}`,
        name: $color,
      }) || []),

      ...(getVariantStyleButton({
        category: "$typo",
        context: `responsive/${theme?.options?.responsive}`,
        name: $typo,
      }) || []),
      ...(getVariantStyleButton({
        category: "$shape",
        name: $shape,
      }) || []),

      ...(getVariantStyleButton({
        category: "$layout",
        name: $layout,
      }) || []),
      ...getThemeVariantValue({
        theme,
        component: "common",
      })({
        category: "$elevation",
        context: `common`,
        name: $elevation,
      }),
    ];
  }}

  border-radius: ${({ $shape = "medium4", theme }) => {
    return getThemeFoundationValue(theme, [
      "semantic/value-set",
      "radius",
      $shape,
    ]);
  }};

  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export default BaseButtonCss;
