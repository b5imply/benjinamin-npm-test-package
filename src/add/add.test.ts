import { expect, describe, test } from "vitest";
import { add } from "./add";

describe("add()", () => {
  test("should add two numbers", () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });
});
