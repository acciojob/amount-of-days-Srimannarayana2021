//your JS code here. If required.
function daysOfAYear(year) {
  // A leap year is:
  // - divisible by 4
  // - NOT divisible by 100 unless also divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366;
  } else {
    return 365;
  }
}