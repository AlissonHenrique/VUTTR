import { ModalRemove } from "../../components/ModalRemove";
import { render, fireEvent } from "@testing-library/react";
describe("Modal Remove", () => {
  it("should be able to open modal remove", async () => {
    const mockToggleModalRemove = jest.fn();
    const mockHandleRemove = jest.fn();
    const mockModalOpenRemove = true;

    const modal = render(
      <ModalRemove
        isOpen={mockModalOpenRemove}
        setIsOpenRemove={mockToggleModalRemove}
        handleRemove={mockHandleRemove}
      />
    );

    expect(modal).toMatchSnapshot();
  });
});
