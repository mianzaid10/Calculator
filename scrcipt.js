// let display = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let buttonsArray = Array.from(buttons);

// let string = '';


// buttonsArray.forEach(btn =>{

//     btn.addEventListener('click', (element) => {
//         string += element.target.innerHTML;
//         display.value = string;

    
//     console.log(element.target.innerHTML)
//     });
// });

// Select elements
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

// Convert buttons NodeList to array
let buttonsArray = Array.from(buttons);
let string = "";

// For each button click event
buttonsArray.forEach(button => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    // AC → Clear all
    if (value === "AC") {
      string = "";
      input.value = "0";
    }

    // DEL → Delete last character
    else if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string || "0";
    }

    // = → Evaluate expression
    else if (value === "=") {
      try {
        string = string.replace(/×/g, "*").replace(/÷/g, "/");
        let result = Function('"use strict";return (' + string + ')')();
        if (result === Infinity || isNaN(result)) {
          input.value = "Error";
          string = "";
        } else {
          input.value = result;
          string = result.toString();
        }
      } catch {
        input.value = "Error";
        string = "";
      }
    }

    // Default → Add button value to string
    else {
      string += value;
      input.value = string;
    }
  });
});
