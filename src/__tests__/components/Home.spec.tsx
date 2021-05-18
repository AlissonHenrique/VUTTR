import { render, fireEvent } from "@testing-library/react";
import { Home } from "../../pages/Home";
describe("Home", () => {
  it("should be able render to Home", async () => {
    render(<Home />);
  });

  it("should be able submit form", async () => {
    const { getByTestId } = render(<Home />);
    const form = getByTestId("form");
    fireEvent.submit(form);
    expect(form).toHaveBeenCalled();
  });
});
