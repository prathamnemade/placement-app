import React from "react";
import { Route, Switch } from "react-router-dom";
import Example from "../Example";
import { PlacementPage } from "../Placement";
import { SuperVisorFilePage } from "../SupervisorFile";

const App = () => {
  return (
    <Switch>
      <Route exact path="/example" children={<Example />} />
      <Route exact path="/" children={<PlacementPage />} />
      <Route exact path="/supervisor/file" children={<SuperVisorFilePage />} />
    </Switch>
  );
};

export default App;
