var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.concat().sort((a, b) => a - b)[1]);
};