import { merge } from "../src/merge";

describe("merge function", () => {
  it("should merge three sorted arrays in ascending order", () => {
    const collection_1: number[] = [1, 3, 5, 7]; // Explicitly declare type
    const collection_2: number[] = [2, 4, 6, 8];
    const collection_3: number[] = [10, 9, 8, 7, 6];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10]);
  });

  it("should handle empty arrays", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [1, 2, 3];
    const collection_3: number[] = [6, 5, 4];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle when two arrays are empty", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [6, 5, 4];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([4, 5, 6]);
  });
});
