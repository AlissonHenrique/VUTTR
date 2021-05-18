import { render, fireEvent } from "@testing-library/react";
import { ModalAdd } from "../../components/ModalAdd";
describe("Modal Add", () => {
  it("should be able render to Modal Add", async () => {
    const mockModalOpen = true;
    const mockToggleModal = jest.fn();
    const mockHandleSubmitAddModal = jest.fn();
    const handleAddSubmit = jest.fn();
    render(
      <ModalAdd
        isOpen={mockModalOpen}
        setIsOpen={mockToggleModal}
        handleSubmit={mockHandleSubmitAddModal}
      />
    );
    it("should be able submit modal", async () => {
      const { getByTestId } = render(
        <ModalAdd
          isOpen={mockModalOpen}
          setIsOpen={mockToggleModal}
          handleSubmit={mockHandleSubmitAddModal}
        />
      );
      const form = getByTestId("form");
      const title = getByTestId("title");
      const link = getByTestId("link");
      const description = getByTestId("description");
      const tags = getByTestId("tags");
      fireEvent.submit(form);
      expect(handleAddSubmit).toHaveBeenCalledWith(1);
    });
  });
});
