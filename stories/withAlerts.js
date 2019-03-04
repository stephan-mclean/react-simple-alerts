import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withAlerts } from "../src";
import withAlertsDocs from "./withAlerts.md";

let WrappedComponent = ({ alerts }) => (
  <Fragment>
    <button onClick={() => alerts.show("Alert")}>Show alert</button>
  </Fragment>
);

WrappedComponent = withAlerts(WrappedComponent);

storiesOf("withAlerts", module).add(
  "Default",
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
