# react-very-simple-alerts

Simple inline alerts for React

### Installation

`npm install react-very-simple-alerts`

Ensure you have the correct **peer dependencies** installed:

```
"react": "^16.8.3",
"prop-types": "^15.7.2",
"uuid": "^3.3.2"
```

### Usage

```javascript
import React, { Fragment } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";

const MyComponent = () => (
  <Fragment>
    <AlertContainer />

    <button onClick={() => alerts.show("Alert!")}>Show Alert!</button>
  </Fragment>
);
```

### Usage with HOC

```javascript
import React, { Fragment } from "react";
import { withAlerts } from "react-very-simple-alerts";

let WrappedComponent = ({ alerts }) => (
  <Fragment>
    <button onClick={() => alerts.show("Alert!")}>Show alert</button>
  </Fragment>
);

WrappedComponent = withAlerts(WrappedComponent);

const MyComponent = () => (
  <Fragment>
    <WrappedComponent />
  </Fragment>
);
```

### Demo & Examples

[Storybook](https://react-very-simple-alerts.com/)
