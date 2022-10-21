import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./Component/Add";
import Header from "./Component/Header";
import Watched from "./Component/Watched";
import Watchlist from "./Component/Watchlist";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/watched" element={<Watched />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/add" element={<Add fauji="fauji" />} />
        <Route path="/add" element={<Add fauji="fauji" />} />
        <Route path="/add" element={<Add fauji="fauji" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
