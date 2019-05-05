import React, {Component} from "react";
import {Menu, Icon} from "antd";

import ReactPageScroller from "react-page-scroller";
import First from "./Page/first";
import Second from "./Page/second";
import Second2 from "./Page/second2";
import Second3 from "./Page/second3";
// import Third from "./Page/third";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {currentSubmenu: "1", width: 0};
    this._pageScroller = null;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth});
  }

  handleClick = e => {
    this.goToPage(Number(e.key));

    this.setState({
      currentSubmenu: e.key
    });
  };

  goToPage = pageNumber => {
    setTimeout(() => {
      this._pageScroller.goToPage(pageNumber - 1);
    }, 1000);
  };

  changePage = page => {
    this.setState({currentSubmenu: page.toString()});
  };
  renderFirst = f => {
    // this.setState({ff: "dafa"});
    // this.forceUpdate;
    return f;
  };

  renderSecondMenu = () => {
    switch (Number(this.state.currentSubmenu)) {
      case 2:
        return <Menu.Item key="2">About</Menu.Item>;
        break;
      case 3:
        return <Menu.Item key="3">About</Menu.Item>;
        break;
      case 4:
        return <Menu.Item key="4">About</Menu.Item>;
        break;
      default:
        return <Menu.Item key="2">About</Menu.Item>;
    }
    return;
  };
  render() {
    console.log(this.state.currentSubmenu, "ADFAS");

    return this.state.width <= 670 ? (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.currentSubmenu]}
          mode="horizontal"
          className="nav-bar"
          style={{
            position: "sticky",
            top: 0,
            textAlign: "right",
            paddingRight: "5%",
            background: "#1B242F",
            color: "#ffff"
          }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          {this.renderSecondMenu()}
          <Menu.Item key="5">Contact</Menu.Item>
        </Menu>
        <div>
          <ReactPageScroller
            pageOnChange={this.changePage}
            ref={c => (this._pageScroller = c)}
          >
            <First />
            <Second
              windowSize={this.state.width}
              activeSecond={
                Number(this.state.currentSubmenu) === 2 ? true : false
              }
            />
            <Second2 />
            <Second3
              activeSecond={
                Number(this.state.currentSubmenu) === 4 ? true : false
              }
            />
          </ReactPageScroller>
        </div>
        {Number(this.state.currentSubmenu) === 5 ? null : (
          <Icon
            className="arrow bounce"
            type="down"
            onClick={() =>
              this._pageScroller.goToPage(Number(this.state.currentSubmenu))
            }
            style={{
              position: "absolute",
              color: "#ffff",
              bottom: "-7%",
              fontSize: "30px"
            }}
          />
        )}
      </div>
    ) : (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.currentSubmenu]}
          mode="horizontal"
          className="nav-bar"
          style={{
            position: "sticky",
            top: 0,
            textAlign: "right",
            paddingRight: "5%",
            background: "#1B242F",
            color: "#ffff"
          }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
        <div>
          <ReactPageScroller
            pageOnChange={this.changePage}
            ref={c => (this._pageScroller = c)}
          >
            <First />
            <Second
              windowSize={this.state.width}
              activeSecond={
                Number(this.state.currentSubmenu) === 2 ? true : false
              }
            />

          </ReactPageScroller>
        </div>
        {Number(this.state.currentSubmenu) === 3 ? null : (
          <Icon
            className="arrow bounce"
            type="down"
            onClick={() =>
              this._pageScroller.goToPage(Number(this.state.currentSubmenu))
            }
            style={{
              position: "absolute",
              color: "#616161",
              bottom: "-7%",
              fontSize: "30px"
            }}
          />
        )}
      </div>
    );
  }
}

export default Page;
