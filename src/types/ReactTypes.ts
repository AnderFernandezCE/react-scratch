import type { StyleObject } from "./HTMLStyles";
import type { ElementTypes } from "./HtmlTypes";

export interface NodeElement {
  $$typeof: Symbol | number,
  type: ElementTypes;
  props: {
    children: (NodeElement | EndNode)[];
    style?: string | StyleObject;
    [key: string]: any;
  };
}

export type EndNode = {
  $$typeof: Symbol | number,
  type: "TEXT_NODE",
  props: {
    [key: string]: any;
    style?: string | Record<string, string | number>;
    nodeValue: EndNodeTypes;
    children: []
  }
}
export type Child = NodeElement | EndNodeTypes;


export type EndNodeTypes = string | number | boolean | null | undefined;