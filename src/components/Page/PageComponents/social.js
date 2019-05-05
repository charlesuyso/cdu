import React, {Component} from "react";
import {Card, Col, Row, Icon} from "antd";

class social extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="social-container">
        <a href="https://www.linkedin.com/in/charles-uyso-b50a84153/">
          <Icon className="social-icons" type="linkedin" />
        </a>
        <a href="https://github.com/charlesuyso">
          <Icon className="social-icons" type="github" />
        </a>
        <a href="https://gitlab.com/charlesuyso">
          <Icon className="social-icons" type="gitlab" />
        </a>
        <a href="https://www.instagram.com/charlesuyso/">
          <Icon className="social-icons" type="instagram" />
        </a>
      </div>
    );
  }
}

export default social;
