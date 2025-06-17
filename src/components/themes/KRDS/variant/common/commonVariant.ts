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

/**
 * 컴포넌트에 상관없이 공용으로 사용하는 배리언트
 */

const commonElevation = {
  shadow1: css`
    box-shadow:
      0 1px 2px 0 ${lightColor.alpha.shadow1.value},
      0 0 2px 0 ${lightColor.alpha.shadow1.value};
  `,
  shadow2: css`
    box-shadow:
      0 0 2px 0 ${lightColor.alpha.shadow1.value},
      0 4px 8px 0 ${lightColor.alpha.shadow2.value};
  `,
  shadow3: css`
    box-shadow:
      0 0 2px 0 ${lightColor.alpha.shadow2.value},
      0 8px 16px 0 ${lightColor.alpha.shadow3.value};
  `,
  shadow4: css`
    box-shadow:
      0 0 2px 0 ${lightColor.alpha.shadow2.value},
      0 16px 24px 0 ${lightColor.alpha.shadow3.value};
  `,
};

// 얘는 특이한게, 다 똑같음. 그래서, 별도로 공용인 common 이라고 만들어줌줌
export const elevation = {
  "common": commonElevation,
  "mode/light": commonElevation,
  "mode/high-contrast": commonElevation,
};

export const commonVariant = {
  elevation,
};
