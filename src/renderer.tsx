import type {
  Child,
  ElementTypes,
  EndNode,
  EndNodeTypes,
  NodeElement,
} from "./types";

// FUNCTION TO CREATE NODE ELEMENTS FROM JSX
export function createElement(
  type: ElementTypes,
  props?: Record<string, any> | null | undefined,
  ...children: Child[]
): NodeElement {
  return {
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
    type: "TEXT_NODE",
    props: {
      nodeValue: childNode,
      children: [],
    },
  };
}
