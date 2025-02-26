import { createRoot } from "react-dom/client";

import { App } from "./components/App";

import "normalize.css";
import "./index.css";

const root = document.getElementById("root");

if (!root) throw new Error("Root no found!");

const container = createRoot(root);

container.render(<App />);
