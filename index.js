import React from "react";
import  {ReactDOM}  from "react-dom/client";

const header = React.createElement("div", {}, "Heading")
const root = ReactDOM.createRoot("div", {}, document.getElementById("root"));
root.render(header)