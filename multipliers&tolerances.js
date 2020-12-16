var displayedTolerace = document.getElementById("displayedTolerance");
var toleranceNumbers = ["20%", "10%", "5%", "2.5%", "1%", "0.5%"];
var EIATolerances = {
  "20%": E6,
  "10%": E12,
  "5%": E24,
  "2.5%": E48,
  "1%": E96,
  "0.5%": E192,
};
function disableToleranceTiles() {
  for (var i = 0; i < toleranceNumbers.length; i++) {
    Object.assign(
      document.getElementById(toleranceNumbers[i]).style,
      normalTile
    );
  }
}
function assignStyleToTile(tileID) {
  Object.assign(document.getElementById(tileID).style, selectedTile);
}
function displayTolerance(tileTolerance) {
  disableToleranceTiles();
  displayedTolerace.innerHTML = "±" + tileTolerance;
  assignStyleToTile(tileTolerance);
}
