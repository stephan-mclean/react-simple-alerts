import React from "react";
import { ALERT_TYPES } from "../alertTypes";
import "./template.css";

const getClassName = alertType => {
  switch (alertType) {
    case ALERT_TYPES.SUCCESS:
      return "react-simple-alerts-success";
    case ALERT_TYPES.ERROR:
      return "react-simple-alerts-error";
    case ALERT_TYPES.WARN:
      return "react-simple-alerts-warn";
    case ALERT_TYPES.DEFAULT:
    default:
      return "react-simple-alerts-default";
  }
};

export default ({ children, alertType, ...props }) => {
  const className = getClassName(alertType);

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
