export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let i = 0,
    j = 0,
    k = collection_3.length - 1;
  let result: number[] = [];

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    let minVal = Infinity;
    let minIndex = -1;

    if (i < collection_1.length && collection_1[i] < minVal) {
      minVal = collection_1[i];
      minIndex = 1;
    }
    if (j < collection_2.length && collection_2[j] < minVal) {
      minVal = collection_2[j];
      minIndex = 2;
    }
    if (k >= 0 && collection_3[k] < minVal) {
      minVal = collection_3[k];
      minIndex = 3;
    }

    if (minIndex === 1) i++;
    else if (minIndex === 2) j++;
    else if (minIndex === 3) k--;

    result.push(minVal);
  }
  return result;
}
