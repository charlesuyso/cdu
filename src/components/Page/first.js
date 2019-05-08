import React, {Component} from "react";
import {Icon} from "antd";
import Sky from 'react-sky';
import logo from '../../logo.svg';
import HeroText from './PageComponents/hero-text'
import NavBox from './PageComponents/nav-box'



class First extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { windowSize } = this.props;

    return <div style={{height: "100%"}}> <HeroText/>
      <Sky
          images={{

            // 0: "https://image.flaticon.com/icons/svg/124/124574.svg",
            // 1: "https://image.flaticon.com/icons/svg/124/124574.svg",
            // 2: "https://image.flaticon.com/icons/svg/124/124570.svg",
            // 3: "https://image.flaticon.com/icons/svg/124/124567.svg",
            // 4: "https://image.flaticon.com/icons/svg/124/124560.svg",
            // 5: "https://image.flaticon.com/icons/svg/124/124559.svg",
            // 6: "https://image.flaticon.com/icons/svg/124/124582.svg",
            // 7: "https://image.flaticon.com/icons/svg/124/124558.svg",
            // 8: "https://image.flaticon.com/icons/svg/124/124588.svg",
            // 9: "https://image.flaticon.com/icons/svg/124/124542.svg",
            // 10: "https://image.flaticon.com/icons/svg/124/124569.svg",
            // 11: "https://image.flaticon.com/icons/svg/124/124573.svg",
            // 12: "https://image.flaticon.com/icons/svg/124/124586.svg",
            // 13: "https://image.flaticon.com/icons/svg/639/639373.svg",
            // 14: "https://image.flaticon.com/icons/svg/1714/1714756.svg",
            // 15: "https://www.flaticon.com/premium-icon/icons/svg/1146/1146297.svg"


            0: "https://image.flaticon.com/icons/svg/639/639373.svg",
            1: "https://www.flaticon.com/premium-icon/icons/svg/1146/1146297.svg",
            2: "https://image.flaticon.com/icons/svg/1714/1714756.svg",
            3: "https://www.flaticon.com/premium-icon/icons/svg/1146/1146292.svg",
            4: "https://image.flaticon.com/icons/svg/124/124574.svg",
            5: "https://image.flaticon.com/icons/svg/1751/1751850.svg",
            6: "https://image.flaticon.com/icons/png/512/1049/1049336.png",
            7: "https://image.flaticon.com/icons/svg/763/763763.svg",
            8: "https://image.flaticon.com/icons/svg/1740/1740315.svg",
            9: "https://image.flaticon.com/icons/svg/944/944290.svg",
            10: "https://image.flaticon.com/icons/svg/1721/1721570.svg"
          }}
          how={60} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={windowSize <= 400 ? '70px' : '100px'} /* size of the rendered images */
          background={"#1B242F"} /* color of background */
        /></div>;
  }
}

export default First;
