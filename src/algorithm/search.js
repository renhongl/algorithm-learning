// 顺序查找
export const orderSearch = (source, target) => {
  for (let i = 0; i < source.length; i++) {
    if (source[i] === target) {
      return i;
    }
  }
  return -1;
};

// 二分查找递归实现
export const binarySearch = (source, left, right, target) => {
  let midIndex = Math.floor((right + left) / 2);
  let mid = source[midIndex];
  if (target === mid) {
    return midIndex;
  } else if (target < mid) {
    return binarySearch(source, left, midIndex, target);
  } else if (target > mid) {
    return binarySearch(source, midIndex, right, target);
  }
  return -1;
};

// 二分查找非递归实现
export const biSearch = (source, left, right, target) => {
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (source[mid] === target) {
      return mid;
    } else if (target < source[mid]) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return -1;
};
