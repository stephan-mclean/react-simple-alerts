import React, { Fragment } from "react";
import { AlertContainer, alerts } from "./";
import DefaultTemplate from "./templates/DefaultAlertTemplate";
import DefaultCloseBtn from "./templates/DefaultAlertCloseBtn";

export default (
  WrappedComponent,
  options = { template: DefaultTemplate, closeButton: DefaultCloseBtn }
) => ({ props }) => {
  return (
    <Fragment>
      <AlertContainer {...options} />
      <WrappedComponent {...props} alerts={alerts} />
    </Fragment>
  );
};
