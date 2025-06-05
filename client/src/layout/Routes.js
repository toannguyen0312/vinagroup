import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import GioiThieu from "./gioi-thieu/GioiThieu";
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
        <Route path="/gioi-thieu">
          <GioiThieu />
        </Route>
        <Route path="/du-lich-nuoc-ngoai">
        </Route>
        <Route path="/du-lich-trong-nuoc">
        </Route>
        <Route path="/teambuilding-su-kien">
        </Route>
        <Route path="/cam-nang-du-lich">
        </Route>
        <Route path="/goc-truyen-thong">
        </Route>
        <Route path="/lien-he">
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    );
  }
  
  export default Routes;
  