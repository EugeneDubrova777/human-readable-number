module.exports = function toReadable (number) {
  const oneNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const twoNum = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 20) return oneNum[number];
  if (number < 100 && number % 10 == 0) return `${twoNum[number * 0.1]}`;
  if (number < 100 && number % 10 != 0) return `${twoNum[Math.floor(number * 0.1)]} ${oneNum[number % 10]}`;
  if (number < 1000 && number % 100 == 0) return `${oneNum[number * 0.01]} hundred`;
  if (number < 1000 && number % 100 != 0 && number % 10 == 0) return `${oneNum[Math.floor(number * 0.01)]} hundred ${twoNum[(number * 0.1) % 10]}`;
  if (number < 1000 && number % 10 != 0 && number % 100 < 20) return `${oneNum[Math.floor(number * 0.01)]} hundred ${oneNum[number % 100]}`;
  
  return `${oneNum[Math.floor(number * 0.01)]} hundred ${twoNum[(Math.floor(number * 0.1)) % 10]} ${oneNum[number % 10]}`;
}
