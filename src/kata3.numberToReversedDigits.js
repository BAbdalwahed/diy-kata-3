const numberToReversedDigits = (number) => {
    let myArr = String(number).split('').map((number) => {
        return Number(number)
    })
  return myArr = myArr.reverse("");
};
module.exports = numberToReversedDigits;
