//Business Logic
// let userNumbers = document.getElementsByName("userNumbers").value;
// while (userNumbers > 0) {
//   if (userNumbers.includes(3)) {
//     userNumbers.replace("Won't you be my neighbor?");
//   } else if (userNumbers.includes(2)) {
//     userNumbers.replace("Beep!");
//   } else if (userNumbers.includes(1)) {
//     userNumbers.replace("Boop?");
//   }
//   console.log(userNumbers);


//UI Logic
$(document).ready(function () {
  $("#userInput").submit(function (event) {
    event.preventDefault();
    let userNumbers = ("#userNumbers");
    while (userNumbers > 0) {
      if (userNumbers.includes(3)) {
    userNumbers.replace("Won't you be my neighbor?");
  } else if (userNumbers.includes(2)) {
    userNumbers.replace("Beep!");
  } else if (userNumbers.includes(1)) {
    userNumbers.replace("Boop?");
  }
  console.log(userNumbers);
}
});
  });