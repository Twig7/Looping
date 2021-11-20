//Business Logic



//UI Logic
$(document).ready(function () {
  $("#userInput").submit(function (event) {
    event.preventDefault();
    let userNumbers = parseInt(document.getElementById("userNumbers").value);
    console.log(userNumbers);
    let stringNum=userNumbers.toString();
    // (userNumbers.toString().indexOf('3') > -1)
    while (userNumbers > 0) {
      if (stringNum.includes(3)) {
        stringNum.replace("Won't you be my neighbor?");
      } else if (stringNum.includes(2)) {
        stringNum.replace("Beep!");
      } else if (stringNum.includes(1)) {
        stringNum.replace("Boop?");
      }
  });
});