// 전처리된 토큰을 기반으로 생성
// 파일이 이리저리 흩어져 있는데 나중에 패키지끼리 모을 것

import resolvedToken from "@designTokens/build/tokens_resolved";

// variant에서 깊은 중첩 경로를 찾는 점 접근자 문법을 계속 써서 가독성 더러움. 그래서 숏 컷으로 만듬
export const primitive = resolvedToken["primitive/value-set"];
export const primitiveColor = resolvedToken["primitive/value-set"]?.color;
export const primitiveTypo = resolvedToken["primitive/value-set"]?.typo;
export const primitiveNumber = resolvedToken["primitive/value-set"]?.number;
export const semantic = resolvedToken["semantic/value-set"];

export const light = resolvedToken?.["mode/light"];
export const lightColor = light?.color;
export const highContrast = resolvedToken?.["mode/high-contrast"];
export const highContrastColor = highContrast?.color;

export const pc = resolvedToken?.["responsive/pc"];
export const pcFontSize = pc?.["font-size"];
export const mobile = resolvedToken?.["responsive/pc"];
export const mobileFontSize = mobile?.["font-size"];
