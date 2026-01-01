import { ReactScratch } from "./index.ts";
import { ReactDOM } from "./reactDom.ts";
const root = ReactDOM.createRoot(document.getElementById("app")!);

/** @jsx ReactScratch.createElement */
const element = (
  <div id="foo" style={{backgroundColor: "salmon", color: "blue", paddingTop: "50px"}}>
    <a>bar</a>
    <br/>
    test
  </div>
)

root.render(element);
