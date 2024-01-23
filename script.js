'use strict';

/**
 * ICS3UC Final Project S1 2023-24
 * 
 * Author:
 * Description:
 * 
 */
//Variables
let lines = ""
let random_word = getTitle(5)
random_word = random_word.toLowerCase()
let word_length = random_word.length
let user_input = []
let string = ""
let enter = ""
let incorrectAttempts = 0
let maxAttempts = 6

$("play-begin").addEventListener("click", hideButton)

let user_guess = $("textBox").addEventListener("keypress", Enter_button)

//Hides button after it gets pressed
function hideButton() {
  $("play-begin").hidden = true;
  console.log(random_word)
  $("textBox").hidden = false;
}


function $(id) {
  return document.getElementById(id)
}

//Shows the same amount of underscores as there is letters in the word
function underscores() {
  document.getElementById("play-begin").addEventListener("click", underscores)
  for (let i = 0; i < word_length; i++) {
    if (random_word[i] != " ")
      lines += "_"
    else
      lines += " "
  }
  document.getElementById("underscores").innerHTML += "<br>" + lines
}

//Make Enter button work, and puts the correct letters entered into an array
function Enter_button(enter) {
  if (enter.key === "Enter") {
    string = $("textBox").value
    let found = false

    for (let count = 0; count < word_length; count++) {
      if (random_word[count] == string) {
        user_input.push(string)


        //Takes string and splits it into an array of substrings  
        lines = lines.split("");
        lines[count] = string;
        let split = ""
        for (let x = 0; x < lines.length; x++) {
          split += lines[x];
        }
        lines = split;
        console.log(lines)

        found = true
        //update displayed underscores
        document.getElementById("underscores").innerHTML = lines;
      }
    }
    //Replaces the image of a hangman and adds a different body part for every incorrect guess
    if (found == false) {
      incorrectAttempts++

      if (incorrectAttempts === 1) {
        document.getElementById("baseImage").src = "images/HangmanHead.png"

      } else if (incorrectAttempts === 2) {
        document.getElementById("baseImage").src = "images/HangmanHeadBody.png"
      } else if (incorrectAttempts === 3) {
        document.getElementById("baseImage").src = "images/hangmanHand1.png"
      } else if (incorrectAttempts === 4) {
        document.getElementById("baseImage").src = "images/hangmanHand2.png"
      } else if (incorrectAttempts === 5) {
        document.getElementById("baseImage").src = "images/hangmanLeg1.png"
      } else if (incorrectAttempts === 6) {
        document.getElementById("baseImage").src = "images/hangmanFullBody.png"

        //redirects them to a different html when they lose (Couldn't get the win right 😥 )
        if (maxAttempts === 6) {
          window.location.replace("youlose.html")
        }
        if (lines === random_word) {
          window.location.replace("youwin.html")
        }

      }
    }
  }
}
