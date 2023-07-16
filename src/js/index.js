//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import TodoActions from './context/actions/TodoActions';

const { TODO_CREATE, TODO_DELETE } = TodoActions;

console.log(TODO_CREATE);
console.log(TODO_DELETE);

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/index.scss";
//import your own components
import Router from "./component/Router.jsx"; // Make sure this path is correct

//render your react application
ReactDOM.render(<Router />, document.querySelector("#app"));
