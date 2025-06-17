import { css } from "styled-components";
import {
  highContrast,
  highContrastColor,
  light,
  lightColor,
  mobileFontSize,
  pcFontSize,
  primitiveColor,
  semantic,
} from "../../foundations/foundation";

// foundation 이용
// 옵셔널 접근자로, 에러가 나지 않도록 처리
const color = {
  // 여기다가 미리 선언
  "mode/light": {
    primary: css`
      background: ${lightColor?.surface?.white?.value};
    `,
  },
  "mode/high-contrast": {
    primary: css`
      background: ${highContrastColor?.surface?.["white-subtler"]?.value};
    `,
    secondary: css`
      background-color: ${highContrastColor?.button?.["secondary-fill"]?.value};

      color: ${highContrastColor?.text?.["primary"]?.value};
      border-width: ${highContrast?.["border-width"]?.["variable-regular"]
        .value};

      border-color: ${highContrastColor?.button?.["secondary-border"]?.value};

      &:hover {
        background-color: ${highContrastColor?.button?.["secondary-fill-hover"]
          ?.value};
      }
      &:active {
        background-color: ${highContrastColor?.button?.[
          "secondary-fill-pressed"
        ]?.value};
      }

      &:disabled,
      &.disabled {
        background-color: ${highContrastColor?.button?.["disabled-fill"]
          ?.value};
      }
    `,
  },
};

const typo = {
  "responsive/pc": {
    small: css`
      font-size: ${pcFontSize?.label?.["small"]?.value};
    `,
    large: css`
      font-size: ${pcFontSize?.label?.["large"]?.value};
    `,
  },
  "responsive/mobile": {
    small: css`
      font-size: ${mobileFontSize?.label?.["small"]?.value};
    `,
    large: css`
      font-size: ${mobileFontSize?.label?.["large"]?.value};
    `,
  },
};

const layoutCommon = `
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const layout = {
  small: css`
    ${layoutCommon}

    height: ${semantic?.["size-height"]?.["6"]?.value};
    padding: 0 ${semantic?.["padding"]?.["5"]?.value};
  `,
  large: css`
    ${layoutCommon}

    height: ${semantic?.["size-height"]?.["9"]?.value};
    padding: 0 ${semantic?.["padding"]?.["8"]?.value};
  `,
};

export const boxVariant = {
  color,
  typo,
  layout,
};
