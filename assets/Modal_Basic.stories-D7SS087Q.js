import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as q,g as F,M as P,a as R,b as H,c as J,d as L}from"./mapping-CPoDVprq.js";import{r as p}from"./iframe--kR50_tf.js";import"./index-Bu7pCSoE.js";import"./index-CHIENVIM.js";function N({title:u,dim:O}){const[m,s]=p.useState(),l=q(o=>o.setState),z=p.useMemo(()=>F("default"),[]),T=p.useCallback(()=>{if(m){s(void 0),l(r=>({...r,documentBody:void 0,modals:r.modals.filter(E=>E.metadata.id!==m)}));return}const o="스와이프 맵";s(o),l(r=>({...r,dim:O||void 0,modals:[...r.modals,{metadata:{id:String(o)},container:{style:z},component:()=>e.jsxs(P,{children:[u?e.jsx(R,{title:u,onClose:()=>{s(void 0)}}):null,e.jsx(H,{}),e.jsx(J,{})]})}]}))},[m,s,l]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:T,children:"모달 열기"}),e.jsx(L,{})]})}N.__docgenInfo={description:`가장 기본적인 형태의 모달 예시\r
@param param0\r
@returns`,methods:[],displayName:"Basic",props:{title:{required:!1,tsType:{name:"string"},description:""},dim:{required:!1,tsType:{name:'ImodalsAtom["dim"]',raw:'ImodalsAtom["dim"]'},description:""}}};const W={title:"모듈/Modal/Basic",component:N,parameters:{layout:"centered",docs:{description:{component:`공용 모듈: 모달\r


https://www.krds.go.kr/html/site/component/component_04_05.html\r


의존성\r
이 모듈의 의존성은 다음과 같습니다.\r

기본\r
\`\`\`\r
npm install styled-components zustand re-resizable @dnd-kit/core @dnd-kit/modifiers @dnd-kit/sortable @emotion/react\r
\`\`\`\r

버전 명시 - 위 명령어가 버전 오류가 뜨는 경우 사용하세요\r
\`\`\`\r
npm install styled-components@6.1.11 zustand@5.0.3 re-resizable@6.11.2 @dnd-kit/core@6.3.1 @dnd-kit/modifiers@9.0.0 @dnd-kit/sortable@10.0.0 @emotion/react@11.14.0`}}},tags:["autodocs"]},t={},a={},n={},d={args:{title:"모달 제목"}},i={args:{dim:{active:!1}}},c={args:{dim:{active:!0,isCloseOnDimClick:!1}}};var f,g,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var k,M,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(x=(M=a.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var S,y,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var h,b,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "모달 제목"
  }
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var A,D,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    dim: {
      active: false
    }
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var _,w,B;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    dim: {
      active: true,
      isCloseOnDimClick: false
    }
  }
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const X=["Alert","Confirm","Prompt","Title","NoDim","NoCloseAfterDimClick"];export{t as Alert,a as Confirm,c as NoCloseAfterDimClick,i as NoDim,n as Prompt,d as Title,X as __namedExportsOrder,W as default};
