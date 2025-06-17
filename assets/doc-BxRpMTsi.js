import{j as n}from"./iframe-DLpz0ihO.js";import{useMDXComponents as o}from"./index-BTMQzPkp.js";import{M as i}from"./blocks-B0rTFDvk.js";import{D as t}from"./doc.stories-DeCqaOir.js";import"./index-Bhk6geoC.js";import"./index-Caq1TMZb.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",p:"p",pre:"pre",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:t}),`
`,n.jsx(e.h1,{id:"디자인-시스템---foundationtokens",children:"디자인 시스템 - Foundation(Tokens)"}),`
`,n.jsx(e.p,{children:`이 페이지는 디자인 시스템 내에서 파운데이션(Foundation)에 해당합니다.\r
파운데이션은 컴포넌트의 스타일에 사용될 CSS 속성 값들을 선별하여 key-value 객체로 만든 것입니다.\r
(디자인 토큰이라고도 부릅니다)`}),`
`,n.jsx(e.h2,{id:"디자인-리스트",children:"디자인 리스트"}),`
`,n.jsx("ul",{children:n.jsx("li",{children:n.jsx("a",{href:"https://www.krds.go.kr/html/site/outline/outline_03.html",target:"_blank",children:n.jsx(e.p,{children:"KRDS"})})})}),`
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
`})})]})}function m(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{m as default};
