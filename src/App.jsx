import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  const persons = [
    {
      name: "abed",
      age: "22",
      description: "n9ch",
    },
    {
      name: "younes",
      age: "21",
      description: "handsome",
    },
    {
      name: "hmida",
      age: "22",
      description: "gay",
    },
  ];
  return (
    <>
      <Header />
      <Todo />
    </>
  );
}

export default App;
