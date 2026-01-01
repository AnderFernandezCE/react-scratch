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
    $$typeof: Symbol.for('react.element'),
    type: type,
    props: {
      ...props,
      // style: 
      children: children.map((child) =>
        typeof child === "object" ? child as NodeElement : createNodeElement(child)
      ),
    },
  };
}

// FUNCTION THAT GENERATES END NODES
function createNodeElement(childNode: EndNodeTypes): EndNode {
  return {
    $$typeof: Symbol.for('react.element'),
    type: "TEXT_NODE",
    props: {
      nodeValue: childNode,
      children: [],
    },
  };
}
