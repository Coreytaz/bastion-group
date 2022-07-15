import React from "react";
import "./App.scss";
import BreadCrumbs from "./components/BreadCrumbs";

import Header from "./components/Header/Header";
import ItemsBlock from "./components/ItemsBlock/ItemsBlock";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <ItemsBlock />
    </>
  );
};

export default App;
