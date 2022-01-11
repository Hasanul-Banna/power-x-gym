import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from './Layout';
import './App.scss'
import { AppRoutes } from "./Router/Routes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/Home' />
          </Route>
          {
            AppRoutes.map((route, index) => <Route path={route.path} exact={route.exact} key={index}>
              {route.renderPage}
            </Route>)
          }
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
