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
import { $elevation } from "../common/commonVariant";

// foundation 이용
// 옵셔널 접근자로, 에러가 나지 않도록 처리
const color = {
  // 여기다가 미리 선언
  "mode/light": {
    primary: css`
      background: ${lightColor?.surface?.["white-subtler"]?.value};
      /* background: ${lightColor?.surface?.white?.value}; */

      color: ${lightColor?.text?.["basic"]?.value};
    `,
  },
  "mode/high-contrast": {
    primary: css`
      background: ${highContrastColor?.surface?.["white-subtler"]?.value};
      color: ${highContrastColor?.text?.["basic"]?.value};
    `,
  },
};
// const typo = {
//   "responsive/pc": {
//     small: css`
//       font-size: ${pcFontSize?.label?.["small"]?.value};
//     `,
//     large: css`
//       font-size: ${pcFontSize?.label?.["large"]?.value};
//     `,
//   },
//   "responsive/mobile": {
//     small: css`
//       font-size: ${mobileFontSize?.label?.["small"]?.value};
//     `,
//     large: css`
//       font-size: ${mobileFontSize?.label?.["large"]?.value};
//     `,
//   },
// };

export const modalVariant = {
  color,
  $elevation,
};
