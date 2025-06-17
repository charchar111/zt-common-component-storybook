import{j as w}from"./iframe-DLpz0ihO.js";const k=o=>function(d){const{url:c,param:a,body:l,method:t,enctype:h,download:e}={...o,...d};if(!c||!t)throw new Error("url, method 는 필수값 입니다.");switch(t){case"GET":{const n=document.createElement("a"),r=a===null||typeof a!="object"?"":"?"+new URLSearchParams(a).toString();n.href=c+r,n.style.display="none",n.download=e,document.body.appendChild(n),n.click(),setTimeout(()=>document.body.removeChild(n),1e3);break}case"POST":{{const n=document.createElement("iframe");n.src="about:blank",n.style.display="none",document.body.appendChild(n);const r=document.createElement("form");r.style.display="none",r.method=t,r.enctype=h||"application/x-www-form-urlencoded",r.action=c,l&&(()=>{const x=Object.entries({...l}).map(([P,O])=>{const m=document.createElement("input");return m.type="hidden",m.name=P,m.value=O,m});r.append(...x)})(),n.contentWindow.document.body.appendChild(r),r.submit(),setTimeout(()=>document.body.removeChild(n),1e3)}break}default:throw new Error("지원하지 않는 method 입니다. method는 GET, POST 만 가능합니다.")}};function g({requests:o,label:u}){var a,l,t;const d={url:(a=o==null?void 0:o[0])==null?void 0:a.url,method:((l=o==null?void 0:o[0])==null?void 0:l.method)||"GET",enctype:(t=o==null?void 0:o[0])==null?void 0:t.enctype},c=k({url:d.url,method:d.method,enctype:d.enctype});return w.jsx("div",{children:w.jsx("button",{className:"download_button",onClick:()=>{(async function(){for(const e of o)c({body:e==null?void 0:e.body,url:e==null?void 0:e.url,method:e==null?void 0:e.method,enctype:e==null?void 0:e.enctype,parameters:e==null?void 0:e.parameters}),await new Promise(n=>setTimeout(n,600))})()},children:w.jsxs("span",{children:[u," "]})})})}g.__docgenInfo={description:"",methods:[],displayName:"BrowserDownloader",props:{requests:{required:!0,tsType:{name:"Array",elements:[{name:"BrowserDownloaderRequest"}],raw:"BrowserDownloaderRequest[]"},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};const j={title:"Components/FileDownloader/BrowserDownloader",component:g,parameters:{layout:"centered",docs:{description:{component:`공용 모듈: 파일 다운로더\r

파일 다운로드 시, 브라우저의 기본 다운로드 기능을 사용하여 파일을 저장할 수 있는 모듈입니다.\r

다운로드 현황 표시, 일시중지, 재개 등의 기능을 제공합니다.\r

다운로드에 대한 콜백 기능은 제공하지 않으며, 브라우저 api의 한계로 구현 불가합니다.\r

BrowserDownloader : 파일 다운로더의 기본 사용 예시를 보여줍니다.\r

<br/>\r
<h2>테스트 전 주의사항</h2>\r

 <strong>다운로드 테스트를 위한 백엔드 서버를 깨워줘야 합니다.(평소에는 비용 문제로 꺼져 있습니다.) </strong>\r

아래 링크로 한번 접속해주세요. hello world가 보이면 정상입니다.\r

<a target="_blank" href="https://zt-api-for-common.onrender.com/">https://zt-api-for-common.onrender.com/ </a>\r

<br/>\r
<hr/>\r

의존성\r

의존성이 없습니다.`}}},tags:["autodocs"],argTypes:{requests:{control:{type:"object"},description:"파일 다운로드 요청을 위한 url, method, enctype 등의 정보를 담은 객체"}}},s="https://zt-api-for-common.onrender.com",i={name:"단일 파일 다운로드",args:{requests:[{method:"POST",enctype:"application/x-www-form-urlencoded",url:`${s}/download`,parameters:void 0}],label:"단일 파일 다운로드"}},p={name:"복수 파일 다운로드",args:{requests:[{method:"POST",enctype:"application/x-www-form-urlencoded",url:`${s}/download`,parameters:void 0},{method:"POST",enctype:"application/x-www-form-urlencoded",url:`${s}/download`,parameters:void 0},{method:"POST",enctype:"application/x-www-form-urlencoded",url:`${s}/download`,parameters:void 0}],label:"복수 파일 다운로드"}};var y,f,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "단일 파일 다운로드",
  args: {
    requests: [{
      // GET으로 하면 에러 : 해당 라우트로 이동해ㅓ리네
      method: "POST",
      enctype: "application/x-www-form-urlencoded",
      url: \`\${backendDomain}/download\`,
      parameters: undefined
    }],
    label: "단일 파일 다운로드"
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var T,S,D;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "복수 파일 다운로드",
  args: {
    requests: [{
      // GET으로 하면 에러 : 해당 라우트로 이동해ㅓ리네
      method: "POST",
      enctype: "application/x-www-form-urlencoded",
      url: \`\${backendDomain}/download\`,
      parameters: undefined
    }, {
      // GET으로 하면 에러 : 해당 라우트로 이동해ㅓ리네
      method: "POST",
      enctype: "application/x-www-form-urlencoded",
      url: \`\${backendDomain}/download\`,
      parameters: undefined
    }, {
      // GET으로 하면 에러 : 해당 라우트로 이동해ㅓ리네
      method: "POST",
      enctype: "application/x-www-form-urlencoded",
      url: \`\${backendDomain}/download\`,
      parameters: undefined
    }],
    label: "복수 파일 다운로드"
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const v=["SingleFileDownload","MultiFileDownload"];export{p as MultiFileDownload,i as SingleFileDownload,v as __namedExportsOrder,j as default};
