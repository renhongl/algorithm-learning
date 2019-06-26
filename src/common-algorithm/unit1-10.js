//1
//1
//1 + 1
//2 + 1
//3 + 2

//斐波拉契数列
//后面的数总等于前两个数之和
export const feibo = month => {
  let m = 1;
  let n = 1;
  let result = [1, 1];
  for (let i = 3; i <= month; i++) {
    result.push(m + n);
    let temp = n;
    n = m + n;
    m = temp;
  }
  return result;
};

//获取素数
export const getSusu = (from, to) => {
  let result = [];
  for (let i = from; i <= to; i++) {
    let isSuShu = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isSuShu = false;
        break;
      }
    }
    if (isSuShu) {
      result.push(i);
    }
  }
  return result;
};

// console.log("获取斐波拉契数列：", feibo(10));
// console.log('获取素数:', getSusu(101, 200));
