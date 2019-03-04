# Use your own alert container

Custom templates will receive `alertType` as a prop, which can be used to determine the style of the template depending on the type of alert.

```javascript
import React, { Fragment } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";

const AlertTemplate = ({ alertType, children }) => (
  <Fragment>Custom template!😎 {children}</Fragment>
);

const MyComponent = () => (
  <Fragment>
    <AlertContainer template={AlertTemplate} />

    <button onClick={() => alerts.show("Default")}>Default</button>
  </Fragment>
);
```
