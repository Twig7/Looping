//Business Logic
// function giveMeNumbers(number) {
//   for (let i = 0; i<= userNumbers; i++) {
//     const element = i.toString();
//   }
// }


//UI Logic
$(document).ready(function () {
  $("#userInput").submit(function (event) {
    event.preventDefault();
    let userNumbers = parseInt(document.getElementById("userNumbers").value);
    console.log(userNumbers);
    console.log([userNumbers].includes("3"));
  });
})
 //   while (userNumbers > 0) {
  //     if (userNumbers.includes(3)) {
  //       userNumbers.replace("Won't you be my neighbor?");
  //   } else if (userNumbers.includes(2)) {
  //       userNumbers.replace("Beep!");
  //   } else if (userNumbers.includes(1)) {
  //     userNumbers.replace("Boop?");
  // }