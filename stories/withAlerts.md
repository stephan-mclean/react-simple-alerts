# Use withAlerts HOC to access alerts and AlertContainer automatically

`alerts` will be passed as a prop to your component. The `AlertContainer` will be added before the content of your component.

```javascript
import React, { Fragment } from "react";
import { withAlerts } from "react-very-simple-alerts";

let WrappedComponent = ({ alerts }) => (
  <Fragment>
    <button onClick={() => alerts.show("Alert")}>Show alert</button>
  </Fragment>
);

WrappedComponent = withAlerts(WrappedComponent);

const MyComponent = () => (
  <Fragment>
    <WrappedComponent />
  </Fragment>
);
```
