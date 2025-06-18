import{l as k,j as q,d as B}from"./iframe-_tByA0vL.js";const m=({theme:e,component:a})=>({category:n,context:o,name:s})=>{var r,t,l,i;if((t=(r=e==null?void 0:e.variant)==null?void 0:r[a])!=null&&t[n])return o?(l=e.variant[a][n][o])==null?void 0:l[s]:(i=e.variant[a][n])==null?void 0:i[s]},S=(e,a)=>{var n;return(n=a.reduce((o,s)=>o==null?void 0:o[s],e==null?void 0:e.foundation))==null?void 0:n.value},V=k`
  ${({$color:e="primary",$typo:a="large",$shape:n="medium4",$layout:o="xlarge",$elevation:s="shadow1",theme:r})=>{var l,i;const t=m({theme:r,component:"button"});return[...t({category:"$color",context:`mode/${(l=r==null?void 0:r.options)==null?void 0:l.mode}`,name:e})||[],...t({category:"$typo",context:`responsive/${(i=r==null?void 0:r.options)==null?void 0:i.responsive}`,name:a})||[],...t({category:"$shape",name:n})||[],...t({category:"$layout",name:o})||[],...m({theme:r,component:"common"})({category:"$elevation",context:"common",name:s})]}}

  border-radius: ${({$shape:e="medium4",theme:a})=>S(a,["semantic/value-set","radius",e])};

  cursor: pointer;
  transition: all 0.2s ease-in-out;
`,x=({label:e,onClick:a,...n})=>q.jsx(_,{onClick:a,...n,children:e}),_=B.button`
  ${V}
`;x.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{$color:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},{name:"unknown"}]},description:"색상 선택: color, background-color, border-color"},$typo:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},{name:"unknown"}]},description:"타이포그래피 선택: font-family, font-size, font-weight"},$shape:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"string"},{name:"unknown"}]},description:"외형 선택: border-radius"},$layout:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},{name:"unknown"}]},description:"레이아웃 선택: margin, padding, gap"},$elevation:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:'"shadow1" | "shadow2" | "shadow3" | "shadow4"',elements:[{name:"literal",value:'"shadow1"'},{name:"literal",value:'"shadow2"'},{name:"literal",value:'"shadow3"'},{name:"literal",value:'"shadow4"'}]},{name:"unknown"}]},description:"고도 표현 선택: box-shadow"},label:{required:!0,tsType:{name:"string"},description:"버튼의 내용물  string | ReactNode"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const j={title:"Components/Button",component:x,parameters:{layout:"centered",docs:{description:{component:`<br/>\r
<hr/>\r

의존성\r

의존성이 없습니다.`}}},tags:["autodocs"],argTypes:{$color:{control:{type:"select"},options:[void 0,"primary","secondary","tertiary"]},$typo:{control:{type:"select"},options:[void 0,"small","large"]},$shape:{control:{type:"select"},options:[void 0,"medium4","medium2","small3"]},$layout:{control:{type:"select"},options:[void 0,"xlarge","large","medium","small","xsmall"]},$elevation:{control:{type:"select"},options:[void 0,"shadow1","shadow2","shadow3","shadow4"]}}},d={args:{label:"버튼",$color:"primary"}},u={args:{label:"버튼",$color:"secondary"}},c={args:{label:"버튼",$color:"tertiary"}};var p,y,g;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "버튼",
    $color: "primary"
  }
}`,...(g=(y=d.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var w,v,$;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "버튼",
    $color: "secondary"
  }
}`,...($=(v=u.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var f,T,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "버튼",
    $color: "tertiary"
  }
}`,...(b=(T=c.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const C=["Primary","Secondary","Tertiary"];export{d as Primary,u as Secondary,c as Tertiary,C as __namedExportsOrder,j as default};
