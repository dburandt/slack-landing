import React from "react";
import HomePage from "./../home";
import FaqPage from "../faq";
import PrivacyPage from "../privacy";
import { Switch, Route, Router } from "./../../util/router.js";
// import analytics from "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
