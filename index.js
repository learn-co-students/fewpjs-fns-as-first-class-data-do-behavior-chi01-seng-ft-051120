/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeInt = parseInt(time.slice(0,2))
  if (timeInt < 12) {
    return "Good Morning"
  }
  if (timeInt >= 12 && timeInt < 17) {
    return "Good Afternoon"
  }
  if (timeInt >= 17){
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
// function displayMessage(greet) {  
//   const greeting = greet
//   const content = document.getElementById("greeting")
//   content.innerHTML = greeting
// }

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}