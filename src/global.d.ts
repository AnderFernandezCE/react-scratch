export {};
import type { NodeElement } from "./types/ReactTypes";
import type { StyleObject } from "./types/HTMLStyles";


declare global {
  namespace JSX {
    type Element = NodeElement

    interface IntrinsicElements {
      [elemName: string]: {
        children?: any;
        id?: string;
        className?: string;
        style?: string | StyleObject;
        [prop: string]: any;
      };
    }
  }
}
