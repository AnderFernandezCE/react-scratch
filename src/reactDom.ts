import type { NodeElement } from "./types/ReactTypes";

interface ReactDOMInterface {
  createRoot: (root: HTMLElement) => ReactRenderer;
}

interface ReactRenderer {
  render: (elem: NodeElement) => void;
}

function setDomProperty(prop: string, elem: HTMLElement, value: unknown) {
  if (prop.startsWith("on")) return;
  if (prop === "children") return;

  if (prop in elem) {
    const proto = Object.getPrototypeOf(elem);
    const desc =
      Object.getOwnPropertyDescriptor(elem, prop) ??
      Object.getOwnPropertyDescriptor(proto, prop);
    const canWrite = !desc || desc.writable || typeof desc.set === "function";
    if (canWrite) {
      (elem as any)[prop] = value;
    }
    return;
  }
  // not property, treat as HTML attribute;
  elem.setAttribute(prop, String(value));
}

// function that renders node Elements in a container
export function render(element: NodeElement, container: HTMLElement) {
  const isEndNode = element.type === "TEXT_NODE";
  const dom = isEndNode
    ? document.createTextNode("")
    : document.createElement(element.type);

  const isProperty = (property: string) =>
    property !== "children" && property !== "style";

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      setDomProperty(name, dom as HTMLElement, element.props[name]);
      // dom[name] = element.props[name];
    });

  const hasStyles = "style" in element.props;
  if (hasStyles) {
    const propsStyles = element.props["style"];
    // inline styles
    if (typeof propsStyles === "string") {
      (dom as HTMLElement).style.cssText = propsStyles;
    }
    // object styles
    if (typeof propsStyles === "object") {
      for (const [key, value] of Object.entries(propsStyles)) {
        if (value == null || value == undefined) continue;
        ((dom as HTMLElement).style as any)[key]  = value;
      }
    }
  }

  element.props.children.forEach((child: NodeElement) =>
    render(child, dom as HTMLElement)
  );

  container.appendChild(dom);
}

const ReactDOM: ReactDOMInterface = {
  createRoot: (root: HTMLElement) => {
    const renderer: ReactRenderer = {
      render: (newElement) => render(newElement, root), // here comes the logic to create Element recursively
    };
    return renderer;
  },
};
export { ReactDOM };
