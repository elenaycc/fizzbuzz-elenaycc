function fizzbuzzSwitch(num) {
  let output = "";
  if (num % 3 === 0) output += "Fizz";
  if (num % 5 === 0) output += "Buzz";

  switch (output) {
    case "Fizz":
      return "Fizz";
    case "Buzz":
      return "Buzz";
    case "FizzBuzz":
      return "FizzBuzz";
    default:
      return num;
      break;
  }
}

module.exports = fizzbuzzSwitch;
