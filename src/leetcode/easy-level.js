function ListNode(val) {
  this.val = val;
  this.next = null;
}

//1
export var twoSum = function(nums, target) {
  let cache = {};
  for (var i = 0; i < nums.length; i++) {
    let result = target - nums[i];

    if (cache[result] !== undefined) {
      return [cache[result], i];
    }
    cache[nums[i]] = i;
  }
  return [];
};

//12
export var reverse = function(x) {
  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
    return 0;
  }
  var minus = x < 0 ? true : false;
  x = Math.abs(x);
  var ret = 0;
  while (x >= 10) {
    var curr = x % 10;
    ret += curr;
    ret *= 10;
    x = Math.floor(x / 10);
  }
  ret += x;
  if (ret < Math.pow(-2, 31) || ret > Math.pow(2, 31) - 1) {
    return 0;
  }
  return minus ? -ret : ret;
};

//3
export var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  var cache = x;
  var result = 0;
  while (cache >= 10) {
    var curr = cache % 10;
    result += curr;
    result *= 10;
    cache = Math.floor(cache / 10);
  }
  result += cache;
  return x === result;
};

//4
export var romanToInt = function(s) {
  var mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var sArr = s.split("");
  var ret = 0;
  for (var i = 0, len = sArr.length; i < len; i++) {
    if (sArr[i + 1] && mapping[sArr[i]] < mapping[sArr[i + 1]]) {
      ret -= mapping[sArr[i]];
    } else {
      ret += mapping[sArr[i]];
    }
  }
  return ret;
};

//5
//Input: ["flower","flow","flight"] || ['aca', 'bfa']
//Output: "fl"
export var longestCommonPrefix = function(strs) {
  if (strs.length <= 0) {
    return "";
  }
  var minLen = Math.min.apply(null, strs.map(item => item.length));
  var ret = "";
  for (var i = 0; i < minLen; i++) {
    var allHas = true;
    for (var j = 0, len = strs.length; j < len - 1; j++) {
      if (strs[j].charAt(i) !== strs[j + 1].charAt(i)) {
        allHas = false;
        return ret;
      }
    }
    if (allHas) {
      ret += strs[0][i];
    }
  }
  return ret;
};

//6
//"()[]{}"
export var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  var stack = [];
  var sArr = s.split("");
  while (sArr.length > 0) {
    var next = sArr.shift();
    if (stack.length === 0) {
      stack.push(next);
    } else if (next === "(" || next === "[" || next === "{") {
      stack.push(next);
    } else {
      var last = stack[stack.length - 1];
      if (
        (last === "(" && next === ")") ||
        (last === "[" && next === "]") ||
        (last === "{" && next === "}")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

//7
//Input: 1->2->4, 1->3->4
//Output: 1->1->2->3->4->4
export var mergeTwoLists = function(l1, l2) {
  var temp = [];
  var ret = null;

  while (l1 || l2) {
    if (l1) {
      temp.push(l1.val);
    }
    if (l2) {
      temp.push(l2.val);
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  temp.sort((a, b) => b - a);

  while (temp.length > 0) {
    if (ret === null) {
      ret = new ListNode(temp.pop());
    } else {
      var curr = ret;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new ListNode(temp.pop());
    }
  }
  return ret;
};

//8
//[0,0,1,1,1,2,2,3,3,4]
export var removeDuplicates = function(nums) {
  var uniqPos = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqPos] = nums[i];
      uniqPos++;
    }
  }
  return uniqPos;
};

//9
//[3,2,2,3]
export var removeElement = function(nums, val) {
  var notEqualPos = 0;
  for (var i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== val) {
      nums[notEqualPos] = nums[i];
      notEqualPos++;
    }
  }
  return notEqualPos;
};

//10
//Input: haystack = "hello", needle = "ll"
//Output: 2
export var strStr = function(haystack, needle) {
  var matches = [];
  for (var i = 0; i < needle.length; i++) {
    matches[i] = false;
    for (var j = 0; j < haystack.length; j++) {
      var needleCurr = needle[i];
      var targetCurr = haystack[j];
      if (needleCurr === targetCurr) {
        if (!matches[i - 1] || (matches[i - 1] && matches[i - 1] + 1 === j)) {
          matches[i] = j;
        }
      }
    }
    if (matches[i] === false) {
      return -1;
    }
  }
  return matches[0];
};

//11
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export var searchInsert = function(nums, target) {
  const search = (from, to, target) => {
    if (from + 1 === to) {
      if (target <= nums[from]) {
        return from;
      } else {
        return from + 1;
      }
    }
    var midIndex = Math.floor((from + to) / 2);
    if (target === nums[midIndex]) {
      return midIndex;
    } else if (target < nums[midIndex]) {
      return search(from, midIndex, target);
    } else {
      return search(midIndex, to, target);
    }
  };
  return search(0, nums.length, target);
};

//12
/**
 * @param {string} s
 * @return {number}
 */
export var lengthOfLastWord = function(s) {
  s = s.replace(/^\s*|\s*$/g, "");
  var sArr = s.split(" ");
  if (sArr.length <= 0) {
    return 0;
  }
  return sArr[sArr.length - 1].length;
};

//13
/**
 * @param {number[]} digits
 * @return {number[]}
 */
export var plusOne = function(digits) {
  var index = digits.length - 1;
  do {
    var curr = digits[index];
    var currPlus = curr + 1;
    var loop = false;
    if (currPlus >= 10) {
      curr = currPlus % 10;
      digits[index] = curr;
      if (index <= 0) {
        digits = [1, ...digits];
      } else {
        loop = true;
        index -= 1;
      }
    } else {
      curr = currPlus;
      digits[index] = curr;
      loop = false;
    }
  } while (loop);
  return digits;
};

//14
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export var addBinary = function(a, b) {
  var aArr = a.split("");
  var bArr = b.split("");
  var plus = 0;
  var ret = "";
  while (aArr.length > 0 || bArr.length > 0 || plus !== 0) {
    var aCurr = aArr.pop() || 0;
    var bCurr = bArr.pop() || 0;

    var total = Number(aCurr) + Number(bCurr) + Number(plus);

    if (total >= 2) {
      total = total % 2;
      plus = 1;
    } else {
      plus = 0;
    }
    ret = total + ret;
  }
  return ret;
};

//15
/**
 * @param {number} x
 * @return {number}
 */
export var mySqrt = function(x) {
  if (x === 1) {
    return 1;
  }
  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
    return;
  }
  var len = Math.floor(x / 2);
  for (var i = 0; i <= len; i++) {
    if (i * i === x) {
      return i;
    }
    if (i * i < x && (i + 1) * (i + 1) > x) {
      return i;
    }
  }
};

export var mySqrt2 = function(x) {
  if (x === 0 || x === 1) {
    return x;
  }
  var left = 0;
  var right = x;
  while (left <= right) {
    var mid = Math.floor((right + left) / 2);
    if (mid * mid === x) {
      return mid;
    }
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

//15
/**
 * @param {number} n
 * @return {number}
 */
export var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }
  var first = 1;
  var second = 2;
  var result = 0;
  for (var i = 3; i <= n; i++) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
};
