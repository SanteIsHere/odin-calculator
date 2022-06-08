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
  let cols = document.getElementsByClassName("col")
  for(let i = 0; i < nums.length; i+=3) {
    let numSlice = nums.slice(i,i+3)
    for (let num of numSlice) {
      butt = document.createElement("div")
      butt.textContent = String(num)
      cols[x].appendChild(butt)
    }
    x += 1
  }
}

const buttCont = document.getElementById("butt-cont")
const nums = [7, 4, 1, 8, 5, 2, 9, 6, 3];
const ops = ["+", "-", "*", "/"];
gridButtons()