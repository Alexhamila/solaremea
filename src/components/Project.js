import React from "react";
import Section from "./Section";
import "./Project.scss";

class Project extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { active: "0" };
  }

  handleClick(e, value) {
    this.setState(state => ({
      active: value
    }));
  }
  render() {
    return (
      <Section
        className="project"
        color={this.props.color}
        size={this.props.size}
      >
        <div class="options">
          <div
            onClick={e => {
              this.handleClick(e, "0");
            }}
            className={`option ${this.state.active === "0" ? "active" : ""}`}
            style={{
              "--optionBackground":
                "url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)"
            }}
          >
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-walking" />
              </div>
              <div className="info">
                <div className="main">Indiana #2FEO</div>
                <div className="sub">Indiana, United States</div>
              </div>
            </div>
          </div>
          <div
            onClick={e => {
              this.handleClick(e, "1");
            }}
            className={`option ${this.state.active === "1" ? "active" : ""}`}
            style={{
              "--optionBackground":
                "url(https://images.unsplash.com/photo-1509389928833-fe62aef36deb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80)"
            }}
          >
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-snowflake" />
              </div>
              <div className="info">
                <div className="main">Santee Cooper #K67N</div>
                <div className="sub">Santee Cooper, United States</div>
              </div>
            </div>
          </div>
          <div
            onClick={e => {
              this.handleClick(e, "2");
            }}
            className={`option ${this.state.active === "2" ? "active" : ""}`}
            style={{
              "--optionBackground":
                "url(https://images.unsplash.com/photo-1508790762848-8a3096277c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2524&q=80)"
            }}
          >
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-tree" />
              </div>
              <div className="info">
                <div className="main">Loveland #1XR4</div>
                <div className="sub">Loveland, United States</div>
              </div>
            </div>
          </div>
          <div
            onClick={e => {
              this.handleClick(e, "3");
            }}
            className={`option ${this.state.active === "3" ? "active" : ""}`}
            style={{
              "--optionBackground":
                "url(https://images.unsplash.com/photo-1502637098811-fa9526d2b659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80)"
            }}
          >
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-tint" />
              </div>
              <div className="info">
                <div className="main">Chile #15HG</div>
                <div className="sub">Región de Antofagasta, Chile</div>
              </div>
            </div>
          </div>
          <div
            onClick={e => {
              this.handleClick(e, "4");
            }}
            className={`option ${this.state.active === "4" ? "active" : ""}`}
            style={{
              "--optionBackground":
                "url(https://images.unsplash.com/photo-1545209575-704d1434f9cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)"
            }}
          >
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-sun" />
              </div>
              <div className="info">
                <div className="main">Portugal #QS34</div>
                <div className="sub">EM544, 7570, Portugal</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
export default Project;
