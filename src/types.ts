export interface NodeElement {
  type: ElementTypes;
  props: {
    children: (NodeElement | EndNode)[];
    [key: string]: any;
  };
}

export type EndNodeTypes = string | number | boolean | null | undefined;
export type EndNode = {
  type: "TEXT_NODE",
  props: {
    [key: string]: any;
    nodeValue: EndNodeTypes;
    children: []
  }
}
export type Child = NodeElement | EndNodeTypes;

type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TextTypes = "p" | "span" | "strong" | "em"

// Block / layout elements
type BlockTypes = "div" | "section" | "article" | "main" | "header" | "footer" | "br";

// List elements
type ListTypes = "ul" | "ol" | "li";

// Interactive / inline elements
type InlineTypes = "a" | "button" | "label";

// Media elements
type MediaTypes = "img" | "video" | "audio";

// Form elements
type FormTypes = "form" | "input" | "textarea" | "select" | "option";

// Combine everything
export type ElementTypes =
  | HeadingTypes
  | TextTypes
  | BlockTypes
  | ListTypes
  | InlineTypes
  | MediaTypes
  | FormTypes
  | "TEXT_NODE";
