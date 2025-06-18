import{j as n}from"./iframe-_tByA0vL.js";import{useMDXComponents as i}from"./index-BCSMzD8e.js";import{M as o}from"./blocks-Bw1FhQcD.js";import{D as t}from"./doc.stories-DeCqaOir.js";import"./index-Bw7C28aC.js";import"./index-DJcASr_u.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",p:"p",pre:"pre",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:t}),`
`,n.jsx(e.h1,{id:"디자인-시스템---foundationtokens",children:"디자인 시스템 - Foundation(Tokens)"}),`
`,n.jsx(e.p,{children:`이 페이지는 디자인 시스템 내에서 파운데이션(Foundation)에 해당합니다.\r
파운데이션은 컴포넌트의 스타일에 사용될 CSS 속성 값들을 선별하여 key-value 객체로 만든 것입니다.\r
(디자인 토큰이라고도 부릅니다)`}),`
`,n.jsx(e.h2,{id:"디자인-리스트",children:"디자인 리스트"}),`
`,n.jsx("ul",{children:n.jsx("li",{children:n.jsx("a",{href:"https://www.krds.go.kr/html/site/outline/outline_03.html",target:"_blank",children:n.jsx(e.p,{children:"KRDS"})})})}),`
`,n.jsx(e.h1,{id:"시작하기",children:"시작하기"}),`
`,n.jsx(e.h2,{id:"전처리-스크립트-실행-방법",children:"전처리 스크립트 실행 방법"}),`
`,n.jsx(e.p,{children:`해당 토큰은 figma에서 token-studio를 통해 다운로드하며, 단일한 JSON 파일 형식으로 다운받으면 됩니다.\r
다운로드 받은 토큰 파일은 ./design_tokens/source/tokens.json에 위치합니다.\r
해당 파일은 피그마 고유의 문법(figma에서는 변수를 참조할 때 중괄호를 사용함)으로 구현되어 있으므로 전처리가 필요합니다.\r
전처리는 resolveToken.mjs 가 담당합니다.`}),`
`,n.jsx(e.h3,{id:"의존성-설치",children:"의존성 설치"}),`
`,n.jsx(e.p,{children:"스크립트 실행을 위해 먼저 아래 의존성을 설치한다."}),`
`,n.jsx(e.h5,{id:"최신-버전-설치",children:"최신 버전 설치"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install --save-dev style-dictionary @tokens-studio/sd-transforms
`})}),`
`,n.jsx(e.h5,{id:"의존성-명시-설치",children:"의존성 명시 설치"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install --save-dev style-dictionary@4.0.0 @tokens-studio/sd-transforms@1.3.0
`})}),`
`,n.jsx(e.h3,{id:"스크립트-실행",children:"스크립트 실행"}),`
`,n.jsx(e.p,{children:"해당 파일은 아래 명령어로 실행하며, 성공 시, ./design_tokens/source/tokens_resolved.json에 전처리된 토큰이 생성된다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run resolveToken
`})}),`
`,n.jsx(e.h1,{id:"동작-방식",children:"동작 방식"}),`
`,n.jsx(e.p,{children:"디자인 시스템은 가장 저 계층인 token 부터 실제로 사용하는 component 까지 다음 계층들로 구성됩니다."}),`
`,n.jsx(e.p,{children:`token\r
프로젝트에서 사용할 css 값들을 key-value 형식으로 미리 저장해놓은 것\r
일관적인 css 사용을 위함`}),`
`,n.jsx(e.p,{children:`primitive\r
토큰 내에서 가장 저 계층의 값. 실제 css 속성 값을 저장\r
종류 : color, typo, number`}),`
`,n.jsx(e.p,{children:`semantic\r
primitive를 바탕으로, surface, button, box, input 등 의미론적 단위의 디자인 토큰을 구성\r
다크모드/라이트 모드에 따라 mode, 반응형 폰트 및 레이아웃에 따라 responsive로 구분`}),`
`,n.jsx(e.p,{children:"mode"}),`
`,n.jsx(e.p,{children:"light - 라이트 모드, high-contrast - 고대비/다크 모드"}),`
`,n.jsx(e.p,{children:"responsive"}),`
`,n.jsx(e.p,{children:"pc, mobile로 구분"}),`
`,n.jsx(e.p,{children:"variant"}),`
`,n.jsx(e.p,{children:`token을 조합하여 몇 가지 css 템플릿을 만든 것입니다.\r
모든 컴포넌트는 5타입의 베리언트를 가집니다.`}),`
`,n.jsx(e.p,{children:"$color - 색상 관련 값. 라이트 모드, 다크 모드로 구분됩니다. background-color, color"}),`
`,n.jsx(e.p,{children:"$typo: 폰트, 글자 크기, 줄 간격 등 타이포그래피 관련 값"}),`
`,n.jsx(e.p,{children:"$shape: 테두리 반경, 테두리 두께 등 도형(모양) 관련 값"}),`
`,n.jsx(e.p,{children:"$layout: 마진, 패딩, 그리드 등 레이아웃 관련 값"}),`
`,n.jsx(e.p,{children:"$elevation: 그림자, 입체감(레이어) 관련 값"}),`
`,n.jsx(e.p,{children:"baseCss"}),`
`,n.jsx(e.p,{children:"component(atom)"})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
