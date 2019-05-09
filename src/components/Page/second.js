import React, {Component} from "react";
import {Icon, Row, Col, Progress} from "antd";
import polyimage from './polyimg.png';
import Social from './PageComponents/social'


class First extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { windowSize, activeSecond } = this.props;
    return <div>
      <div className="second-container">
          <Row className="poly-head-container"style={{marginBottom: "2%"}} >
     <Col xs={10} sm={6} md={6} lg={6} xl={6} className="polygon-container">
       <div className={activeSecond ? "polygon1 polygon-active" : "polygon1"}>
         <Icon className="icon-polygon" type="dashboard" />
       </div>
       <div className="poly-text">
         <h1>Fast</h1>
         <p>Fast load, my highest priority.</p>
       </div>
     </Col>
     <Col xs={10} sm={6} md={6} lg={6} xl={6} className="polygon-container">
       <div className={activeSecond ? "polygon1 polygon-active" : "polygon1"}>
         <Icon className="icon-polygon" type="shake" />
       </div>
       <div className="poly-text">
         <h1>Responsive</h1>
         <p>Web pages render well on a variety of devices and window or screen sizes.</p>
       </div>
     </Col>
     <Col xs={10} sm={6} md={6} lg={6} xl={6} className="polygon-container">
       <div className={activeSecond ? "polygon1 polygon-active" : "polygon1"}>
         <Icon className="icon-polygon" type="experiment" />
       </div>
       <div className="poly-text">
         <h1>Dynamic</h1>
         <p>Dynamic web pages</p>

       </div>
     </Col>
     <Col xs={10} sm={6} md={6} lg={6} xl={6} className="polygon-container">
       <div className={activeSecond ? "polygon1 polygon-active" : "polygon1"}>
         <Icon className="icon-polygon" type="copy" />
       </div>
       <div className="poly-text">
         <h1>Knowledge</h1>
         <p>
           Handling project's with right knowledge
        </p>
       </div>
     </Col>
   </Row>
   {windowSize > 670 ?
     <div className="info-c2ontainer">
       <Row>
<Col span={12}> <div className={activeSecond ? "poly-image poly-image-active" : "poly-image"}>
   <img src={polyimage} alt="charles"/>
   <h1>Who's this guy?</h1>
   <p>
     I'm the Front-End / Back-End Developer from Philippines,<br/>
     I have serious passion for Developing Websites and Creating Fast and Responsive Websites,
   </p>
   <Social/>
  </div>

   </Col>
   <Col span={12}>
     <Row className={activeSecond ? "box-stats box-stats-active" : "box-stats"}>
        <Col xs={10} sm={6} md={6} lg={6} xl={6} className="stats-container">
          <p className="stats-title">HTML</p>
          <Progress percent={80} status="active" />
        </Col>
        <Col xs={10} sm={6} md={6} lg={6} xl={6} className="stats-container">
          <p className="stats-title">CSS</p>
          <Progress percent={80} status="active" />
        </Col>
        <Col xs={10} sm={6} md={6} lg={6} xl={6} className="stats-container">
          <p className="stats-title">Javascript</p>
          <Progress percent={85} status="active" />
        </Col>
        <Col xs={10} sm={6} md={6} lg={6} xl={6} className="stats-container">
          <p className="stats-title">React</p>
          <Progress percent={85} status="active" />
        </Col>
        <Col xs={10} sm={6} md={6} lg={6} xl={6} className="stats-container">
          <p className="stats-title">Node.js</p>
          <Progress percent={75} status="active" />
        </Col>
        <Col xs={10} sm={6} md={6} lg={6} xl={6} className="stats-container">
          <p className="stats-title">PHP</p>
          <Progress percent={80} status="active" />
        </Col>
     </Row>
   </Col>
       </Row>
   </div>: null}

      </div>



    </div>;
  }
}

export default First;
