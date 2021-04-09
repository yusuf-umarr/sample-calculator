// function to display input value
function display(value){
  document.querySelector(".screen").value +=value
}
//function to clear the screen
function clr(){
  document.querySelector(".screen").value = ""
  document.querySelector(".result").value = "0"
}
//function to delete the last character
function del(){
  let scrn = document.querySelector(".screen").value
  let lastch = scrn.substring(0,scrn.length -1)
  document.querySelector(".screen").value = lastch
}

//function to calculate answers
function solve(){
  clrOp()
  let eqn = document.querySelector('.screen').value;
  let result = eval(eqn)
  document.querySelector('.result').value = result;
  document.querySelector(".screen").value = ""
}
//function to calculate power of 2
function power(){
  clrOp()
  let base = document.querySelector(".screen").value
  let res = Math.pow(base, 2)
  document.querySelector(".result").value = res
  document.querySelector(".screen").value =""
}
//function to calculate percentage
function percent() {
  clrOp()
  let eqn= document.querySelector(".screen").value
  let cal = eqn /100
  document.querySelector(".result").value = cal
  document.querySelector(".screen").value =""
  
}
//function to ignore operator sign if it appears as the last character
function clrOp(){
  
let currentString = document.querySelector(".screen").value
let lastChar = currentString[currentString.length - 1]
if(lastChar == "+" || lastChar=="-"||lastChar=="/" || lastChar=="*"){
  currentString = currentString.substring(0,currentString.length -1)
  document.querySelector(".screen").value = currentString
}
}