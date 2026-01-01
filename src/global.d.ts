export {};
import type { NodeElement } from "./types";

declare global {
  namespace JSX {
    type Element = NodeElement

    interface IntrinsicElements {
      [elemName: string]: {
        children?: any;
        id?: string;
        className?: string;
        style?: string | Record<string, string | number>;
        [prop: string]: any;
      };
    }
  }
}
