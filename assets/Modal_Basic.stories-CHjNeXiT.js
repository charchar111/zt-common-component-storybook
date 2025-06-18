import{j as a}from"./iframe-_tByA0vL.js";import{B as D}from"./Basic-CqREZtkc.js";const h={title:"Components/Modal/Basic",component:D,parameters:{layout:"centered",docs:{description:{component:`공용 모듈: 모달\r


https://www.krds.go.kr/html/site/component/component_04_05.html\r


의존성\r
이 모듈의 의존성은 다음과 같습니다.\r

기본\r
\`\`\`\r
npm install styled-components zustand re-resizable @dnd-kit/core @dnd-kit/modifiers @dnd-kit/sortable @emotion/react\r
\`\`\`\r

버전 명시 - 위 명령어가 버전 오류가 뜨는 경우 사용하세요\r
\`\`\`\r
npm install styled-components@6.1.11 zustand@5.0.3 re-resizable@6.11.2 @dnd-kit/core@6.3.1 @dnd-kit/modifiers@9.0.0 @dnd-kit/sortable@10.0.0 @emotion/react@11.14.0\r
\`\`\``}}}},e={args:{id:"my_alarm1",content:"알람 1"}},r={args:{id:"my_confirm1",footerVariantName:"confirm",content:"확인 1"}},n={args:{id:"my_prompt1",footerVariantName:"prompt",content:a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"다음 값을 입력해주세요"}),a.jsx("input",{type:"text"})]})}},t={args:{id:"my_title1",title:"모달 제목",content:"모달 컨텐츠"}},o={args:{id:"my_no_dim",dim:{active:!1},content:"dim이 없습니다"}},s={args:{id:"my_no_close_after_dim_click",dim:{active:!0,isCloseOnDimClick:!1},content:"dim 을 클릭해도 모달이 꺼지지 않습니다."}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: "my_alarm1",
    content: "알람 1"
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: "my_confirm1",
    footerVariantName: "confirm",
    content: "확인 1"
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,_,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: "my_prompt1",
    footerVariantName: "prompt",
    content: <>\r
        <p>다음 값을 입력해주세요</p>\r
        <input type="text" />\r
      </>
  }
}`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var g,y,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "my_title1",
    title: "모달 제목",
    content: "모달 컨텐츠"
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,x,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: "my_no_dim",
    dim: {
      active: false
    },
    content: "dim이 없습니다"
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var N,b,j;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: "my_no_close_after_dim_click",
    dim: {
      active: true,
      isCloseOnDimClick: false
    },
    content: "dim 을 클릭해도 모달이 꺼지지 않습니다."
  }
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const v=["Alert","Confirm","Prompt","Title","NoDim","NoCloseAfterDimClick"],A=Object.freeze(Object.defineProperty({__proto__:null,Alert:e,Confirm:r,NoCloseAfterDimClick:s,NoDim:o,Prompt:n,Title:t,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{A as M};
