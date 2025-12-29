import { ReactScratch } from "./index.ts";
import { ReactDOM } from "./reactDom.tsx";
const root = ReactDOM.createRoot(document.getElementById("app")!);

const element = ReactScratch.createElement(
  "h1",
  { id: "foo" },
  "Text content",
  ReactScratch.createElement("br", null),
  ReactScratch.createElement("a", null, "LINK")
);

// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )

root.render(element);
