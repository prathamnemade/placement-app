import React from "react";
import { Route, Switch } from "react-router-dom";
import Example from "../Example";
import { PlacementPage } from "../Placement";

const App = () => {
  return (
    <Switch>
      <Route exact path="/example" children={<Example />} />
      <Route exact path="/" children={<PlacementPage />} />
    </Switch>
  );
};

export default App;
