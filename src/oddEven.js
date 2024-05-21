function generateNumber() {
  // generate a random integer(hint : Math.random)
  let random = Math.floor(Math.random() * 100) + 1;
  return random
}

function checkOddEven(num) {
  // logic for even / odd
  if(num % 2 == 0){
    return "Even"
  }else{
    return "Odd"
  }
}

window.onload = function () {
  // add event listeners to the button here
  let showNumber = document.getElementById("number")
  let oddEven = document.getElementById("odd-even")
  let button = document.getElementById("generate-number").addEventListener("click", () =>{
    let number = generateNumber();
    let result = checkOddEven(number);
    showNumber.innerHTML = number;
    oddEven.innerHTML = result;
  })
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
