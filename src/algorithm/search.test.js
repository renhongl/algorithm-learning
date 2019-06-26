import { orderSearch, binarySearch, biSearch } from "./search";

test("orderSearch", () => {
  expect(orderSearch([54, 21, 76, 12, 10, 75, 3, 6], 10)).toEqual(4);
});

test("binarySearch", () => {
  expect(
    binarySearch([3, 12, 17, 35, 54, 65, 69, 78, 90, 92], 0, 10, 78)
  ).toEqual(7);
});

test("biSearch", () => {
  expect(biSearch([3, 12, 17, 35, 54, 65, 69, 78, 90, 92], 0, 10, 78)).toEqual(
    7
  );
});
