import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PageMain from "../../pages/PageMain";
import PageStats from "../../pages/PageStats";
import PageCharts from "../../pages/PageCharts";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={PageMain} />
        <Route path="/stats" exact component={PageStats} />
        <Route path="/charts" exact component={PageCharts} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
