let result;
function multiply(numb1, action, numb2) {
  switch (action) {
    case "+": {
      result = numb1 + numb2;
      break;
    }
    case "-": {
      result = numb1 - numb2;
      break;
    }
    case "*": {
      result = numb1 * numb2;
      break;
    }
    case "/": {
      result = numb1 / numb2;
      break;
    }
    case "%": {
      result = numb1 % numb2;
      break;
    }
    default: {
      result = 0;
    }
  }
  return result;
}

console.log(multiply(10, "+", 23));
console.log(multiply(6456,"-",2342))
console.log(multiply(12,"*",21))
console.log(multiply(50,"/",5))
console.log(multiply(23,"%",11))
