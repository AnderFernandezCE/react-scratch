export interface NodeElement {
  type: ElementTypes;
  props: {
    children?: Child;
    [key: string]: any;
  };
}

export type Child =
  | NodeElement
  | string
  | number
  | boolean
  | null
  | undefined;

type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type TextTypes = "p" | "span" | "strong" | "em";

// Block / layout elements
type BlockTypes = "div" | "section" | "article" | "main" | "header" | "footer";

// List elements
type ListTypes = "ul" | "ol" | "li";

// Interactive / inline elements
type InlineTypes = "a" | "button" | "label";

// Media elements
type MediaTypes = "img" | "video" | "audio";

// Form elements
type FormTypes =
  | "form"
  | "input"
  | "textarea"
  | "select"
  | "option";

// Combine everything
export type ElementTypes =
  | HeadingTypes
  | TextTypes
  | BlockTypes
  | ListTypes
  | InlineTypes
  | MediaTypes
  | FormTypes;