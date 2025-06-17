import type { DefaultTheme } from "styled-components/dist/types";

/**
 * @description theme > variant에서 스타일 값을 추출하는 유틸
 * @param theme styled-components의 theme 객체
 * @param component 'button' | 'input' | 'tag' 등 variant 내 키
 * @param category variant를 구성하는 타입 'color' | 'typo' | 'layout' 등
 * @param name 실제 key값 (예: 'primary', 'large', 등)
 * @param context context 키 (예: 'mode/light', 'responsive/desktop') — 없으면 단일 depth로 처리
 * @returns 추출된 스타일 값 또는 undefined
 */
export const getThemeVariantValue =
  ({ theme, component }: { theme: DefaultTheme; component: string }) =>
  ({
    category,
    context,
    name,
  }: {
    category: string;
    context?: string;
    name: string;
  }) => {
    if (!theme?.variant?.[component]?.[category]) return undefined;

    return context
      ? theme.variant[component][category][context]?.[name]
      : theme.variant[component][category]?.[name];
  };

/**
 * theme > foundation에서 스타일 값을 추출하는 유틸
 * @param theme 테마
 * @param path
 * @returns
 */
export const getThemeFoundationValue = (
  theme: Record<string, any>,
  path: string[]
) => path.reduce((acc, cur) => acc?.[cur], theme?.foundation)?.value;
