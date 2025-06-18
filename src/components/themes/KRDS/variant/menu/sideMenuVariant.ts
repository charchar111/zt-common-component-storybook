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
import { $elevation } from "../common/commonVariant";

// foundation 이용
// 옵셔널 접근자로, 에러가 나지 않도록 처리
const color = {
  // 여기다가 미리 선언
  "mode/light": {
    "display-gradient-1": css`
      background: linear-gradient(
        ${primitiveColor?.light?.primary?.["50"].value},
        ${primitiveColor?.light?.secondary?.["40"].value}
      );
      color: ${lightColor?.text?.["inverse-static"]?.value};
    `,

    side_navigation_3depth: css`
      background-color: ${lightColor.action.white.value};
      border-color: ${lightColor.divider["gray-light"].value};
      color: ${lightColor.text.basic.value};
    `,
  },
  "mode/high-contrast": {
    "display-gradient-1": css`
      background: linear-gradient(
        ${primitiveColor?.["high-contrast"]?.primary?.["70"].value},
        ${primitiveColor?.["high-contrast"]?.secondary?.["80"].value}
      );
      color: ${highContrastColor?.text?.["inverse-static"]?.value};
    `,

    side_navigation_3depth: css`
      background-color: ${highContrastColor.action.white.value};
      border-color: ${highContrastColor.divider["gray-light"].value};
      color: ${highContrastColor.text.basic.value};
    `,
  },
};

const typo = {
  // "responsive/pc": {
  //   small: css`
  //     font-size: ${pcFontSize?.label?.["small"]?.value};
  //   `,
  //   large: css`
  //     font-size: ${pcFontSize?.label?.["large"]?.value};
  //   `,
  // },
  // "responsive/mobile": {
  //   small: css`
  //     font-size: ${mobileFontSize?.label?.["small"]?.value};
  //   `,
  //   large: css`
  //     font-size: ${mobileFontSize?.label?.["large"]?.value};
  //   `,
  // },
};

const layoutCommon = `
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const layout = {
  // small: css`
  //   ${layoutCommon}
  //   height: ${semantic?.["size-height"]?.["6"]?.value};
  //   padding: 0 ${semantic?.["padding"]?.["5"]?.value};
  // `,
  // large: css`
  //   ${layoutCommon}
  //   height: ${semantic?.["size-height"]?.["9"]?.value};
  //   padding: 0 ${semantic?.["padding"]?.["8"]?.value};
  // `,
};

export const sideMenuVariant = {
  color,
  typo,
  layout,
  $elevation,
};
