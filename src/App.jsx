import React from "react";
import Books from "./components/Books";
import Header from "./components/Header";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Books />
    </div>
  );
}
