const fizzBuzz = (number) => {
    if (number  % 3 === 0 && number % 5 === 0)
    return 'fizzBuzz'
    
    if (number % 3 === 0 ) {
    return 'Fizz'
  }
  
  if (number % 5 === 0) {
    return 'Buzz'
  } else {
    return number
  }
}
module.exports = fizzBuzz;