const add = function(a, b) {
	return a + b;
};

const subtract = function(...nums) {
	return nums[0] - nums[1];
};

const sum = function(nums) {
  const sumAll = function(total, num) {
    console.log(`Current total: ${total}\n\
    Number to add: ${num}`)
    return total + num;
  }
  if (nums.length > 0) {
    return nums.reduce(sumAll);
  } else {
    return 0
  }
};

const multiply = function(nums) {
  const multAll = function(total, num) {
    console.log(`Current total: ${total}\n\
    Number to multiply: ${num}`)
    return total * num;
  }
  if (nums.length > 0) {
    return nums.reduce(multAll);
  } else {
    return []
  }
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1
  }
	let result = num;
  for (let i = num-1; i > 0; i--) {
    console.log(`Current total: ${result}\n\
    Number: ${i}`)
    result *= i;
  }
  return result;
};

function gridButtons() {
  let x = 0
  let buttSlice
  for (let i = 0; i < buttons.length; i+=4) {
    buttSlice = buttons.slice(i,i+4)
    console.log(buttSlice)
    for (let button of buttSlice) {
      butt = document.createElement("div")
      butt.textContent = String(button)
      buttRows[x].appendChild(butt)
      console.log(buttRows[x].childNodes)
    }
    x += 1
  }
}

const buttCont = document.getElementById("butt-cont")
const buttRows = document.getElementsByClassName("col")
const buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "/", "=", 0, "CLR", "*"];
gridButtons()