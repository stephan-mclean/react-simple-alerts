import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

jest.mock("uuid/v4", () => {
  let value = 0;
  return () => value++;
});

import { alerts, withAlerts, AlertContainer, ALERT_TYPES } from "../src";

afterEach(cleanup);

const App = () => (
  <div>
    <AlertContainer />
  </div>
);

test("It should render the container and show an alert", () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("alert-container")).toBeInTheDocument();

  const alertId = alerts.show("Show Alert");

  expect(getByTestId(`alert-${alertId}`)).toBeInTheDocument();
});

test("It should show multiple alerts", () => {
  const { getByTestId } = render(<App />);

  const firstAlertId = alerts.show("Show Alert");
  const secondAlertId = alerts.show("Show Alert");

  expect(getByTestId(`alert-${firstAlertId}`)).toBeInTheDocument();
  expect(getByTestId(`alert-${secondAlertId}`)).toBeInTheDocument();
});

test("It should render the correct alert content", () => {
  const { getByTestId } = render(<App />);

  const alertId = alerts.show("Show Alert", { closeButton: null });

  const alert = getByTestId(`alert-${alertId}`);
  expect(alert).toBeInTheDocument();
  expect(alert.textContent).toEqual("Show Alert");
});

test("It should render alert contents containing elements", () => {
  const { getByTestId } = render(<App />);

  const CustomElem = ({ children }) => <span>{children}</span>;

  const alertId = alerts.show(<CustomElem>Custom</CustomElem>, {
    closeButton: null
  });

  const alert = getByTestId(`alert-${alertId}`);
  expect(alert).toBeInTheDocument();
  expect(alert.innerHTML).toEqual(`<span>Custom</span>`);
});

test("It should render the correct alert type", () => {
  const { getByTestId } = render(<App />);

  const defaultAlertId = alerts.show("Default");
  const defaultAlert = getByTestId(`alert-${defaultAlertId}`);
  expect(defaultAlert).toBeInTheDocument();
  expect(defaultAlert).toHaveAttribute("alerttype", ALERT_TYPES.DEFAULT);

  const successAlertId = alerts.showSuccess("success");
  const successAlert = getByTestId(`alert-${successAlertId}`);
  expect(successAlert).toBeInTheDocument();
  expect(successAlert).toHaveAttribute("alerttype", ALERT_TYPES.SUCCESS);

  const warningAlertId = alerts.showWarning("warning");
  const warningAlert = getByTestId(`alert-${warningAlertId}`);
  expect(warningAlert).toBeInTheDocument();
  expect(warningAlert).toHaveAttribute("alerttype", ALERT_TYPES.WARN);

  const errorAlertId = alerts.showError("error");
  const errorAlert = getByTestId(`alert-${errorAlertId}`);
  expect(errorAlert).toBeInTheDocument();
  expect(errorAlert).toHaveAttribute("alerttype", ALERT_TYPES.ERROR);
});

test("It should close an alert when the user clicks the close button", () => {
  const { getByTestId } = render(<App />);

  const id = alerts.show("Show Alert");

  const alertId = `alert-${id}`;
  const alert = getByTestId(alertId);
  expect(alert).toBeInTheDocument();

  const closeBtnId = alertId + "-close-btn";
  const closeButton = getByTestId(closeBtnId);
  expect(closeButton).toBeInTheDocument();

  fireEvent.click(closeButton);
  expect(alert).not.toBeInTheDocument();
});

test("It should allow closing an alert manually", () => {
  const { getByTestId } = render(<App />);

  const id = alerts.show("Show Alert");

  const alertId = `alert-${id}`;
  const alert = getByTestId(alertId);
  expect(alert).toBeInTheDocument();

  alerts.close(id);
  expect(alert).not.toBeInTheDocument();
});

test("It should not fail when trying to close an invalid alert", () => {
  render(<App />);

  alerts.close("some-random-id");
});

test("It should call the onClose callback when an alert is closed", () => {
  const { getByTestId } = render(<App />);

  const onClose = jest.fn();

  const id = alerts.show("Show Alert", { onClose });

  const alertId = `alert-${id}`;
  const alert = getByTestId(alertId);
  expect(alert).toBeInTheDocument();

  const closeBtnId = alertId + "-close-btn";
  const closeButton = getByTestId(closeBtnId);
  expect(closeButton).toBeInTheDocument();

  fireEvent.click(closeButton);
  expect(alert).not.toBeInTheDocument();
  expect(onClose).toHaveBeenLastCalledWith(id);
});

test("It should render correctly using withAlerts HOC", () => {
  let WrappedComponent = ({ alerts }) => (
    <div>
      <button
        data-testid="alerts-btn"
        onClick={() => alerts.show("My alert", { closeButton: null })}
      >
        Show Alert
      </button>
    </div>
  );

  WrappedComponent = withAlerts(WrappedComponent);

  const HOCApp = () => (
    <div>
      <WrappedComponent />
    </div>
  );

  const { getByText, getByTestId } = render(<HOCApp />);

  const alertBtn = getByTestId("alerts-btn");
  fireEvent.click(alertBtn);

  expect(getByText(/My alert/i)).toBeInTheDocument();
});
