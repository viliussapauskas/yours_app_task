import { render } from "@testing-library/react";
import { ContentRow } from "./contentRow";

const renderComponent = () => {
  return render(
    <ContentRow
      payload={{
        id: 1,
        number: 1,
        title: "title",
        user: {
          login: "login",
        },
        createdAt: "created at",
        commentsCount: 2,
      }}
      isLastRow={true}
    />
  );
};

describe("Content row tests", () => {
  it("Should render component with correct classname", () => {
    const component = renderComponent();
    expect(component.getByTestId("content-row-root").className).toEqual(
      "container lastContainer"
    );
  });
  it("Should find comments-count section", () => {
    const component = renderComponent();
    expect(component.getByTestId("comments-count")).toBeDefined();
  });

  it("Should display correct issues number", () => {
    const component = renderComponent();
    expect(component.getByTestId("issue-number").textContent).toEqual("1");
  });
});
