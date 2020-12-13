var resistance;
function calculate2() {
  if (zeroDigit !=null && firstDigit  !=null && secondDigit !=null) {
  resistance = zeroDigit.toString() + firstDigit.toString() + secondDigit.toString();
  document.getElementById("inputField").value = resistance;
  // resistance = resistance * multiplier;
  // console.log("resistance is " + resistance + " ohms with tolerance of " + tolerance);

  }
}