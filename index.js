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
  return newDate;
}
function getAllDateFormats(date) {
  var dateStr = convertDateFromNumToStr(date);
  var DDMMYYYY = dateStr.day + dateStr.month + dateStr.year;
  var MMDDYYYY = dateStr.month + dateStr.day + dateStr.year;
  var YYYYMMDD = dateStr.year + dateStr.month + dateStr.day;
  var DDMMYY = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var MMDDYY = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var YYMMDD = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  var dateFormats = [DDMMYYYY, MMDDYYYY, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD];
  return dateFormats;
}
