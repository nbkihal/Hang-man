//letters
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-"
// const words = {
//   programming: [
//     { word: "JAVASCRIPT", hint: "A popular programming language for the web." },
//     { word: "PYTHON", hint: "A snake and a programming language." },
//     { word: "TYPESCRIPT", hint: "A typed superset of JavaScript." },
//     { word: "JAVA", hint: "A programming language and an island in Indonesia." },
//     { word: "RUBY", hint: "A gem and a programming language." },
//     { word: "KOTLIN", hint: "A language used for Android development." },
//     { word: "SWIFT", hint: "Apple's programming language." },
//     { word: "HTML", hint: "The structure of the web." },
//     { word: "CSS", hint: "Styles the web." }
//   ],
//   movies: [
//     { word: "INCEPTION", hint: "A dream within a dream." },
//     { word: "AVATAR", hint: "Blue people on Pandora." },
//     { word: "TITANIC", hint: "A famous ship that sank." },
//     { word: "GLADIATOR", hint: "Are you not entertained?" },
//     { word: "COCO", hint: "A Pixar movie about music and family." },
//     { word: "UP", hint: "An adventure with balloons." },
//     { word: "JOKER", hint: "A famous villain's origin story." },
//     { word: "INTERSTELLAR", hint: "A space exploration movie." },
//     { word: "FROZEN", hint: "Let it go!" }
//   ],
//   people: [
//     { word: "EINSTEIN", hint: "Famous for E=mc^2." },
//     { word: "NEWTON", hint: "Discovered gravity." },
//     { word: "DARWIN", hint: "Theory of evolution." },
//     { word: "CLEOPATRA", hint: "Queen of Egypt." },
//     { word: "ARISTOTLE", hint: "Greek philosopher." },
//     { word: "SHAKESPEARE", hint: "Famous playwright." },
//     { word: "GANDHI", hint: "Led India's independence movement." },
//     { word: "MANDELA", hint: "Fought against apartheid in South Africa." },
//     { word: "TESLA", hint: "Pioneer of electricity." }
//   ],
//   countries: [
//     { word: "ALGERIA", hint: "Country in North Africa." },
//     { word: "CANADA", hint: "Known for maple syrup." },
//     { word: "BRAZIL", hint: "Famous for football and carnival." },
//     { word: "FRANCE", hint: "Home of the Eiffel Tower." },
//     { word: "EGYPT", hint: "Land of the Pyramids." },
//     { word: "JAPAN", hint: "Known for sushi and samurai." },
//     { word: "GERMANY", hint: "Land of Beethoven and Oktoberfest." },
//     { word: "AUSTRALIA", hint: "Famous for kangaroos and the Outback." },
//     { word: "MEXICO", hint: "Home of tacos and tequila." }
//   ]
// };


//Get array from letters

let lettersarray = Array.from(letters)

let letterscontainer = document.querySelector(".letters")

//ganerate letters 
lettersarray.forEach(letter =>{
  //create span
  let span = document.createElement("span");
  //create letter text node

  let theletter = document.createTextNode(letter);

  span.appendChild(theletter);

  span.className = 'letter-box';

  letterscontainer.appendChild(span);
})

//objects of words + categories
const words = {
  programming: [
    "JAVASCRIPT", "PYTHON", "TYPESCRIPT", "JAVA", "RUBY", "KOTLIN", "SWIFT", "HTML", "CSS"
  ],
  movies: [
    "INCEPTION", "AVATAR", "TITANIC", "GLADIATOR", "COCO", "UP", "JOKER", "INTERSTELLAR", "FROZEN"
  ],
  people: [
    "EINSTEIN", "NEWTON", "DARWIN", "CLEOPATRA", "ARISTOTLE", "SHAKESPEARE", "GANDHI", "MANDELA", "TESLA"
  ],
  countries: [
    "ALGERIA", "CANADA", "BRAZIL", "FRANCE", "EGYPT", "JAPAN", "GERMANY", "AUSTRALIA", "MEXICO"
  ],
  sports: [
    "BASKETBALL", "FOOTBALL", "TENNIS", "BASEBALL", "HOCKEY", "CRICKET", "RUGBY", "ATHLETICS", "GOLF", "VOLLEYBALL",
    "SWIMMING", "BOXING", "MMA", "BADMINTON", "CYCLING", "SKIING", "HANDBALL", "WRESTLING", "CROSSFIT", "TABLE TENNIS"],
  soccer: [
    "MESSI", "RONALDO", "PELE", "MARADONA", "NEYMAR", "MBAPPE", "ZIDANE", "BECKHAM", "SIR-ALEX-FERGUSON"
  ],
  animals: [
    "ELEPHANT", "LION", "TIGER", "GIRAFFE", "ZEBRA", "KANGAROO", "PANDA", "KOALA", "CROCODILE"
  ],
  planets: [
    "MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE", "PLUTO"
  ],
  sports: [
    "BASKETBALL", "FOOTBALL", "TENNIS", "BASEBALL", "HOCKEY", "CRICKET", "RUGBY", "ATHLETICS", "GOLF"
  ],
  cities: [
    "PARIS", "LONDON", "NEW-YORK", "TOKYO", "SYDNEY", "BERLIN", "CAPE-TOWN", "RIO", "BARCELONA"
  ],
  foods: [
    "PIZZA", "BURGER", "PASTA", "SUSHI", "TACO", "SALAD", "STEAK", "ICE CREAM", "SANDWICH"
  ],
  surahs: [
    "AL-FATIHA", "AL-BAQARAH", "AALI IMRAN", "AN-NISA", "AL-MA'IDAH", "AL-AN'AM", "AL-A'RAF", "AL-ANFAL", "AT-TAUBAH", "YUNUS",
    "HUD", "YUSUF", "IBRAHIM", "AL-HIJR", "AN-NAHL", "AL-ISRA", "AL-KAHF", "TAHA", "AL-ANBIYA", "AL-HUJURAT"
  ]
};

//get random proprety

let allkeys = Object.keys(words);

let randompropnumber = Math.floor(Math.random() * allkeys.length);

//category
let randompropname = allkeys[randompropnumber];

//category's words
let randompropvalue = words[randompropname];

//random number depends on worde
let randomvaluenumber = Math.floor(Math.random() * randompropvalue.length);

//random name
let randomovaluevalue = randompropvalue[randomvaluenumber]
let randomwordobject = randompropvalue[randomvaluenumber];
let randomhint = randomwordobject.hint;



// console.log(randompropvalue)
// console.log(randomvaluenumber+1)
// console.log(randomovaluevalue)

//set category info
document.querySelector(".game-info .category span").innerHTML = randompropname ;


//select letters guess element

let lettersguesscontainer  = document.querySelector(".letters-guess")

//convert chosen word to array

let lettersandspace = Array.from(randomovaluevalue);

//create spans depand on word 
lettersandspace.forEach(letter =>{
  //create empty span
  let emptyspan = document.createElement("span");

  if (letter === ' '){
    emptyspan.className = 'has-space';

  }

  // append spans to the letters guess container
  lettersguesscontainer.appendChild(emptyspan);

})


//select guess span
let guessspans = document.querySelectorAll(".letters-guess span")


//set wrong attempts
let wrongattemps = 0;

//select the drow element
let thedraw = document.querySelector(".hangman-draw");

let hintShown = false;

//handle clicking on letters 
document.addEventListener("click", (e) => {

  //set the choose status
   let thestatus = false;

  if (e.target.className === 'letter-box') {
    
    e.target.classList.add("clicked");

    //get letter clicked on
    let theclickedletter = e.target.innerHTML;
    // the chosen word
    lettersandspace.forEach((wordletter,wordindex) => {

      if(theclickedletter == wordletter){

        //set the status to correct
        thestatus = true

        guessspans.forEach((span, spanIndex) =>{

          if(wordindex === spanIndex){

            span.innerHTML = theclickedletter
            span.style = "border:1px solid #222;"

          }

        })

      }

    }) 

    //outside the loop
    //if the letter is wrong
    if (thestatus !== true){
      wrongattemps++;
      thedraw.classList.add(`wrong-${wrongattemps}`);

      //play fail sound
      document.getElementById("fail").play();

      // if (wrongattemps === 5 && !hintShown) {
      //   hintShown = true;

      //   // Create a hint popup
      //   let hintDiv = document.createElement("div");
      //   hintDiv.className = "popuphint";
      //   let hintText = document.createTextNode(`Hint: ${randomhint}`);
      //   let lettersguess = document.querySelector(".letters-guess")
      //   hintDiv.appendChild(hintText);
      //   document.lettersguess.appendChild(hintDiv)};

      if (wrongattemps === 8) {
        endgame();
        document.getElementById("finalfail").play()
        letterscontainer.classList.add("finished");
     }
      
    }else{
      //play success sound
      document.getElementById("success").play();
      let isComplete = Array.from(guessspans).every((span) => span.innerHTML !== "");
      if (isComplete) {
        document.getElementById("finalsuccess").play()
        endgamewin(wrongattemps); // Pass wrong attempts to the function
        letterscontainer.classList.add("finished");
      }
    }

  }
});

//end game function

function endgame(){
  //pop up div
  let div = document.createElement("div");
  
  let divtext = document.createTextNode(`Game over , The word is ${randomovaluevalue}`);
  

  div.appendChild(divtext);

  //add class on div

  div.classList.add("popup");

  let lettersContainer = document.querySelector(".letters");

  // Insert the popup div above the letters container
  lettersContainer.parentNode.insertBefore(div, lettersContainer);
}


function endgamewin(wrongattemps) {
  // Determine level based on wrong attempts
  let level;
  if (wrongattemps === 0) {
    level = "You're a genius!";
  } else if (wrongattemps <= 2) {
    level = "You're on fire!";
  } else if (wrongattemps <= 4) {
    level = "Well done, you're doing great!";
  } else if (wrongattemps <= 6) {
    level = "Not bad, but you can do better!";
  } else if (wrongattemps <= 8) {
    level = "You're still learning, but keep trying!";
  } else {
    level = "It's okay, everyone starts somewhere. Keep practicing!";
  }

  // Pop up div
  let div = document.createElement("div");

  let divtext = document.createTextNode(`Congratulations!  ${level}`);
  div.appendChild(divtext);

  // Add class to div
  div.classList.add("popup");

  let lettersContainer = document.querySelector(".letters");

  // Insert the popup div above the letters container
  lettersContainer.parentNode.insertBefore(div, lettersContainer);
}
