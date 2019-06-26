import {
  quickSort,
  bubbleSort,
  selectSort,
  mergeSort,
  insertSort,
  heapSort,
  shellSort,
  radixSort
} from "./sort";

test("quickSort", () => {
  expect(quickSort([54, 32, 12, 56, 9, 10, 43])).toEqual([
    9,
    10,
    12,
    32,
    43,
    54,
    56
  ]);
});

test("bubbleSort", () => {
  expect(bubbleSort([54, 32, 12, 56, 9, 10, 43])).toEqual([
    9,
    10,
    12,
    32,
    43,
    54,
    56
  ]);
});

test("selectSort", () => {
  expect(selectSort([54, 32, 12, 56, 9, 10, 43])).toEqual([
    9,
    10,
    12,
    32,
    43,
    54,
    56
  ]);
});

test("mergeSort", () => {
  expect(mergeSort([54, 32, 12, 56, 9, 10, 43])).toEqual([
    9,
    10,
    12,
    32,
    43,
    54,
    56
  ]);
});

test("insertSort", () => {
  expect(insertSort([54, 32, 12, 56, 9, 10, 43])).toEqual([
    9,
    10,
    12,
    32,
    43,
    54,
    56
  ]);
});

test("heapSort", () => {
  expect(heapSort([54, 32, 12, 56, 9, 10, 43])).toEqual([
    9,
    10,
    12,
    32,
    43,
    54,
    56
  ]);
});

test("shellSort", () => {
  expect(shellSort([54, 32, 12, 56, 9, 10, 43])).toEqual([
    9,
    10,
    12,
    32,
    43,
    54,
    56
  ]);
});

test("radixSort", () => {
  expect(radixSort([54, 32, 12, 56, 9, 10, 43])).toEqual([
    9,
    10,
    12,
    32,
    43,
    54,
    56
  ]);
});
