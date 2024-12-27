import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./NotFound";


/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
    return (
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={"/dashboard"} />
        </ Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    );
  }
  
  export default Routes;
  