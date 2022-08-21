import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Places from "./components/Places";
import List from "./components/List";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/places" element={<Places />}>
            <Route index element={<List />}></Route>
            <Route path=":Id" element={<Detail />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
