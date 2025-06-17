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
      color: ${lightColor?.icon?.gray?.value};

      transition: all 0.2s ease-in-out;
    `,
  },
  "mode/high-contrast": {
    primary: css`
      color: ${highContrastColor?.icon?.gray?.value};
    `,
  },
};

const typo = {
  "responsive/pc": {
    small: css`
      font-size: ${pcFontSize?.label?.["small"]?.value};
      line-height: 1.5;
    `,
    medium: css`
      font-size: ${pcFontSize?.label?.["medium"]?.value};
      line-height: 1.5;
    `,
    large: css`
      font-size: ${pcFontSize?.label?.["large"]?.value};
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

export const selectVariant = {
  color,
  typo,
};
