import React, {Component} from "react";
import {Icon, Row, Col, Progress} from "antd";
import polyimage from "./polyimg.svg";

class First extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {windowSize, activeSecond} = this.props;

    return (
      <div style={{background: "#1B242F", height: "100vh"}}>
        <div
          className={
            activeSecond
              ? "stats-container-third"
              : "stats-conatiner-third stats-not-active"
          }
          style={{display: activeSecond ? "block" : "none"}}
        >
          <div className="second-container ">
            <Row
              className={
                activeSecond && windowSize > 670
                  ? "box-stats box-stats-active"
                  : "box-stats"
              }
            >
              <Col
                xs={10}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="stats-container"
              >
                <p className="stats-title">HTML</p>
                <Progress percent={75} status="active" />
              </Col>
              <Col
                xs={10}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="stats-container"
              >
                <p className="stats-title">CSS</p>
                <Progress percent={80} status="active" />
              </Col>
              <Col
                xs={10}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="stats-container"
              >
                <p className="stats-title">Javascript</p>
                <Progress percent={80} status="active" />
              </Col>
              <Col
                xs={10}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="stats-container"
              >
                <p className="stats-title">React</p>
                <Progress percent={85} status="active" />
              </Col>
              <Col
                xs={10}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="stats-container"
              >
                <p className="stats-title">Node.js</p>
                <Progress percent={75} status="active" />
              </Col>
              <Col
                xs={10}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="stats-container"
              >
                <p className="stats-title">PHP</p>
                <Progress percent={80} status="active" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default First;
