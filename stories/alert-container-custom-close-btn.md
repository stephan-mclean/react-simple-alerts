# Use your own close button

Custom close buttons will receive `close` as a prop, which can be used to close the alert.

```javascript
import React, { Fragment } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";

const CustomCloseBtn = ({ close }) => (
  <button onClick={close}>Close Alert</button>
);

const MyComponent = () => (
  <Fragment>
    <AlertContainer closeButton={CustomCloseBtn} />

    <button onClick={() => alerts.show("Default")}>Default</button>
  </Fragment>
);
```
