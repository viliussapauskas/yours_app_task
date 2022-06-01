import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { Button } from "./button";

const onClickMock = jest.fn();
const renderComponent = () => {
  return render(
    <Provider store={store}>
      <Button onClick={onClickMock} />
    </Provider>
  );
};

describe("Button component tests", () => {
  it("Should render component", () => {
    expect(renderComponent().getByTestId("button-component")).toBeDefined();
  });

  it("Should call onClick when button clicked", () => {
    const button = renderComponent().getByTestId("button-component");
    expect(onClickMock).not.toBeCalled();
    button.click();
    expect(onClickMock).toBeCalled();
  });
});
