import{j as g}from"./jsx-runtime-D_zvdyIk.js";var L={exports:{}};/*! streamsaver. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var D;function P(){return D||(D=1,function(i){((r,t)=>{i.exports=t()})("streamSaver",()=>{const r=typeof window=="object"?window:this;r.HTMLElement||console.warn("streamsaver is meant to run on browsers main thread");let t=null,l=!1;const b=o=>{try{o()}catch{}},S=r.WebStreamsPolyfill||{},p=r.isSecureContext;let m=/constructor/i.test(r.HTMLElement)||!!r.safari||!!r.WebKitPoint;const M=p||"MozAppearance"in document.documentElement.style?"iframe":"navigate",f={createWriteStream:A,WritableStream:r.WritableStream||S.WritableStream,supported:!0,version:{full:"2.0.5",major:2,minor:0,dot:5},mitm:"https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0"};function j(o){if(!o)throw new Error("meh");const e=document.createElement("iframe");return e.hidden=!0,e.src=o,e.loaded=!1,e.name="iframe",e.isIframe=!0,e.postMessage=(...c)=>e.contentWindow.postMessage(...c),e.addEventListener("load",()=>{e.loaded=!0},{once:!0}),document.body.appendChild(e),e}function O(o){const e="width=200,height=100",c=document.createDocumentFragment(),a={frame:r.open(o,"popup",e),loaded:!1,isIframe:!1,isPopup:!0,remove(){a.frame.close()},addEventListener(...n){c.addEventListener(...n)},dispatchEvent(...n){c.dispatchEvent(...n)},removeEventListener(...n){c.removeEventListener(...n)},postMessage(...n){a.frame.postMessage(...n)}},h=n=>{n.source===a.frame&&(a.loaded=!0,r.removeEventListener("message",h),a.dispatchEvent(new Event("load")))};return r.addEventListener("message",h),a}try{new Response(new ReadableStream),p&&!("serviceWorker"in navigator)&&(m=!0)}catch{m=!0}b(()=>{const{readable:o}=new TransformStream,e=new MessageChannel;e.port1.postMessage(o,[o]),e.port1.close(),e.port2.close(),l=!0,Object.defineProperty(f,"TransformStream",{configurable:!1,writable:!1,value:TransformStream})});function z(){t||(t=p?j(f.mitm):O(f.mitm))}function A(o,e,c){let a={size:null,pathname:null,writableStrategy:void 0,readableStrategy:void 0},h=0,n=null,s=null,v=null;if(Number.isFinite(e)?([c,e]=[e,c],console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),a.size=c,a.writableStrategy=e):e&&e.highWaterMark?(console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),a.size=c,a.writableStrategy=e):a=e||{},!m){z(),s=new MessageChannel,o=encodeURIComponent(o.replace(/\//g,":")).replace(/['()]/g,escape).replace(/\*/g,"%2A");const d={transferringReadable:l,pathname:a.pathname||Math.random().toString().slice(-6)+"/"+o,headers:{"Content-Type":"application/octet-stream; charset=utf-8","Content-Disposition":"attachment; filename*=UTF-8''"+o}};a.size&&(d.headers["Content-Length"]=a.size);const w=[d,"*",[s.port2]];if(l){const u=M==="iframe"?void 0:{transform(x,F){if(!(x instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");h+=x.length,F.enqueue(x),n&&(location.href=n,n=null)},flush(){n&&(location.href=n)}};v=new f.TransformStream(u,a.writableStrategy,a.readableStrategy);const C=v.readable;s.port1.postMessage({readableStream:C},[C])}s.port1.onmessage=u=>{u.data.download?M==="navigate"?(t.remove(),t=null,h?location.href=u.data.download:n=u.data.download):(t.isPopup&&(t.remove(),t=null,M==="iframe"&&j(f.mitm)),j(u.data.download)):u.data.abort&&(y=[],s.port1.postMessage("abort"),s.port1.onmessage=null,s.port1.close(),s.port2.close(),s=null)},t.loaded?t.postMessage(...w):t.addEventListener("load",()=>{t.postMessage(...w)},{once:!0})}let y=[];return!m&&v&&v.writable||new f.WritableStream({write(d){if(!(d instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");if(m){y.push(d);return}s.port1.postMessage(d),h+=d.length,n&&(location.href=n,n=null)},close(){if(m){const d=new Blob(y,{type:"application/octet-stream; charset=utf-8"}),w=document.createElement("a");w.href=URL.createObjectURL(d),w.download=o,w.click()}else s.port1.postMessage("end")},abort(){y=[],s.port1.postMessage("abort"),s.port1.onmessage=null,s.port1.close(),s.port2.close(),s=null}},a.writableStrategy)}return f})}(L)),L.exports}var I=P();const W="localhost:5000";function N(){console.log("다운로드 시작"),fetch(`${window.location.protocol}//${W}/download`).then(i=>{let r="default.mp4";const t=i.headers.get("Content-Disposition");if(console.log("disposition",t),t&&t.indexOf("attachment")!==-1){const l=t.match(/filename="(.+)"/);l&&l[1]&&(r=l[1])}return i.blob().then(l=>({fileName:r,blob:l}))}).then(i=>{const r=URL.createObjectURL(i.blob);console.log("url",r);const t=document.createElement("a");t.href=r,t.download=i.fileName||"default.mp4",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(r)})}function _(){fetch(`${window.location.protocol}//${W}/download`).then(i=>{var S;const r=(S=i.body)==null?void 0:S.getReader(),l=I.createWriteStream("large-file.zip").getWriter();function b(){if(!r){console.error("Response body is undefined, cannot get reader."),l.abort();return}r.read().then(({done:p,value:m})=>{if(p){l.close();return}l.write(m),b()}).catch(p=>{console.error("스트리밍 오류:",p),l.abort()})}b()}).catch(i=>console.error("파일 다운로드 오류:",i))}function k(){return g.jsxs("div",{children:[g.jsx("h3",{children:"다운로드 파일"}),g.jsx("p",{children:"테스트 성공 : 다운로드 클릭 하자마자 미디어 파일 다운로드가 브라우저 기본 다운로더에 표출"}),g.jsx("button",{onClick:N,children:"기본 다운로드"}),g.jsx("button",{onClick:_,children:"스트리밍 방식 다운로드"})]})}k.__docgenInfo={description:"",methods:[],displayName:"StreamDownloader"};const q={title:"모듈/FileDownloader/StreamDownloader(미완성)",component:k,parameters:{layout:"centered",docs:{description:{component:`공용 모듈: 파일 다운로더\r

파일 다운로드 시, 브라우저의 기본 다운로드 기능을 사용하여 파일을 저장할 수 있는 모듈입니다.\r

다운로드 현황 표시, 일시중지, 재개 등의 기능을 제공합니다.\r

다운로드에 대한 콜백 기능은 제공하지 않으며, 브라우저 api의 한계로 구현 불가합니다.\r

BrowserDownloader : 파일 다운로더의 기본 사용 예시를 보여줍니다.\r

<br/>\r
<h2>테스트 전 주의사항</h2>\r

 <strong>다운로드 테스트를 위한 백엔드 서버를 깨워줘야 합니다.(평소에는 비용 문제로 꺼져 있습니다.) </strong>\r

아래 링크로 한번 접속해주세요. hello world가 보이면 정상입니다.\r

<a href="https://zt-api-for-common.onrender.com/">https://zt-api-for-common.onrender.com/ </a>\r

<br/>\r
<hr/>\r

의존성\r
이 모듈의 의존성은 다음과 같습니다.\r

기본\r
\`\`\`\r
npm install streamsave\r
\`\`\`\r

버전 명시 - 위 명령어가 버전 오류가 뜨는 경우 사용하세요\r
\`\`\`\r
npm install streamsaver@^2.0.6\r
\`\`\``}}},tags:["autodocs"]},E={};var R,T,U;E.parameters={...E.parameters,docs:{...(R=E.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(U=(T=E.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const B=["streamDownloader"];export{B as __namedExportsOrder,q as default,E as streamDownloader};
