import type { EndNode, NodeElement } from "./types";

interface ReactDOMInterface {
  createRoot: (root: HTMLElement) => ReactRenderer;
}

interface ReactRenderer {
  render: (elem: NodeElement) => void;
}

// function that renders node Elements in a container
export function render(element: NodeElement, container: HTMLElement) {
  const isEndNode = element.type === "TEXT_NODE";
  const dom = isEndNode
    ? document.createTextNode("")
    : document.createElement(element.type);

  console.log(element);

  isEndNode
    ? (dom["nodeValue"] = (element as EndNode).props.nodeValue as string)
    : element.props.children.forEach((child: NodeElement) =>
        render(child, dom as HTMLElement)
      );

  container.appendChild(dom);
}
// element represents this html tag
// <h1 title="h1 title">h1 content</h1>
// const element: NodeElement = {
//   type: "h1",
//   props: {
//     title: "h1 title",
//     children: "h1 content",
//   },
// };

const ReactDOM: ReactDOMInterface = {
  createRoot: (root: HTMLElement) => {
    const renderer: ReactRenderer = {
      render: (newElement) => render(newElement, root), // here comes the logic to create Element recursively
    };
    return renderer;
  },
};
export { ReactDOM };
