import * as uuid from "uuid/v4";
import { eventManager, EVENT_TYPES } from "./eventManager";
import { ALERT_TYPES } from "./alertTypes";

const getAlertOptions = options => {
  return {
    type: ALERT_TYPES.DEFAULT,
    id: uuid(),
    ...options
  };
};

const alerts = {
  show(content, customOptions = {}) {
    const options = getAlertOptions(customOptions);
    eventManager.emit(EVENT_TYPES.SHOW, content, options);

    return options.id;
  },
  showError(content, customOptions = {}) {
    customOptions.type = ALERT_TYPES.ERROR;
    return this.show(content, customOptions);
  },
  showWarning(content, customOptions = {}) {
    customOptions.type = ALERT_TYPES.WARN;
    return this.show(content, customOptions);
  },
  showSuccess(content, customOptions = {}) {
    customElements.type = ALERT_TYPES.SUCCESS;
    return this.show(content, customOptions);
  },
  close(id) {
    eventManager.emit(EVENT_TYPES.REMOVE, id);
  }
};

export { alerts };
