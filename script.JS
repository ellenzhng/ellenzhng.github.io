/* .js files add interaction to your website */

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to let you know that I oppose SB6 and I am counting on you to oppose it too. This bill is harmful because " + learning + ". Please oppose SB6."
}

//genMyth

var mythList = [
  "MYTH: Abortion is dangerous to the woman's body. REALITY: Abortion is safe and no impediment to women's future fertility (Guttmacher Institute).",
  "MYTH: The Bible forbids abortion. REALITY: It shouldn’t matter what the Bible says about abortion. The United States is not a theocracy. Still, neither the Old Testament nor the New mentions abortion (TIME).",
  "MYTH: Women are always in control of whether or not they get pregnant. REALITY: Contraception is not always 100% available and foolproof and women are not always in a position to consent to sex (The Royal Women's Hospital).",
  "MYTH: Women who have abortions don’t value motherhood. REALITY: Abortion and motherhood are not in opposition to each other. Often their decision is influenced by the desire to do the best they can for the child or children they already have (The Royal Women's Hospital)."
]

var myth = document.getElementById("myth");
var mythBtn = document.getElementById("mythBtn");
var count = 0;

if (mythBtn) {
  mythBtn.addEventListener("click", displayMyth);
}

function displayMyth() {
  myth.innerHTML = mythList[count];
  count++;
  if (count == mythList.length) {
    count = 0;
  }
}
