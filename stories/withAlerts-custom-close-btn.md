# Use a custom alert template with the withAlerts HOC

`close` will be passed as a prop to the custom close button, which you can then use to close the alert.

```javascript
import React, { Fragment } from "react";
import { withAlerts } from "react-very-simple-alerts";

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

const MyComponent = () => (
  <Fragment>
    <WrappedComponent />
  </Fragment>
);
```
