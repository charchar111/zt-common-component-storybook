// 주요 variant 타입. (강제 아님)
// 이 부분은 디자인 토큰의 인덱스 타입을 가져와야 할려나

type VariantColor = "primary" | "secondary" | "tertiary";
type VariantSize = "small" | "large";
type VariantShape = string;
type VariantLayout = "small" | "large";
type VariantElevation = "shadow1" | "shadow2" | "shadow3" | "shadow4";

type Loose<T extends string> = T | (string & {});

export type CommonVariantProps = {
  /** 색상 선택: color, background-color, border-color */
  $color?: Loose<VariantColor>;

  /** 타이포그래피 선택: font-family, font-size, font-weight */
  $typo?: Loose<VariantSize>;

  /** 외형 선택: border-radius */
  $shape?: Loose<VariantShape>;

  /** 레이아웃 선택: margin, padding, gap */
  $layout?: Loose<VariantLayout>;

  /** 고도 표현 선택: box-shadow */
  $elevation?: Loose<VariantElevation>;
};
