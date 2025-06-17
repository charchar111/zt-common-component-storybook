// 이건 필요 없을 것 같아서 일단 주석 처리함
// 근데 필요할 수도 잇음

// // 실제 토큰 값
// type Token = {
//   value: string;
//   type: string;
//   description?: string;
//   original?: {
//     value: string;
//     type: string;
//     description?: string;
//   };
// };

// type ColorCategory =
//   | "primary"
//   | "secondary"
//   | "gray"
//   | "alpha"
//   | "danger"
//   | "information"
//   | "warning"
//   | "success"
//   | "point"
//   | "graphic";

// // 디자인 토큰 - foundation - 1계층(primitive)
// // color는 2계층의 mode-*와 종류 명칭이 동일해야 함
// interface IDesignTokenPrimitive {
//   color: {
//     [key: "light" | "high-contrast" | string]: {
//       [key in ColorCategory]?: {
//         [key: string]: Token;
//       };
//     };
//   };

//   typo: {
//     font: {
//       type: Token;
//     };
//     "font-weight": {
//       regular: Token;
//       bold: Token;
//     };
//     "letter-spacing": {
//       [key: string]: Token;
//     };
//   };

//   number: { [key: string]: Token };
// }

// // 디자인 토큰 - foundation - 2계층(semantic)
// interface IDesignTokenSemantic {
//   gap: Record<string, Token>;
//   padding: Record<string, Token>;
//   "size-height": Record<string, Token>;
//   radius: Record<string, Token>;
// }

// // 디자인 토큰 - foundation - 2계층(mode-*)
// interface IDesignTokenMode {
//   color: {
//     surface: {
//       "gray-subtler": Token;
//       "gray-subtle": Token;
//       disabled: Token;
//       "primary-subtler": Token;
//       "secondary-subtler": Token;
//       "danger-subtler": Token;
//       "warning-subtler": Token;
//       "success-subtler": Token;
//       "information-subtler": Token;
//       "point-subtler": Token;
//       white: Token;
//       inverse: Token;
//       "white-static": Token;
//       "inverse-static": Token;
//       "white-subtle": Token;
//       "white-subtler": Token;
//     };
//     border: {
//       "gray-light": Token;
//       gray: Token;
//       "secondary-light": Token;
//       "danger-light": Token;
//       danger: Token;
//       "warning-light": Token;
//       warning: Token;
//       "success-light": Token;
//       success: Token;
//       "information-light": Token;
//       information: Token;
//       "gray-dark": Token;
//       primary: Token;
//       disabled: Token;
//       "gray-darker": Token;
//       secondary: Token;
//       inverse: Token;
//       transparency: Token;
//       "primary-light": Token;
//       point: Token;
//       "point-light": Token;
//     };
//     divider: {
//       "gray-light": Token;
//       gray: Token;
//       "gray-dark": Token;
//       primary: Token;
//       "secondary-light": Token;
//       secondary: Token;
//       error: Token;
//       "primary-light": Token;
//       inverse: Token;
//       "gray-darker": Token;
//       point: Token;
//     };
//     text: {
//       bolder: Token;
//       subtle: Token;
//       disabled: Token;
//       "disabled-on": Token;
//       primary: Token;
//       secondary: Token;
//       danger: Token;
//       warning: Token;
//       success: Token;
//       information: Token;
//       basic: Token;
//       point: Token;
//       "bolder-inverse": Token;
//       "basic-inverse": Token;
//       "subtle-inverse": Token;
//       "inverse-static": Token;
//       static: Token;
//     };
//     icon: {
//       gray: Token;
//       "gray-fill": Token;
//       inverse: Token;
//       primary: Token;
//       secondary: Token;
//       point: Token;
//       danger: Token;
//       warning: Token;
//       success: Token;
//       information: Token;
//       "gray-light": Token;
//       disabled: Token;
//       "disabled-on": Token;
//       "inverse-static": Token;
//       "primary-static": Token;
//       "secondary-static": Token;
//       "point-static": Token;
//       "danger-static": Token;
//       "warning-static": Token;
//       "success-static": Token;
//       "information-static": Token;
//       "gray-static": Token;
//     };
//     link: {
//       default: Token;
//       hover: Token;
//       pressed: Token;
//       visited: Token;
//     };
//     button: {
//       "primary-fill": Token;
//       "primary-fill-hover": Token;
//       "primary-fill-pressed": Token;
//       "secondary-fill": Token;
//       "secondary-fill-hover": Token;
//       "secondary-fill-pressed": Token;
//       "secondary-border": Token;
//       "tertiary-fill": Token;
//       "tertiary-fill-hover": Token;
//       "tertiary-fill-pressed": Token;
//       "tertiary-border": Token;
//       "disabled-fill": Token;
//       "text-fill-hover": Token;
//       "text-fill-pressed": Token;
//       "text-fill": Token;
//       "text-border": Token;
//       "disabled-border": Token;
//     };
//     background: {
//       white: Token;
//       inverse: Token;
//       "gray-subtler": Token;
//       "gray-subtle": Token;
//       dim: Token;
//     };
//     element: {
//       "disabled-light": Token;
//       "disabled-dark": Token;
//       "gray-lighter": Token;
//       "gray-light": Token;
//       gray: Token;
//       "primary-lighter": Token;
//       "primary-light": Token;
//       primary: Token;
//       "secondary-lighter": Token;
//       "secondary-light": Token;
//       secondary: Token;
//       "point-lighter": Token;
//       "point-light": Token;
//       point: Token;
//       "danger-lighter": Token;
//       danger: Token;
//       "warning-lighter": Token;
//       warning: Token;
//       "success-lighter": Token;
//       success: Token;
//       "information-lighter": Token;
//       information: Token;
//       inverse: Token;
//       "gray-dark": Token;
//       "inverse-static": Token;
//       "logo-text": Token;
//     };
//     action: {
//       white: Token;
//       primary: Token;
//       "primary-hover": Token;
//       "primary-pressed": Token;
//       secondary: Token;
//       "secondary-hover": Token;
//       "secondary-pressed": Token;
//       "secondary-selected": Token;
//       "secondary-on": Token;
//       "secondary-on-hover": Token;
//       "secondary-on-pressed": Token;
//       "secondary-on-selected": Token;
//       "secondary-active": Token;
//       "primary-active": Token;
//       disabled: Token;
//       "primary-selected": Token;
//     };
//     input: {
//       border: Token;
//       "border-disabled": Token;
//       "border-active": Token;
//       "border-error": Token;
//       surface: Token;
//       "surface-disabled": Token;
//     };
//     graphic: {
//       "blue-subtler": Token;
//       "blue-subtle": Token;
//       blue: Token;
//       "blue-dark": Token;
//       "blue-darker": Token;
//       "red-subtler": Token;
//       "red-subtle": Token;
//       red: Token;
//       "red-dark": Token;
//       "red-darker": Token;
//       brand: Token;
//     };
//     alpha: {
//       base100: Token;
//       base50: Token;
//       base25: Token;
//       base0: Token;
//       inverse100: Token;
//       inverse50: Token;
//       inverse25: Token;
//       inverse0: Token;
//       base75: Token;
//       inverse75: Token;
//       inverse10: Token;
//       base10: Token;
//       shadow1: Token;
//       shadow2: Token;
//       shadow3: Token;
//     };
//   };
//   "border-width": {
//     "variable-regular": Token;
//     "variable-medium": Token;
//     "static-regular": Token;
//     "static-medium": Token;
//   };
//   shadow: { "y-3": Token; "blur-3": Token; "blur-4": Token; "y-4": Token };
// }
// // 디자인 토큰 - foundation - 2계층(responsive-*)
// interface IDesignTokenResponsive {
//   "font-size": {
//     display: {
//       large: Token;
//       medium: Token;
//       small: Token;
//     };
//     body: {
//       large: Token;
//       medium: Token;
//       small: Token;
//       xsmall: Token;
//     };
//     label: {
//       large: Token;
//       medium: Token;
//       small: Token;
//       xsmall: Token;
//     };
//     heading: {
//       xlarge: Token;
//       large: Token;
//       medium: Token;
//       small: Token;
//       xsmall: Token;
//       xxsmall: Token;
//     };
//     navigation: {
//       "title-medium": Token;
//       "title-small": Token;
//       "depth-medium-bold": Token;
//       "depth-medium": Token;
//       "depth-small-bold": Token;
//       "depth-small": Token;
//     };
//   };
//   "gap-layout": {
//     "header-breadcrumb": Token;
//     "left-contents": Token;
//     "contents-right": Token;
//     "h1-h2": Token;
//     "h2-h2": Token;
//     "h2-h3": Token;
//     "h3-h3": Token;
//     "h3-h4": Token;
//     "h4-h4": Token;
//     "h4-h5": Token;
//     "h5-h5": Token;
//     "title-body-small": Token;
//     "title-body-medium": Token;
//     "title-body-large": Token;
//     "breadcrumb-h1": Token;
//     "contents-footer": Token;
//     "text-text-large": Token;
//     "text-text-medium": Token;
//     "text-text-small": Token;
//     "image-text-small": Token;
//     "image-text-medium": Token;
//     "image-text-large": Token;
//   };
//   "padding-card": {
//     large: Token;
//     medium: Token;
//     small: Token;
//     xsmall: Token;
//   };
// }

// export interface ISharedDesignThemeFoundation {
//   "primitive/value-set": IDesignTokenPrimitive;
//   "semantic/value-set": IDesignTokenSemantic;
//   "mode/light": IDesignTokenMode;
//   "mode/high-contrast": IDesignTokenMode;
//   "responsive/pc": IDesignTokenResponsive;
//   "responsive/mobile": IDesignTokenResponsive;

//   $themes?: any[];
//   $metadata?: {
//     tokenSetOrder: string[];
//   };
// }
