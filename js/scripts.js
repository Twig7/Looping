//Business Logic


//UI Logic
$(document).ready(function () {
  $("#userInput").submit(function (event) {
    event.preventDefault();
    let userNumbers = parseInt(document.getElementById("userNumbers").value);
    console.log(userNumbers);
    let stringNum=userNumbers.toString();
    if(stringNum.match(3)) {
      alert("Won't you be my neighbor?");
    }
    else if(stringNum.match(2)) {
      alert('Boop!');
    }
    else if(stringNum.match(1)) {
      alert('Beep!');
    }
  })
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