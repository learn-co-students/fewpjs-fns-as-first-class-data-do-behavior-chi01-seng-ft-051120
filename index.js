/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hour = time.split(':', 1);
  let justHour = parseInt(hour);
  if (justHour < 12) {
    return "Good Morning";
  } else if (justHour > 16) {
    return "Good Evening";
  } else {
    return "Good Afternoon"
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let element = document.getElementById('greeting');
  element.innerText = `${string}`
}