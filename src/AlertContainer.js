import React, { Component } from "react";
import PropTypes from "prop-types";
import DefaultTemplate from "./templates/DefaultAlertTemplate";
import DefaultCloseButton from "./templates/DefaultAlertCloseBtn";
import { eventManager, EVENT_TYPES } from "./eventManager";

/** Container component which will render all alerts. */
class AlertContainer extends Component {
  static propTypes = {
    /** Component to render alerts by */
    template: PropTypes.func.isRequired,
    /** Component used to render the close button shown for an alert, set to a falsy value for no close button */
    closeButton: PropTypes.func
  };

  static defaultProps = {
    template: DefaultTemplate,
    closeButton: DefaultCloseButton
  };

  state = { alerts: [] };

  componentDidMount() {
    eventManager.on(EVENT_TYPES.SHOW, (content, options = {}) => {
      const alert = {
        content,
        ...options
      };

      const { alerts } = this.state;
      const newAlerts = [...alerts, alert];
      this.setState({ alerts: newAlerts });
    });

    eventManager.on(EVENT_TYPES.REMOVE, alertId => {
      const { alerts } = this.state;
      const alert = alerts.find(alert => alert.id === alertId);
      this.closeAlert(alert);
    });
  }

  componentWillUnmount() {
    eventManager.off(EVENT_TYPES.SHOW);
    eventManager.off(EVENT_TYPES.REMOVE);
  }

  closeAlert = (alert = {}) => {
    const { id } = alert;
    const { alerts } = this.state;
    const idxOfAlert = alerts.findIndex(alert => alert.id === id);
    if (idxOfAlert > -1) {
      const newAlerts = [...alerts];
      newAlerts.splice(idxOfAlert, 1);
      this.setState({ alerts: newAlerts });

      if (alert.onClose) {
        alert.onClose(id);
      }
    } else {
      console.warn(`Could not close alert with id: ${id}`);
    }
  };

  render() {
    const { template, closeButton } = this.props;
    const Template = template;
    const { alerts } = this.state;
    return (
      <div data-testid="alert-container">
        {alerts.map(alert => {
          let content = alert.content;
          if (React.isValidElement(alert.content)) {
            content = React.cloneElement(alert.content, alert.content.props);
          }

          const CloseButton =
            alert.closeButton !== undefined ? alert.closeButton : closeButton;

          const alertId = `alert-${alert.id}`;
          const closeBtnId = alertId + "-close-btn";
          return (
            <Template
              alertType={alert.type}
              key={alert.id}
              data-testid={alertId}
              id={alertId}
            >
              {content}
              {CloseButton && (
                <CloseButton
                  data-testid={closeBtnId}
                  close={this.closeAlert.bind(this, alert)}
                />
              )}
            </Template>
          );
        })}
      </div>
    );
  }
}

export default AlertContainer;
