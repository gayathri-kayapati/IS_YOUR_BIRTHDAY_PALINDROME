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
  day: 16,
  month: 11,
  year: 2023,
};
function convertDateFromNumToStr(date) {
  var newDate = {
    day: "",
    month: "",
    year: "",
  };
  if (date.day < 10) {
    newDate.day = "0" + date.day;
  } else {
    newDate.day = date.day.toString();
  }
  if (date.month < 10) {
    newDate.month = "0" + date.month;
  } else {
    newDate.month = date.month.toString();
  }
  newDate.year = date.year.toString();
  console.log(newDate.year);
}
convertDateFromNumToStr(date);
