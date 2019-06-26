//快速排序
export const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = arr.shift();
  let left = [];
  let right = [];
  for (let item of arr) {
    if (item < mid) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return quickSort(left).concat([mid], quickSort(right));
};

//冒泡排序
export const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

//选择排序
export const selectSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

//归并排序使用的合并方法
export const merge = (left, right) => {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
};

//归并排序
export const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex);
  return merge(mergeSort(left), mergeSort(right));
};

//插入排序
export const insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
};

//堆排序使用的创建顶堆
export const createMaxHeap = (arr, len) => {
  const create = (arr, i, len) => {
    let maxIndex = i;
    let left = 2 * i;
    let right = 2 * i + 1;
    if (left < len && arr[maxIndex] < arr[left]) {
      maxIndex = left;
    }
    if (right < len && arr[maxIndex] < arr[right]) {
      maxIndex = right;
    }
    let temp = arr[maxIndex];
    arr[maxIndex] = arr[i];
    arr[i] = temp;
  };
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    create(arr, i, len);
  }
};

//堆排序
export const heapSort = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    createMaxHeap(arr, i + 1);
    let max = arr[0];
    arr[0] = arr[i];
    arr[i] = max;
  }
  return arr;
};

//希尔排序
export const shellSort = arr => {};

//基数排序
export const radixSort = arr => {};
