function roll() {
  var no1 = Math.floor(Math.random() * 6 + 1);
  console.log(no1);
  var no2 = Math.floor(Math.random() * 6 + 1);
  console.log(no2);
  var imag = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];
  document.getElementById("img1").src = "images/" + imag[no1 - 1];
  document.getElementById("img2").src = "images/" + imag[no2 - 1];
  if (no1 < no2) {
    document.querySelector("h1").textContent = "Player 2 Win 🚩";
  } else if (no1 > no2) {
    document.querySelector("h1").textContent = "Player 1 Win 🚩";
  } else {
    document.querySelector("h1").textContent = "Draw 🤝";
  }
}
