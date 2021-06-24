import { render } from "../../testUtils";
import Home from "../pages";

describe("App", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Stoom")).toBeInTheDocument();
  });
});
