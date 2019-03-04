import React from "react";

export default ({ close, ...props }) => (
  <div {...props} onClick={close}>
    &#10005;
  </div>
);
