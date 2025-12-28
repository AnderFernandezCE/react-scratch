interface ReactDOMInterface {
  createRoot: (root: HTMLElement) => ReactRenderer;
}

interface ReactRenderer {
  render: (elem: HTMLElement) => void;
}

// element represents this html tag
// <h1 title="h1 title">h1 content</h1>
const element = {
  type: "h1",
  props: {
    title: "h1 title",
    children: "h1 content",
  },
};

const ReactDOM: ReactDOMInterface = {
  createRoot: (root: HTMLElement) => {
    const node = document.createElement(element.type);
    node["title"] = element.props.title;

    const text = document.createTextNode("");
    text["nodeValue"] = element.props.children;

    node.appendChild(text);

    const renderer: ReactRenderer = {
      render: (newElement) => root.appendChild(node), // here comes the logic to create Element recursively
    };
    return renderer;
  },
};
export { ReactDOM };
