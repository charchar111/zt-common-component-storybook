export function getModalContainerStyle(type: "default" | "setting") {
  const style = {
    width: "300px",
    height: "300px",
  };

  switch (type) {
    case "default":
      // 기본 스타일 유지
      break;
    case "setting":
      style.width = "650px";
      style.height = "700px";
      break;
  }

  return style;
}
