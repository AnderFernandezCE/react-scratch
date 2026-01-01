import type { ElementTypes } from "./types/HtmlTypes";
import { REACT_ELEMENT_SYMBOL } from "./types/ReactSymbols";
import type {
  Child,
  EndNode,
  EndNodeTypes,
  NodeElement,
} from "./types/ReactTypes";

// FUNCTION TO CREATE NODE ELEMENTS FROM JSX
export function createElement(
  type: ElementTypes,
  props?: Record<string, any> | null | undefined,
  ...children: Child[]
): NodeElement {
  return {
    $$typeof: REACT_ELEMENT_SYMBOL,
    type: type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child as NodeElement : createNodeElement(child)
      ),
    },
  };
}

// FUNCTION THAT GENERATES END NODES
function createNodeElement(childNode: EndNodeTypes): EndNode {
  return {
    $$typeof: REACT_ELEMENT_SYMBOL,
    type: "TEXT_NODE",
    props: {
      nodeValue: childNode,
      children: [],
    },
  };
}
