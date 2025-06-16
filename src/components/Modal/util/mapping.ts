export function getModalContainerStyle(type: "default" | "hug" | "setting") {
  const style: Partial<Record<keyof CSSStyleDeclaration, string>> = {
    minWidth: "400px",
    height: "300px",
    overflow: "auto",
  };

  switch (type) {
    case "default":
      // 기본 스타일 유지
      break;

    case "hug":
      // 자식 크기만큼만 유지
      style.width = "auto";
      style.height = "auto";
      break;
    case "setting":
      style.width = "650px";
      style.height = "700px";
      break;
  }

  return style;
}
