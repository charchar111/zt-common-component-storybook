import type { ISharedDesignTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends ISharedDesignTheme {}
}
