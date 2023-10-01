import React from "react";
import  ReactDOM  from "react-dom/client";

//JSX
const  span = (<span>I am span</span>)
// const data = api.getData();

// Component 
const Fun = ()=>{
    return <div><h1>Heading</h1><h1>Heading2</h1></div>
}

//Component composition
function Main(){
    return <div>
        {console.log("Hey i am normal JS code")}
        <Fun/>
        {span} {" "}
        {/* {data}  */}
        {/* JSX keep use safe from malicious codes also */}
        <i>I am another react element.</i>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Main());
