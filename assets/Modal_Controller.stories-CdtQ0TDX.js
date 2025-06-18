import{B as S}from"./Basic-CqREZtkc.js";import"./iframe-_tByA0vL.js";import"./index-Bw7C28aC.js";import"./index-DJcASr_u.js";const I={title:"Components/Modal/Controller",component:S,parameters:{layout:"centered",docs:{description:{component:`공용 모듈: 모달\r

아래 KRDS 파일 업로더 구현 사항을 참조하여 작성되었습니다.\r

https://www.krds.go.kr/html/site/component/component_04_05.html\r

Primary : 파일 업로더의 기본 사용 예시를 보여줍니다.`}}}},e={name:"Cancel button",args:{id:"my_Cancel1",showCancelBtn:!0}},n={name:"Maximize button",args:{id:"my_Maximize1",showMaximizeBtn:!0}},r={name:"Resize view",args:{id:"my_Resize1",container:{resize:{able:!0}}}},a={name:"DragAndDrop view",args:{id:"DragAndDrop",title:"헤더를 잡고 드래그 해보세요",container:{dragAndDrop:{able:!0}}}},t={name:"DragAndDrop view (화면 내 100px 내부 여백)",args:{id:"DragAndDrop",dim:{active:!0,innerBoundSizeUnitPixel:100},title:"헤더를 잡고 드래그 해보세요",container:{dragAndDrop:{able:!0}}}},o={name:"복수의 모달 표출",args:{title:"첫번째 모달",id:"my_Cancel1",dim:{active:!1},container:{dragAndDrop:{able:!0}},showCancelBtn:!0,showMultipleModal:!0}},s={args:{id:"my_All1",dim:{active:!1},container:{resize:{able:!0},dragAndDrop:{able:!0}},title:"헤더를 잡고 드래그 해보세요",showCancelBtn:!0,showMultipleModal:!0}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Cancel button",
  args: {
    id: "my_Cancel1",
    showCancelBtn: true
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Maximize button",
  args: {
    id: "my_Maximize1",
    showMaximizeBtn: true
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,D;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Resize view",
  args: {
    id: "my_Resize1",
    container: {
      // style: {
      //   minWidth: "200px",
      //   minHeight: "300px",
      // },
      resize: {
        able: true
      }
    }
  }
}`,...(D=(g=r.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var A,w,z;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "DragAndDrop view",
  args: {
    id: "DragAndDrop",
    title: "헤더를 잡고 드래그 해보세요",
    container: {
      dragAndDrop: {
        able: true
      }
    }
  }
}`,...(z=(w=a.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var M,b,h;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "DragAndDrop view (화면 내 100px 내부 여백)",
  args: {
    id: "DragAndDrop",
    dim: {
      active: true,
      innerBoundSizeUnitPixel: 100
    },
    title: "헤더를 잡고 드래그 해보세요",
    container: {
      dragAndDrop: {
        able: true
      }
    }
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,C,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "복수의 모달 표출",
  args: {
    title: "첫번째 모달",
    id: "my_Cancel1",
    dim: {
      active: false
    },
    container: {
      dragAndDrop: {
        able: true
      }
    },
    showCancelBtn: true,
    showMultipleModal: true
  }
}`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var _,y,v;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: "my_All1",
    dim: {
      active: false
    },
    container: {
      resize: {
        able: true
      },
      dragAndDrop: {
        able: true
      }
    },
    title: "헤더를 잡고 드래그 해보세요",
    showCancelBtn: true,
    showMultipleModal: true
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const U=["CancelButton","Maximize","Resize","DragAndDrop","DragAndDropInbound","MultipleRender","All"];export{s as All,e as CancelButton,a as DragAndDrop,t as DragAndDropInbound,n as Maximize,o as MultipleRender,r as Resize,U as __namedExportsOrder,I as default};
