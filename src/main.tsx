import { ReactScratch } from "./index.ts";
import { ReactDOM } from "./reactDom.tsx";
const root = ReactDOM.createRoot(document.getElementById("app")!);

const element = ReactScratch.createElement(
  "h1",
  { id: "foo", style:"background: salmon" },
  "Text content",
  ReactScratch.createElement("br"),
  ReactScratch.createElement("a", {style: "color: red"}, "LINK")
);

// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )

root.render(element);
