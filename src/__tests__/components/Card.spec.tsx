import { render, fireEvent } from "@testing-library/react";

import { Card } from "../../components/Card";

describe("Card Component", () => {
  it("should be able to open handle modal remove id", async () => {
    const mockToggleModalRemoveID = jest.fn();
    const tool = {
      id: 1,
      title: "Notion",
      link: "https://notion.so",
      description:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
      tags: [
        "organization",
        "planning",
        "collaboration",
        "writing",
        "calendar",
      ],
    };
    const { getByTestId } = render(
      <Card handleOpenModalRemove={mockToggleModalRemoveID} tool={tool} />
    );
    const buttonRemoveOpenTool = getByTestId("open-remove");
    fireEvent.click(buttonRemoveOpenTool);

    expect(mockToggleModalRemoveID).toHaveBeenCalledWith(1);
  });
});
