import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "../redux/store";
// test("renders learn react link", () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
// });

const renderComponent = () => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("App tests", () => {
  it("Should render component", () => {
    expect(renderComponent()).toMatchSnapshot();
  });

  // it("Should have two routes");
});
