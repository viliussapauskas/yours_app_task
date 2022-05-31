import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { IssuesPage } from "./issuesPage";
import * as hooks from "../../redux/hooks";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const renderComponent = () => {
  return render(
    <Provider store={{ ...store }}>
      <IssuesPage />
    </Provider>
  );
};

describe("Issues page tests", () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it("Should render component with issues page section", () => {
    const component = renderComponent();
    expect(component.getByTestId("issues-page")).toBeDefined();
  });
  it("Should render component with error section", () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => {
      return {
        value: undefined,
        status: "failed",
      };
    });

    const component = renderComponent();
    expect(component.getByTestId("issues-error")).toBeDefined();
  });
  it("Should render component with loading section", () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => {
      return {
        value: undefined,
        status: "loading",
      };
    });

    const component = renderComponent();
    expect(component.getByTestId("issues-loading")).toBeDefined();
  });

  it("Should render issues content section when issues exists", () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => {
      return {
        value: [],
        status: "idle",
      };
    });

    const component = renderComponent();
    expect(component.getByTestId("issues-content")).toBeDefined();
  });

  it("Should render issues content section when issues exists", () => {
    jest.spyOn(hooks, "useAppSelector").mockImplementation(() => {
      return {
        value: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
        status: "idle",
      };
    });

    const component = renderComponent();
    expect(component.getAllByTestId("issues-list-item").length).toBe(2);
  });
});
