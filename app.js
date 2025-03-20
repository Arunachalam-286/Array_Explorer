let numb = [];
var msg = document.getElementById("result");

function getNum() {
  const userInput = document.getElementById("num").value;
  numb = userInput.split(",").map(Number);
}
function display(r) {
  msg.style.display = "inherit";
  msg.innerHTML = r;
}
function sort() {
  getNum();
  let s = numb.sort((a, b) => a - b);
  display("Sorted array: " + s);
}

function reverse() {
  getNum();
  let s = numb.reverse();
  display("Reversed array: " + s);
}

function findEven() {
  getNum();
  let s = numb.filter((num) => num % 2 === 0);
  display("Even values: " + s);
}

function findOdd() {
  getNum();
  let s = numb.filter((num) => num % 2 === 1);
  display("Odd values: " + s);
}

function findMax() {
  getNum();
  let s = numb.reduce((acc, val) => {
    return acc > val ? acc : val;
  });
  display("Max : " + s);
}

function findMin() {
  getNum();
  let s = numb.reduce((acc, val) => {
    return acc < val ? acc : val;
  });
  display("Min: " + s);
}

function filter() {
  getNum();
  let filVal = document.getElementById("filterValue").value;
  let s = numb.filter((num) => num > filVal);
  if (!isNaN(filVal)) {
    display("Filtered: " + s);
  } else {
    display("Enter a valid number for filtering");
  }
}
