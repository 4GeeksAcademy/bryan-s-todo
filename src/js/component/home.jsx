import React from "react";
import TodoContainer from "./TodoContainer";
import ContextProvider from "../context/Context";

const Home = () => {
  return (
    <ContextProvider>
      <div className="text-center">
        <h1>Todo List</h1>
        <TodoContainer />
      </div>
    </ContextProvider>
  );
};

export default Home;
