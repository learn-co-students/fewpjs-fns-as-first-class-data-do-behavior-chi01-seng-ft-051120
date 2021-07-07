/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {
  let greeting = "";
  let timeArr = timeStr.split(/:/);
  if (parseInt(timeArr[0]) >= 0 && parseInt(timeArr[0]) < 12) {
    greeting = 'Good Morning'
  } else if (parseInt(timeArr[0]) >= 12 && parseInt(timeArr[0]) <= 17) {
    greeting = 'Good Afternoon'
  } else {
    greeting = 'Good Evening'
  }
  return greeting;
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greetingText = document.getElementById('greeting');
  greetingText.innerText = string;
}
