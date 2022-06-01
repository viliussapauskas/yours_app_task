import { render } from "@testing-library/react";
import { HeaderRow } from "./headerRow";

const renderComponent = () => {
  return render(<HeaderRow openIssues={10} />);
};

describe("Content row tests", () => {
  it("Should render component", () => {
    const component = renderComponent();
    expect(component.getByTestId("header-row-root")).toBeInTheDocument();
  });
  it("Should show correct text content", () => {
    const component = renderComponent();
    expect(component.getByTestId("header-row-content").textContent).toBe(
      "10 Open"
    );
  });
});
