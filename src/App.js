import React from "react";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header className="top_Header">
        <h1 className="Tecno">Teknolojik Yemekler</h1>
        <div>
          <Link to="/">
            <button type="button">Home</button>
          </Link>

          <button type="button">Help</button>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
