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
        <div className={activeSecond ? "poly-image poly-image-active" : "poly-image"}>
          <img src={polyimage} alt="charles"/>
          <h1>Who's this guy?</h1>
          <p>
            I'm the Front-End / Back-End Developer from Philippines,<br/>
          I have serious passion for Developing Websites and Creating Fast and Responsive Websites,
          </p>
          <Social/>

         </div>
      </div>



    </div>;
  }
}

export default First;
