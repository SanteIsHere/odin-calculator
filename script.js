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

const multiply = function(...nums) {
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

const divide = function(...nums) {
  const divAll = function(total, num) {
    return total / num
  }
  return (nums.length > 0 ? nums.reduce(divAll) : null)
}

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

const onButtPress = function(num) {
  // "num" parameter represents a pressed number button (div)
  if (numDisplay.textContent === "0") {
    // console.log(numDisplay.textContent, numDisplay.textContent.length)
    numDisplay.textContent = num.target.textContent
    numDisplayText = num.target.textContent
  } else {
    console.log(numDisplay.textContent, numDisplay.textContent.length)
    numDisplayText += num.target.textContent
    numDisplay.textContent = numDisplayText
  }
  console.log(numDisplay.textContent, numDisplay.textContent.length)
}

const onClear = function() {
  numDisplay.textContent = "0"
  numDisplayText = numDisplay.textContent
}

const onBackspace = function() {
  numDisplayText = numDisplayText.slice(0,numDisplayText.length-2).join()
}

const operate = function() {
  // Only supports two number operations currently
  const regexPatt = /((?<num1>\d+)(?<op>[\+\-\/\*])(?<num2>\d+))/
  let matchResult = numDisplay.textContent.match(regexPatt)
  let opMap = new Map([["+", add], ["*", multiply], ["-", subtract], ["/", divide]])
  console.log(matchResult)
  let result = opMap.get(matchResult.groups.op)
  (Number(matchResult.groups.num1), Number(matchResult.groups.num2))
  console.log(result)
  numDisplay.textContent = String(result)
}


function gridButtons() {
  let x = 0
  let buttSlice
  let butt
  for (let i = 0; i < buttons.length; i+=3) {
    buttSlice = buttons.slice(i,i+3)
    // console.log(buttSlice)
    for (let button of buttSlice) {
      // console.log(button, x)
      butt = document.createElement("div")
      butt.innerHTML = button
      switch (button) {
        case "CLR":
          butt.addEventListener("click", onClear)
          break
        case "=":
          butt.addEventListener("click", operate)
          break
        default:
          butt.addEventListener("click", (e) => onButtPress(e))
          break
      }
      butt.setAttribute("class", "butt");
      buttRows[x].appendChild(butt)
    }
    x += 1
  }
}

function gridOps() {
  let x = 0
  let op
  for (let operation of ops) {
    // console.log(button, x)
    op = document.createElement("div")
    op.innerHTML = operation
    op.setAttribute("class", "butt")
    op.addEventListener("click", (e) => onButtPress(e))
    buttRows[x].appendChild(op)
    x += 1
  }
}

const buttCont = document.getElementById("op-cont")
const buttRows = document.getElementsByClassName("col")
const buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "=", "0", "CLR"];
const ops = ["+", "-", "*", "/"]
const numDisplay = document.getElementById("num-disp")
let numDisplayText = numDisplay.textContent

gridButtons();
gridOps();
