# Render alerts using the AlertContainer component, and alerts functions.

Alerts will be rendered inline, wherever you place the `AlertContainer` component.

```javascript
import React, { Fragment } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";

const MyComponent = () => (
  <Fragment>
    <AlertContainer />

    <button onClick={() => alerts.show("Default")}>Default</button>
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
      onClick={() => alerts.show("Without close button", { closeButton: null })}
    >
      No close button
    </button>
  </Fragment>
);
```
