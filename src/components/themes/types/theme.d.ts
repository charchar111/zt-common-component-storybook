import type { ISharedDesignThemeFoundation } from "./foundations/types/foundation";

// 테마별 디자인 시스템
// foundation : 기본 디자인 토큰. 1계층(primitive), 2계층(semantic, mode-*, responsie-*)으로 구성
// 2계층에서 semantic은 공통으로 사용되는 디자인 토큰을 정의하고,
// mode-*는 각 모드에 따라 다르게 적용되는 디자인 토큰을 정의(색상)
// responsive-*는 반응형 디자인을 위한 디자인 토큰을 정의(폰트 사이즈, 여백 등)
// component : 컴포넌트별 디자인 토큰. 1계층(primitive), 2계층(semantic, mode-*, responsie-*)으로 구성
export interface ISharedDesignTheme {
  meta: {
    name: string;
    label?: string;
    options: {
      [optionKeyName: string]: {
        label: string;
        description?: string;

        value: { value: string; label: string }[];
      };
    };
  };
  options?: {
    mode?: "light" | "high-contrast";
    responsive?: "pc" | "mobile";
  };
  foundation: ISharedDesignThemeFoundation;
  variant: {
    [componentNameKey: string]: {
      color?: {
        [modeKey: string]: Record<string, any>;
      };
      typo?: {
        [responsiveKey: string]: Record<string, any>;
      };
      layout?: Record<string, any>;
      [key: string]: any;
    };
  };
}
