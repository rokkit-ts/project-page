import React from "react";
import "./backgroundContainer.scss"
import Separator from "./separator";

class BackgroundContainer extends React.Component {
  render() {
    return (
        <div className="background">
          <Separator class={"separator-down-left"}/>
          <div className="highlight-box">
            <h1>{this.props.highlight}</h1>
          </div>
          <Separator class={"separator-up-right"}/>
        </div>
    );
  }
}

export default BackgroundContainer;