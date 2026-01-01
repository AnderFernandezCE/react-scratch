import { ReactScratch } from "./index.ts";
import { ReactDOM } from "./reactDom.ts";
const root = ReactDOM.createRoot(document.getElementById("app")!);

/** @jsx ReactScratch.createElement */
const element = (
  <div id="foo" style={"background: salmon"}>
    <a>bar</a>
    <b />
    test
  </div>
)

root.render(element);
