import React from "react";
import Section from "./Section";
import { Bar, Line } from "react-chartjs-2";
import "./Dashboard.scss";

function Dashboard(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      style={{
        "background-color": "#E9E7DA"
      }}
    >
      <div className="container">
        <div className="columns">
          <div className="column is-12 main">
            <span className="heading">Recent Updates</span>
            <section id="order">
              <div className="order-body">
                <article className="media order shadow delivered">
                  <figure className="media-left">
                    <i className="fa fas-box" />
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>3.2K Pannels added to installation.</strong>
                        <br />
                        <small>
                          Sicily - 07/21/2019 | Unique ID:
                          <strong> #EA21</strong>
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="tags has-addons">
                      <span className="tag is-light">Status:</span>
                      <span className="tag is-delivered">Seen</span>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            <span className="heading">Stats October 2019</span>
            <section className="info-tiles">
              <div className="tile is-ancestor has-text-centered">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">8.365</p>
                    <p className="subtitle">Watts Produced</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">$2172</p>
                    <p className="subtitle">Profit</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">$12 981</p>
                    <p className="subtitle">Balance</p>
                  </article>
                </div>
              </div>
            </section>
            <div className="columns" />
          </div>
        </div>
        <br />
        <span className="heading">Efficiency</span>
        <br />
        <div className="columns">
          <div className="column">
            <div className="box">
              <div className="chart">
                <Bar data={props.chartData} options={{}} />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <Line data={props.lineData} options={{}} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Dashboard;
