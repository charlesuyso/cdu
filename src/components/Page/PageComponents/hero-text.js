import React, {Component} from "react";

class HeroText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="front-text"
        style={{padding: "20% 35% 0 5%", textAlign: "left"}}
      >
        <div className="slant-text">
          <span
            className="hero-text"
            // style={{color: "#ffff", font: "800 104px/1.25 Circular"}}
          >
            Charles Uyso
          </span>
          <br />
          <span className="hero-text-second">Web Developer</span>
          <br />

          <span
            className="hero-text-third"
            // style={{color: "#ffff", font: "800 104px/1.25 Circular"}}
          >
            Front End / Back End
          </span>
        </div>
      </div>
    );
  }
}

export default HeroText;
