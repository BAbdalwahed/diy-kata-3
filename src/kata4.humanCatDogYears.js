const humanCatDogYears = (number) => {
  let catAge = dogAge = 0;
  let humanAge = number;
  if (humanAge >= 1) {
    catAge += 15;
    dogAge += 15;
    if (humanAge >= 2) {
      catAge += 9;
      dogAge += 9;
      if (humanAge >= 3) {
        catAge += (number - 2) * 4;
        dogAge += (number - 2) * 5;
      }
    }
  }
  return [humanAge, catAge, dogAge];
};
module.exports = humanCatDogYears;
