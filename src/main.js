import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./pug/index.pug");
}

import "./scripts/menu";