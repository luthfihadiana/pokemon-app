/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import GlobalStyles from "./styles/main";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div className="app">
        <h1>Bebas</h1>
        <Header />
        <Sidebar />
      </div>
    </React.Fragment>
  );
}

export default App;
