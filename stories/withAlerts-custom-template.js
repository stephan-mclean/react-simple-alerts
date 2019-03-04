import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withAlerts } from "../src";
import withAlertsDocs from "./withAlerts-custom-template.md";

let WrappedComponent = ({ alerts }) => (
  <Fragment>
    <button onClick={() => alerts.show("Alert")}>Show alert</button>
  </Fragment>
);

const AlertTemplate = ({ alertType, children }) => (
  <Fragment>Custom template!😎 {children}</Fragment>
);

WrappedComponent = withAlerts(WrappedComponent, { template: AlertTemplate });

storiesOf("withAlerts", module).add(
  "With custom alert template",
  () => (
    <Fragment>
      <WrappedComponent />
    </Fragment>
  ),
  {
    info: {
      source: false,
      header: false,
      inline: true,
      text: withAlertsDocs
    }
  }
);
