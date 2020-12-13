function calculate() {
  resistance = document.getElementById("inputField").value;
  var currentEIAvalues = E24;

  var lowIndex = 0;
  var highIndex = currentEIAvalues.length - 1;
  var indexDistance = highIndex - lowIndex;
  var currentIndex;

  while (true) {
    indexDistance = highIndex - lowIndex;
    currentIndex = Math.trunc(indexDistance / 2 + lowIndex);

    if (resistance > currentEIAvalues[currentIndex]) {
      lowIndex = currentIndex;
    } else if (resistance < currentEIAvalues[currentIndex]) {
      highIndex = currentIndex;
    } else if (resistance == currentEIAvalues[currentIndex]) {
      console.log("value is equal to " + currentEIAvalues[currentIndex]);
      break;
    }
    if (indexDistance == 1) {
      console.log("nearest smaller value is " + currentEIAvalues[lowIndex]);
      console.log("nearest larger value is " + currentEIAvalues[highIndex]);
      break;
    }
  }
}
