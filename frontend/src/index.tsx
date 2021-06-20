import { BrowserRouter, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import { Home } from "./Home";
import Killboard from "./killboard/Killboard";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/killboard" component={Killboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
