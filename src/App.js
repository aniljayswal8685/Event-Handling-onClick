import React from "react";
import "./style.css";

export default function App() {
  function Fun (){
    alert ("fun clicked")
  }
  return (
    <div>
      <h1>onClick</h1>
      <button onClick={Fun}>Click me </button>
      
    </div>
  );
}
