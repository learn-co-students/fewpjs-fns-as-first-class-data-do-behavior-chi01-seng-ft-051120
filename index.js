/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string) {
  let arr = string.split(":");
  let int = arr.join("");
  let n = parseInt(int);
  if (n < 1200) {
    return "Good Morning"
  } else if ( n >= 1200 && n < 1700) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) { 
  let greeting = document.getElementById("greeting")
  greeting.innerText = `${string}`
}