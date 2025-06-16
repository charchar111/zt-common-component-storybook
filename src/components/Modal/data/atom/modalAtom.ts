import { create } from "zustand";
import { IModalController, IModalFlag } from "../../types/state";
import { MODAL_INNER_BOUND_SIZE_UNIT_PIXEL } from "../../constants/constants";

/**
 * 모달에 사용되는 컴포넌트 정보 정의
 * @property metadata - 모달 고유 식별자 포함
 * @property metadata.id - 모달 고유 ID
 * @property container - 모달 컨테이너 스타일 정보 (선택)
 * @property container.style - CSS 스타일 속성의 부분 집합
 * @property container.resize - 리사이즈 가능 여부 (선택)
 * @property container.resize.able - 리사이즈 가능 여부
 * @property container.dragAndDrop - 드래그 앤 드롭 가능 여부 (선택)
 * @property container.dragAndDrop.able - 드래그 앤 드롭 가능 여부
 * @property component - 모달에 렌더링될 React 컴포넌트 함수, 모달 컨트롤러/셋터/modalFlag 인자
 *
 *  @property custom - 사용자 정의 데이터 저장 객체 (선택)
 */
export interface ImodalsComponentAtom {
  metadata: {
    id: string;
  };
  container?: {
    style?: Partial<Record<keyof CSSStyleDeclaration, string>>;

    resize?: {
      able?: boolean;
    };
    dragAndDrop?: {
      able?: boolean;
    };
  };
  /**
   * 모달에 렌더링될 React 컴포넌트 함수
   * @param arg - 모달 컨트롤러, 셋터, 플래그를 포함하는 객체
   * @param arg.modalController - 모달 컨트롤러 객체
   * @param arg.modalFlag - 모달 플래그 객체(최대화, 리사이즈, 드래그 가능 여부)
   * @returns React 컴포넌트
   */
  component: (arg: {
    modalController: IModalController;
    setModalController: React.Dispatch<React.SetStateAction<IModalController>>;
    modalFlag: IModalFlag;
  }) => React.ReactNode;
  custom?: {
    [key: string]: any;
  };
}

/**
 * 딤처리(배경 어둡게) 관련 상태 객체
 * @property active - 딤처리 활성화 여부
 * @property isCloseOnDimClick - 딤 클릭 시 모달 닫기 여부
 * @property styles - 딤 컴포넌트 내 요소의 스타일  (선택)
 * @property styles.dimRoot - 딤 컴포넌트 내 dim_root 요소의 style
 * @property styles.dimInner - 딤 컴포넌트 내 dim_inner 요소의 style
 */
export interface ImodalsAtomDim {
  active: boolean;
  isCloseOnDimClick?: boolean; // 딤 클릭 시 모달 닫기 여부
  innerBoundSizeUnitPixel?: number; // 모달이 드래그될 수 있는 바운더리
  styles?: {
    dimRoot?: Partial<Record<keyof CSSStyleDeclaration, string>>;
    dimInner?: Partial<Record<keyof CSSStyleDeclaration, string>>;
  };
}

/**
 * Zustand 스토어의 슬라이스
 *
 * @책임 모달
 *
 * @property show - 모달 표시 여부
 * @property dim - 딤처리(배경 어둡게) 관련 상태 객체
 * @property documentBody - document.body에 적용할 스타일 정보 (선택)
 * @property documentBody.style - CSS 스타일 속성의 부분 집합
 * @property modals - 활성화된 모달 컴포넌트 배열
 * @property setState - 상태 업데이트 함수
 */
export interface ImodalsAtom {
  show?: boolean;
  dim?: ImodalsAtomDim;

  documentBody?: {
    style?: Partial<Record<keyof CSSStyleDeclaration, string>>;
  };
  modals: ImodalsComponentAtom[];
  setState: SigSetState<ImodalsAtom>;
}

/**
 * Zustand setState 함수의 시그니처 타입
 */
export type SigSetState<T> = (
  update: Partial<T> | ((prev: T) => Partial<T>)
) => void;

// Zustand store
export const useModalsStore = create<ImodalsAtom>((set, get) => ({
  // 모달 렌더링 여부를 결정하는 최고 권한의 플래그. 이 값은 평소에 활성화하다가 비상 경우에만 끌 것
  show: true,
  dim: {
    active: true,
    isCloseOnDimClick: true,
    innerBoundSizeUnitPixel: MODAL_INNER_BOUND_SIZE_UNIT_PIXEL,
  },

  modals: [],
  documentBody: undefined,

  setState: (update) => {
    const prev = get();
    const partial = typeof update === "function" ? update(prev) : update;
    set({ ...prev, ...partial });
  },
}));
