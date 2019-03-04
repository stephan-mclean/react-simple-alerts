import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withAlerts } from "../src";
import withAlertsDocs from "./withAlerts-custom-close-btn.md";

let WrappedComponent = ({ alerts }) => (
  <Fragment>
    <button onClick={() => alerts.show("Alert")}>Show alert</button>
  </Fragment>
);

const CustomCloseBtn = ({ close }) => (
  <button onClick={close}>Close Alert</button>
);

WrappedComponent = withAlerts(WrappedComponent, {
  closeButton: CustomCloseBtn
});

storiesOf("withAlerts", module).add(
  "With custom close button",
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
