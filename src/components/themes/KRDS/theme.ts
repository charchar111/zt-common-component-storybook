import resolvedToken from "@designTokens/build/tokens_resolved";
import { ISharedDesignTheme } from "../types/theme";
import { boxVariant } from "./variant/box/boxVariant";
import { buttonVariant } from "./variant/button/buttonVariant";
import { commonVariant } from "./variant/common/commonVariant";
import { inputVariant } from "./variant/input/inputVariant";
import { sideMenuVariant } from "./variant/menu/sideMenuVariant";
import { modalVariant } from "./variant/modal/modalVariant";
import { optionVariant } from "./variant/option/optionVariant";
import { selectVariant } from "./variant/select/selectVariant";

const KRDStheme: ISharedDesignTheme = {
  // 부가 정보: 이름, 선택 가능한 옵션 배열(mode, responsive)
  meta: {
    name: "KRDStheme",
    label: "KRDS 테마",
    options: {
      mode: {
        label: "색상 모드",
        description: undefined,

        value: [
          {
            value: "light",
            label: "라이트",
          },
          {
            value: "high-contrast",
            label: "고대비/다크",
          },
        ],
      },

      responsive: {
        label: "반응형 설정",
        description: undefined,

        value: [
          {
            value: "mobile",
            label: "모바일",
          },
          {
            value: "high-contrast",
            label: "pc",
          },
        ],
      },
    },
  },
  options: {
    mode: "light",
    responsive: "pc",
  },
  foundation: resolvedToken,

  // 일단, 1depth 객체로만 구현
  // 나중에 필요에 따라, 2depth로 그룹화(KRDS는 컴포넌트를 1~3depth로 그룹)
  variant: {
    // 공용
    common: commonVariant,

    // 엘리베이션 개념이 있는 박스 (배경 body 제외)
    box: boxVariant,

    // 버튼
    button: buttonVariant,

    // 인풋(텍스트, 날짜 입력 인풋)
    input: inputVariant,

    // 모달
    modal: modalVariant,

    //옵션 : select의 옵션
    option: optionVariant,

    // 주어진 옵션 내에서 무언가를 선택할 수 있는 UI (Radio button (라디오 버튼), Checkbox (체크박스), Select (셀렉트), Tag (태그), Toggle switch (토글 스위치))
    //일단 select만 구현
    select: selectVariant,

    // 사이드 메뉴
    sideMenu: sideMenuVariant,
  },
};

export default KRDStheme;
