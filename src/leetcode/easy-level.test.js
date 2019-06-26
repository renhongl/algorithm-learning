import {
  lengthOfLastWord,
  plusOne,
  addBinary,
  mySqrt,
  mySqrt2,
  climbStairs
} from "./easy-level";

test("lengthOfLastWord", () => {
  expect(lengthOfLastWord("   ")).toEqual(0);
  expect(lengthOfLastWord("   fas dfajj dfjasd  ")).toEqual(6);
});

test("plusOne", () => {
  expect(plusOne([4, 3, 9, 9])).toEqual([4, 4, 0, 0]);
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

test("addBinary", () => {
  expect(addBinary("10", "111")).toEqual("1001");
  expect(addBinary("11", "1")).toEqual("100");
  expect(addBinary("1111", "1111")).toEqual("11110");
});

test("mySqrt", () => {
  expect(mySqrt(2)).toEqual(1);
  expect(mySqrt(1)).toEqual(1);
  expect(mySqrt(9)).toEqual(3);
  expect(mySqrt(8)).toEqual(2);
  // expect(mySqrt(591420545)).toEqual(undefined);
});

test("mySqrt2", () => {
  expect(mySqrt2(2)).toEqual(1);
  expect(mySqrt2(1)).toEqual(1);
  expect(mySqrt2(8)).toEqual(2);
  // expect(mySqrt2(591420545)).toEqual(24319);
});

test("climbStairs", () => {
  expect(climbStairs(4)).toEqual(5);
  expect(climbStairs(8)).toEqual(34);
});
