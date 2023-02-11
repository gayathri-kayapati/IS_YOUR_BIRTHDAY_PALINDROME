// for reversing string
const reverseString = (str) => str.split("").reverse().join("");

// for check palindrome
const isPalindrome = (str) => {
  let reversedStr = reverseString(str);
  let flag = false;
  if (str === reversedStr) {
    flag = true;
  }
  return flag;
};

var date = {
  day: 6,
  month: 5,
  year: 2023,
};
function convertDateFromNumToStr(date) {
  var newDate = {
    day: "",
    month: "",
    year: "",
  };
}
