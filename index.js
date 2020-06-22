/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  let hour = time.split(':', 1);
  let hourCompare = parseInt(hour);
  if (hourCompare < 12) {
    return "Good Morning";
  } else if (hourCompare > 16) {
    return "Good Evening";
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(string) {
  let element = document.getElementById('greeting');
  element.innerText = `${string}`
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
