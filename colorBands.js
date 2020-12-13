var zeroDigit;
var firstDigit;
var secondDigit;
var multiplier;
var tolerance;
// array with band colors used for index and digit number
var bandColors = [
  "silver",
  "gold",
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "gray",
  "white",
];
// object storing bandd colors and their corresponding tolerances
var tolerances = {
  silver: "10%",
  gold: "5%",
  black: "20%",
  brown: "1%",
  red: "2%",
  orange: "3%",
  yellow: "5%",
  green: "0.5%",
  blue: "0.25%",
  violet: "0.1%",
  gray: "0.05%",
  white: "10%",
};
var selectedTile = {
  border: "2px solid black",
  height: "90%",
  width: "90%",
};
var normalTile = {
  border: "0px solid black",
  height: "100%",
  width: "100%",
};

function assignStyle(activeTile, bandNumber) {
  console.log(bandNumber);
  //set i to 0 to skip silver and gold tiles which are not in first 3 bands
  if (bandNumber < 3) {
    var i = 2;
  }
  //set i to 0 if there are silver and gold bands
  else {
    i = 0;
  }
  //loop through band array to set all tiles to normal
  for (i; i < bandColors.length; i++) {
    var z = document.getElementById(bandColors[i] + bandNumber);
    Object.assign(z.style, normalTile);
  }
  //set clicked tile to active style
  var x = document.getElementById(activeTile + bandNumber);
  Object.assign(x.style, selectedTile);
}

// calculation of the first digit based on band 0 color
function band0(band0Color) {
  zeroDigit = bandColors.indexOf(band0Color) - 2;
  console.log(zeroDigit);
  assignStyle(band0Color, "0");
  calculate2();
}
// calculation of the second digit based on band 1 color
function band1(band1Color) {
  firstDigit = bandColors.indexOf(band1Color) - 2;
  console.log(firstDigit);
  assignStyle(band1Color, "1");
  calculate2();
}
// calculation of the third digit based on band 2 color
function band2(band2Color) {
  secondDigit = bandColors.indexOf(band2Color) - 2;
  console.log(secondDigit);
  assignStyle(band2Color, "2");
  calculate2();
}
// calculation of the resistance multipliier based on band3 color
function band3(band3Color) {
  var band3index = bandColors.indexOf(band3Color) - 2;
  multiplier = Math.pow(10, band3index);
  console.log(multiplier);
  assignStyle(band3Color, "3");
  calculate2();
}
// calculation of the tolerance of the resistance based on band4 color
function band4(band4Color) {
  tolerance = tolerances[band4Color];
  console.log(tolerance);
  assignStyle(band4Color, "4");
  calculate2();
}
