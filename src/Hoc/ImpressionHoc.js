import React, { Component } from "react";
import Observer from "@researchgate/react-intersection-observer";
import axios from "axios";

class ImpressionClickTrackerHOC extends Component {
  handleChange = (event, unobserve) => {
    if (event.isIntersecting && event.intersectionRatio >= 1) {
      this.recordedTimeout = setTimeout(() => {
        // Send logs to server
        console.log("IMPRESSION", {
          ...event.target.dataset,
        });
        axios
          .get(
            `${process.env.REACT_APP_SERVERURL}/property/add-impression/${this.props.userId}`
          )
          .then((res) => {
            console.log("oooooooooooooooooooo", res);
          });
        /** Use this for only tracking once per mount **/
        if (event.isIntersecting) {
          unobserve();
        } // Assuming impression is valid only after 1 second
      }, 6000);

      return;
    }
    clearTimeout(this.recordedTimeout);
  };
  handleClick = (event) => {
    // Send logs to server
    axios
      .get(
        `${process.env.REACT_APP_SERVERURL}/property/add-clicks/${this.props.userId}`
      )
      .then((res) => {
        console.log("oooooooooooooooooooo", res);
      });
    console.log(this.props.clickEvent || "UNKNOWN_CLICK_EVENT", {
      ...event.currentTarget.dataset,
    });
  };
  render() {
    return (
      <Observer
        onChange={this.handleChange}
        onClick={this.handleClick}
        threshold={1}
        disabled={this.props.disableViewportTracking || false}
      >
        {React.cloneElement(this.props.children, {
          onClick: this.handleClick,
        })}
      </Observer>
    );
  }
}
export default ImpressionClickTrackerHOC;
