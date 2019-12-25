import React from "react";
import Section from "./Section";
import { Link } from "./../util/router.js";
import "./Dashboard.scss";

function DashboardMenu(props) {
  return (
    <Section>
      <div className="tabs is-centered">
        <ul>
          <li className={props.isActive.dashboard ? "is-active" : ""}>
            <Link to="/dashboard">
              <a href="">Overview</a>
            </Link>
          </li>
          <li className={props.isActive.project ? "is-active" : ""}>
            <Link to="/project">
              <a className="active">Projects</a>
            </Link>
          </li>
          <li className={props.isActive.payments ? "is-active" : ""}>
            <a>Transactions</a>
          </li>
          <li className={props.isActive.settings ? "is-active" : ""}>
            <a>Settings</a>
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default DashboardMenu;
