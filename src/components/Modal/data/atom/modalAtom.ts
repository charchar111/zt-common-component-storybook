import { create } from "zustand";
import { IModalController, IModalFlag } from "../../types/state";

/**
 * 모달에 사용되는 컴포넌트 정보 정의
 * @property metadata - 모달 고유 식별자 포함
 * @property metadata.id - 모달 고유 ID
 * @property container - 모달 컨테이너 스타일 정보 (선택)
 * @property container.style - CSS 스타일 속성의 부분 집합
 * @property component - 모달에 렌더링될 React 컴포넌트 함수, 모달 컨트롤러/셋터/modalFlag 인자
 * @property custom - 사용자 정의 데이터 저장 객체 (선택)
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
 * Zustand 스토어의 슬라이스
 *
 * @책임 모달
 *
 * @property show - 모달 표시 여부
 * @property dim - 딤처리(배경 어둡게) 관련 상태 객체
 * @property dim.active - 딤처리 활성화 여부
 * @property documentBody - document.body에 적용할 스타일 정보 (선택)
 * @property documentBody.style - CSS 스타일 속성의 부분 집합
 * @property modals - 활성화된 모달 컴포넌트 배열
 * @property setState - 상태 업데이트 함수
 */
export interface ImodalsAtom {
  show?: boolean;
  dim?: {
    active: boolean;
    isCloseOnDimClick?: boolean; // 딤 클릭 시 모달 닫기 여부
  };

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
  update: Partial<T> | ((prev: T) => Partial<T>),
) => void;

// Zustand store
export const useModalsStore = create<ImodalsAtom>((set, get) => ({
  // 모달 렌더링 여부를 결정하는 최고 권한의 플래그. 이 값은 평소에 활성화하다가 비상 경우에만 끌 것
  show: true,
  dim: {
    active: true,
    isCloseOnDimClick: true,
  },

  modals: [],
  documentBody: undefined,

  setState: (update) => {
    const prev = get();
    const partial = typeof update === "function" ? update(prev) : update;
    set({ ...prev, ...partial });
  },
}));
