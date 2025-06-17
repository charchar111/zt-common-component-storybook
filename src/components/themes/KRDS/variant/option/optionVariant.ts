import { css } from "styled-components";
import {
  highContrast,
  highContrastColor,
  light,
  lightColor,
  mobileFontSize,
  pc,
  pcFontSize,
  primitiveTypo,
  semantic,
} from "../../foundations/foundation";

// foundation 이용
// 옵셔널 접근자로, 에러가 나지 않도록 처리
const color = {
  // 여기다가 미리 선언
  "mode/light": {
    primary: css`
      background-color: ${lightColor?.input?.surface?.value};
      color: ${lightColor?.text?.subtle?.value};
      border-width: ${light?.["border-width"]?.["static-regular"].value};
      border-style: solid;
      border-color: ${lightColor?.input?.border?.value};
      transition: all 0.2s ease-in-out;

      /* 아직 선택되지 않는 상태: 기본 값이 사용할 수 없는  경우 */
      &:default {
      }
      &:hover {
        background-color: ${lightColor?.action?.["secondary-hover"]?.value};
      }

      &:focus-visible {
      }
      &:active {
        background-color: ${lightColor?.action?.["secondary-pressed"]?.value};
        /* background-color: black; */
      }

      &:disabled,
      &.disabled {
        background-color: ${lightColor?.input?.["surface-disabled"]?.value};
      }

      &.completed {
      }
      &.error {
      }
    `,
  },
  "mode/high-contrast": {
    primary: css`
      background-color: ${highContrastColor?.input?.surface?.value};
      color: ${highContrastColor?.text?.subtle?.value};
      border-width: ${light?.["border-width"]?.["static-regular"].value};
      border-style: solid;
      border-color: ${highContrastColor?.input?.border?.value};
      transition: all 0.2s ease-in-out;

      /* 아직 선택되지 않는 상태: 기본 값이 사용할 수 없는  경우 */
      &:default {
      }
      &:hover {
        background-color: ${highContrastColor?.action?.["secondary-hover"]
          ?.value};
      }

      &:focus-visible {
      }
      &:active {
        background-color: ${highContrastColor?.action?.["secondary-pressed"]
          ?.value};
        /* background-color: black; */
      }

      &:disabled,
      &.disabled {
        background-color: ${highContrastColor?.input?.["surface-disabled"]
          ?.value};
      }

      &.completed {
      }
      &.error {
      }
    `,
  },
};

const typo = {
  "responsive/pc": {
    small: css`
      font-size: ${pcFontSize?.label?.["small"]?.value};
      font-weight: ${primitiveTypo["font-weight"].regular};
      line-height: 1.5;
    `,
    medium: css`
      font-size: ${pcFontSize?.label?.["medium"]?.value};
      font-weight: ${primitiveTypo["font-weight"].regular};
      line-height: 1.5;
    `,
    large: css`
      font-size: ${pcFontSize?.label?.["large"]?.value};
      font-weight: ${primitiveTypo["font-weight"].regular};
      line-height: 1.5;
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

const shape = {
  medium3: css`
    border-radius: ${semantic?.radius?.medium3?.value};
  `,
};

export const optionVariant = {
  color,
  typo,
  shape,
};
