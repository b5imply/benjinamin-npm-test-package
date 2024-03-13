import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Button from "./Button";

describe("<Button />", () => {
  test("should render", () => {
    const { getByTestId } = render(<Button name="buttonName" />);
    const button = getByTestId("button");
    expect(button).toBeInTheDocument();
  });
});
