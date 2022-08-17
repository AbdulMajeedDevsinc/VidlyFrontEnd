import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
