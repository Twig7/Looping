//Business Logic
function beepBoop(userNumbers){
  let myArray = []

for (let i = 0; i < userNumbers; i++) {
  myArray.push(i)
}
let stringNum=userNumbers.toString();
if(stringNum.match(3)) {
  myArray.push("Won't you be my neighbor?");
}
else if(stringNum.match(2)) {
  myArray.push("Boop?");
}
else if(stringNum.match(1)) {
  myArray.push("Beep!!!");
}
else {
myArray.push(" " + i); 
  }
}
//UI Logic
$(document).ready(function () {
  $("#userInput").submit(function (event) {
    event.preventDefault();
    let userNumbers = parseInt(document.getElementById("userNumbers").value);
    console.log(userNumbers);
    let output = beepBoop(userNumbers);
    $(".result").text(output);
    console.log(result)
  });
    // while (userNumbers > 0) {
    //   if (stringNum.includes(3)) {
    //     stringNum.replace("Won't you be my neighbor?");
    //   } else if (stringNum.includes(2)) {
    //     stringNum.replace("Beep!");
    //   } else if (stringNum.includes(1)) {
    //     stringNum.replace("Boop?");
    //   }
    //   }
  });