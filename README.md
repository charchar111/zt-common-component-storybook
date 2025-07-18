# 공용 모듈 임시 / 스토리북

공용 컴포넌트를 위한 임시 스토리북

주소
<a href="https://charchar111.github.io/zt-common-component-storybook/?path=/docs/configure-your-project--docs">https://charchar111.github.io/zt-common-component-storybook/?path=/docs/configure-your-project--docs</a>

# 리스트

디자인 토큰(파운데이션)

버튼

파일 업로더

브라우저 파일 다운로더

모달

# 배포 방법

1. 빌드 파일 생성

아래 커멘드를 실행하여 빌드 파일 생성

```
npm run build-storybook
```

2. github 페이지에 정적 배포
   아래 커멘드를 실행하여 빌드 파일 생성

```
npm run storybook:deploy
```

# 로컬에서 실행 방법

아래 커멘드를 실행하여 로컬 스토리북 서버 실행

```
npm run storybook
```

# 기여 방식

부족한 프로젝트이다보니 작은 기여라도 큰 도움이 됩니다.
아래 규칙을 읽어주시면 더욱 큰 도움이 될 것 같습니다.

## 모듈은 폐쇄적이어야 합니다.

스토리에 사용되는 컴포넌트는 폴더를 만드시고 관련된 모든 것들을 내부에 집어 넣어 주세요. asset도 예외는 아닙니다.
컴포넌트 간에 중복되는 이미지나 svg가 존재할 수 있지만, 그럼에도 각 컴포넌트 내에 모두 담아줘야 하나로 패키징하여 수정하거나 사용하고 삭제하기 편리합니다.

## 타입 파일은 .d.ts로 작성하면 스토리북이 자동 문서 작성 기능을 일부 수행하지 못합니다.

스토리북은 autodoc라는 기능을 통해 타입 코드를 추적하여 자동으로 문서를 작성합니다.
그런데, 이유는 잘 모르겠으나, .d.ts의 타입 및 주석은 추적해서 작성하지 못합니다.
그러니 가능하면 타입 파일은 .ts로 작성해주세요

## 폴더 구조

components - 실제로 사용하는 패키지들의 집합입니다.

stories - components 내 패키지들을 테스트하기 위한 라우트 설정, 테스트 페이지 컴포넌트들이 위치 합니다.

design_tokens - 디자인 시스템에 사용되는 디자인 토큰입니다. 피그마의 토큰 스튜디오로 추출한 json 파일을 프론트에서 사용할 수 있도록 전처리하는 스크립트입니다.
