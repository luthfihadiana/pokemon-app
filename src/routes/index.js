import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const router = () => {
  return (
    <Switch>
      {routes.map((el, idx) => {
        const Component = el.component;
        return (
          <Route exact path={el.path} key={`route-${idx}`}>
            <Component />
          </Route>
        );
      })}
    </Switch>
  );
};

export default router;
