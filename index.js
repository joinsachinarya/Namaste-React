import React from "react";
import  ReactDOM  from "react-dom/client";

const div = React.createElement("div", {id:"id"}, [React.createElement("h1", {key:"1"}, "Heading 1"), React.createElement("h1", {key:"2"}, "Heading 1"),React.createElement("h1", {key:"3"}, "Heading 1")])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
