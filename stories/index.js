import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { AlertContainer, alerts } from "../src";
import alertContainerDocs from "./alert-container.md";

const CustomAlertComponent = ({ children }) => <Fragment>{children}</Fragment>;

storiesOf("Alert Container", module).add(
  "Default",
  () => (
    <Fragment>
      <AlertContainer />

      <button
        onClick={() =>
          alerts.show("Default", { onClose: id => console.log(`Closed ${id}`) })
        }
      >
        Default
      </button>
      <button onClick={() => alerts.showSuccess("Success")}>Success</button>
      <button onClick={() => alerts.showWarning("Warning")}>Warning</button>
      <button onClick={() => alerts.showError("Error")}>Error</button>
      <button
        onClick={() =>
          alerts.show(
            <CustomAlertComponent>Custom alert component</CustomAlertComponent>
          )
        }
      >
        Custom Component
      </button>
      <button
        onClick={() =>
          alerts.show("Without close button", { closeButton: null })
        }
      >
        No close button
      </button>
    </Fragment>
  ),
  {
    info: {
      source: false,
      header: false,
      inline: true,
      text: alertContainerDocs
    }
  }
);
