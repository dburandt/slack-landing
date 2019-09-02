import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import { Link } from "./../../util/router.js";
import { useAuth } from "./../../util/auth.js";
import "./styles.scss";

function Navbar(props) {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/pricing">
              Pricing
            </Link>
            <Link className="navbar-item" to="/faq">
              FAQ
            </Link>

            {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/">
                  Account
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/signout"
                    onClick={e => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}

            {!auth.user && (
              <>
                <div className="navbar-item">
                  <a href="https://slack.com/oauth/authorize?client_id=579436804787.687842990625&scope=bot,incoming-webhook,files:read,commands">
                    <img
                      alt="Add to Slack"
                      height="40"
                      width="104"
                      src="https://platform.slack-edge.com/img/add_to_slack.png"
                      srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x,
                https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                    />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
