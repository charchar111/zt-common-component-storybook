import { css } from "styled-components";
import {
  highContrast,
  highContrastColor,
  light,
  lightColor,
  mobileFontSize,
  pcFontSize,
  semantic,
} from "../../foundations/foundation";
import { CommonVariantProps } from "@/components/themes/types/variant";
import { commonVariant } from "../common/commonVariant";

// foundation 이용
// 옵셔널 접근자로, 에러가 나지 않도록 처리
const $color = {
  // 여기다가 미리 선언
  "mode/light": {
    primary: css`
      background-color: ${lightColor?.button?.["primary-fill"]?.value};
      color: ${lightColor?.text?.["inverse-static"]?.value};
      border: none;
      &:hover {
        background-color: ${lightColor?.button?.["primary-fill-hover"]?.value};
      }
      &:active {
        background-color: ${lightColor?.button?.["primary-fill-pressed"]
          ?.value};
      }
      &:disabled,
      &.disabled {
        background-color: ${lightColor?.button?.["disabled-fill"]?.value};
      }
    `,
    secondary: css`
      background-color: ${lightColor?.button?.["secondary-fill"]?.value};

      color: ${lightColor?.text?.["primary"]?.value};

      border-width: ${light?.["border-width"]?.["variable-regular"].value};

      border-color: ${lightColor?.button?.["secondary-border"]?.value};

      &:hover {
        background-color: ${lightColor?.button?.["secondary-fill-hover"]
          ?.value};
      }
      &:active {
        background-color: ${lightColor?.button?.["secondary-fill-pressed"]
          ?.value};
      }

      &:disabled,
      &.disabled {
        background-color: ${lightColor?.button?.["disabled-fill"]?.value};
      }
    `,
    tertiary: css`
      background-color: ${lightColor?.button?.["tertiary-fill"]?.value};

      color: ${lightColor?.text?.["basic"]?.value};

      border-width: ${light?.["border-width"]?.["variable-regular"].value};

      border-color: ${lightColor?.button?.["tertiary-border"]?.value};

      &:hover {
        background-color: ${lightColor?.button?.["tertiary-fill-hover"]?.value};
      }
      &:active {
        background-color: ${lightColor?.button?.["tertiary-fill-pressed"]
          ?.value};
        /* background-color: black; */
      }

      &:disabled,
      &.disabled {
        background-color: ${lightColor?.button?.["disabled-fill"]?.value};
      }
    `,
  },
  "mode/high-contrast": {
    primary: css`
      background-color: ${highContrastColor?.button?.["primary-fill"]?.value};

      color: ${highContrastColor?.text?.["inverse-static"]?.value};
      border: ${highContrastColor?.button?.["text-border"]?.value};

      &:hover {
        background-color: ${highContrastColor?.button?.["primary-fill-hover"]
          ?.value};
      }
      &:active {
        background-color: ${highContrastColor?.button?.["primary-fill-pressed"]
          ?.value};
      }

      &:disabled,
      &.disabled {
        background-color: ${highContrastColor?.button?.["disabled-fill"]
          ?.value};
      }
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

    tertiary: css`
      background-color: ${highContrastColor?.button?.["tertiary-fill"]?.value};

      color: ${highContrastColor?.text?.["basic"]?.value};

      border-width: ${light?.["border-width"]?.["variable-regular"].value};

      border-color: ${highContrastColor?.button?.["tertiary-border"]?.value};

      &:hover {
        background-color: ${highContrastColor?.button?.["tertiary-fill-hover"]
          ?.value};
      }
      &:active {
        background-color: ${highContrastColor?.button?.["tertiary-fill-pressed"]
          ?.value};
        /* background-color: black; */
      }

      &:disabled,
      &.disabled {
        background-color: ${highContrastColor?.button?.["disabled-fill"]
          ?.value};
      }
    `,
  },
};

const $typo = {
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

const $shape = {
  medium4: css`
    border-radius: ${semantic?.radius?.["medium4"]?.value};
  `,
  medium2: css`
    border-radius: ${semantic?.radius?.["medium2"]?.value};
  `,
  small3: css`
    border-radius: ${semantic?.radius?.["small3"]?.value};
  `,
};

const layoutCommon = `
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const $layout = {
  xlarge: css`
    ${layoutCommon}
    padding: ${semantic?.["padding"]?.["6"]?.value} ${semantic?.["padding"]?.[
      "8"
    ]?.value};
  `,
  large: css`
    ${layoutCommon}

    padding: ${semantic?.["padding"]?.["5"]?.value} ${semantic?.["padding"]?.[
      "7"
    ]?.value};
  `,
  medium: css`
    ${layoutCommon}
    padding: ${semantic?.["padding"]?.["4"]?.value} ${semantic?.["padding"]?.[
      "6"
    ]?.value};
  `,
  small: css`
    ${layoutCommon}

    padding: ${semantic?.["padding"]?.["3"]?.value} ${semantic?.["padding"]?.[
      "5"
    ]?.value};
  `,
  xsmall: css`
    ${layoutCommon}
    padding: ${semantic?.["padding"]?.["2"]?.value} ${semantic?.["padding"]?.[
      "4"
    ]?.value};
  `,
};

export const buttonVariant: Record<
  keyof CommonVariantProps,
  Record<string, any>
> = {
  $color,
  $typo,
  $shape,
  $layout,
  $elevation: commonVariant.elevation,
};
