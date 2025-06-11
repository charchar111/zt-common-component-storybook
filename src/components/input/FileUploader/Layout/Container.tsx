import { HTMLAttributes } from "react";
import "../style/FileUploaderStyle.scss";

/**
 * @description 기본 레이아웃을 위한 div
 *
 *  css 레이아웃 외에 js 기능 x. 필수가 아님
 */
function Container({
  children,
  className,
  ...rest
}: React.PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <div className={`at_fileUploader__container ${className || ""}`} {...rest}>
      {children}
    </div>
  );
}

export default Container;
