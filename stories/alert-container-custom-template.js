import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { AlertContainer, alerts } from "../src";
import alertContainerCustomTemplateDocs from "./alert-container-custom-template.md";

const AlertTemplate = ({ alertType, children }) => (
  <Fragment>Custom template!😎 {children}</Fragment>
);

storiesOf("Alert Container", module).add(
  "With custom template",
  () => (
    <Fragment>
      <AlertContainer template={AlertTemplate} />

      <button onClick={() => alerts.show("Default")}>Default</button>
    </Fragment>
  ),
  {
    info: {
      source: false,
      header: false,
      inline: true,
      text: alertContainerCustomTemplateDocs
    }
  }
);
