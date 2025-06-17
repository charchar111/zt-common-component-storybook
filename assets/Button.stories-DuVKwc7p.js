import{l as k,j as q,d as x}from"./iframe-DLpz0ihO.js";const B=({theme:e,component:r})=>({category:n,context:a,name:o})=>{var t,s,d,m;if((s=(t=e==null?void 0:e.variant)==null?void 0:t[r])!=null&&s[n])return a?(d=e.variant[r][n][a])==null?void 0:d[o]:(m=e.variant[r][n])==null?void 0:m[o]},S=(e,r)=>{var n;return(n=r.reduce((a,o)=>a==null?void 0:a[o],e==null?void 0:e.foundation))==null?void 0:n.value},V=k`
  ${({$color:e="primary",$typo:r="large",$layout:n="large",theme:a})=>{var t,s;const o=B({theme:a,component:"button"});return[...o({category:"color",context:`mode/${(t=a==null?void 0:a.options)==null?void 0:t.mode}`,name:e})||[],...o({category:"typo",context:`responsive/${(s=a==null?void 0:a.options)==null?void 0:s.responsive}`,name:r})||[],...o({category:"layout",name:n})||[]]}}

  border-radius: ${({$shape:e="medium4",theme:r})=>S(r,["semantic/value-set","radius",e])};

  cursor: pointer;
  transition: all 0.2s ease-in-out;
`,b=({label:e,onClick:r,...n})=>q.jsx(_,{onClick:r,...n,children:e}),_=x.button`
  ${V}
`;b.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{$color:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},{name:"unknown"}]},description:"색상 선택: color, background-color, border-color"},$typo:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},{name:"unknown"}]},description:"타이포그래피 선택: font-family, font-size, font-weight"},$shape:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:'"medium3" | "medium4" | "large8"',elements:[{name:"literal",value:'"medium3"'},{name:"literal",value:'"medium4"'},{name:"literal",value:'"large8"'}]},{name:"unknown"}]},description:"외형 선택: border-radius"},$layout:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},{name:"unknown"}]},description:"레이아웃 선택: margin, padding, gap"},$elevation:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:'"shadow1" | "shadow2" | "shadow3" | "shadow4"',elements:[{name:"literal",value:'"shadow1"'},{name:"literal",value:'"shadow2"'},{name:"literal",value:'"shadow3"'},{name:"literal",value:'"shadow4"'}]},{name:"unknown"}]},description:"고도 표현 선택: box-shadow"},label:{required:!0,tsType:{name:"string"},description:"버튼의 내용물  string | ReactNode"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const C={title:"Components/Button",component:b,parameters:{layout:"centered",docs:{description:{component:`<br/>\r
<hr/>\r

의존성\r

의존성이 없습니다.`}}},tags:["autodocs"],argTypes:{$color:{control:{type:"radio"},options:["primary","secondary","tertiary"]},$typo:{control:{type:"radio"},options:["small","large"]},$shape:{control:{type:"radio"},options:["medium3","medium4","large8"]},$layout:{control:{type:"radio"},options:["small","large"]},$elevation:{control:{type:"radio"},options:["shadow1","shadow2","shadow3","shadow4"]}}},l={args:{label:"버튼",$color:"primary"}},i={args:{label:"버튼",$color:"secondary"}},u={args:{label:"버튼",$color:"tertiary"}};var c,p,y;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "버튼",
    $color: "primary"
  }
}`,...(y=(p=l.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,w,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "버튼",
    $color: "secondary"
  }
}`,...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var $,f,T;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: "버튼",
    $color: "tertiary"
  }
}`,...(T=(f=u.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const P=["Primary","Secondary","Tertiary"];export{l as Primary,i as Secondary,u as Tertiary,P as __namedExportsOrder,C as default};
