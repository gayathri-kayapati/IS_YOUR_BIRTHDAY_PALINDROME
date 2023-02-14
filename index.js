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
  day: 2,
  month: 2,
  year: 2020,
};

// converting date from number to string and also taking care of "0" day and month is less then 10.
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
// getting the date in all date formats.
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
// checking the date is palindrome or not.
function checkPalindromeForAllDateFormats(date) {
  var listOfDateFormats = getAllDateFormats(date);
  var flag = false;
  for (let i = 0; i < listOfDateFormats.length; i++) {
    if (isPalindrome(listOfDateFormats[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
// finding next date.
function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;
  var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month == 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month = 3;
      }
    } else {
      if (day > 28) {
        day = 1;
        month = 3;
      }
    }
  } else {
    if (day > daysInMonths[month - 1]) {
      day = 1;
      month++;
    }
  }
  return {
    day: day,
    month: month,
    year: year,
  };
}

// finding next palindrome date and missing days from given date.
function getNextPalindromeDate(date) {
  var nextDate = getNextDate(date);
  var missingDays = 0;
  while (1) {
    missingDays++;
    var dateString = convertDateFromNumToStr(nextDate);
    var listOfDateFormats = getAllDateFormats(dateString);
    for (let i = 0; i < listOfDateFormats.length; i++) {
      if (isPalindrome(listOfDateFormats[i])) {
        return [missingDays, nextDate];
      }
    }
  }
  nextDate = getNextDate(nextDate);
}
console.log(getNextPalindromeDate(date));
