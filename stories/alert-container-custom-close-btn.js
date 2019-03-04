import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { AlertContainer, alerts } from "../src";
import alertContainerCustomCloseBtn from "./alert-container-custom-close-btn.md";

const CustomCloseBtn = ({ close }) => (
  <button onClick={close}>Close Alert</button>
);

storiesOf("Alert Container", module).add(
  "With custom close button",
  () => (
    <Fragment>
      <AlertContainer closeButton={CustomCloseBtn} />

      <button onClick={() => alerts.show("Default")}>Default</button>
    </Fragment>
  ),
  {
    info: {
      source: false,
      header: false,
      inline: true,
      text: alertContainerCustomCloseBtn
    }
  }
);
