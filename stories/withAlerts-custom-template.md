# Use a custom alert template with the withAlerts HOC

`alertType` will be passed as a prop to the custom template, which you can then use to determine the style of your template.

```javascript
import React, { Fragment } from "react";
import { withAlerts } from "react-very-simple-alerts";

let WrappedComponent = ({ alerts }) => (
  <Fragment>
    <button onClick={() => alerts.show("Alert")}>Show alert</button>
  </Fragment>
);

const AlertTemplate = ({ alertType, children }) => (
  <Fragment>Custom template!😎 {children}</Fragment>
);

WrappedComponent = withAlerts(WrappedComponent, { template: AlertTemplate });

const MyComponent = () => (
  <Fragment>
    <WrappedComponent />
  </Fragment>
);
```
