//letters
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-"
const words = {
  programming: [
    { word: "JAVASCRIPT", hint: "A popular programming language for the web." },
    { word: "PYTHON", hint: "A snake and a programming language." },
    { word: "TYPESCRIPT", hint: "A typed superset of JavaScript." },
    { word: "JAVA", hint: "A programming language and an island in Indonesia." },
    { word: "RUBY", hint: "A gem and a programming language." },
    { word: "KOTLIN", hint: "A language used for Android development." },
    { word: "SWIFT", hint: "Apple's programming language." },
    { word: "HTML", hint: "The structure of the web." },
    { word: "CSS", hint: "Styles the web." }
  ],
  movies: [
    { word: "INCEPTION", hint: "A dream within a dream." },
    { word: "AVATAR", hint: "Blue people on Pandora." },
    { word: "TITANIC", hint: "A famous ship that sank." },
    { word: "GLADIATOR", hint: "Are you not entertained?" },
    { word: "COCO", hint: "A Pixar movie about music and family." },
    { word: "UP", hint: "An adventure with balloons." },
    { word: "JOKER", hint: "A famous villain's origin story." },
    { word: "INTERSTELLAR", hint: "A space exploration movie." },
    { word: "FROZEN", hint: "Let it go!" }
  ],
  people: [
    { word: "EINSTEIN", hint: "Famous for E=mc^2." },
    { word: "NEWTON", hint: "Discovered gravity." },
    { word: "DARWIN", hint: "Theory of evolution." },
    { word: "CLEOPATRA", hint: "Queen of Egypt." },
    { word: "ARISTOTLE", hint: "Greek philosopher." },
    { word: "SHAKESPEARE", hint: "Famous playwright." },
    { word: "GANDHI", hint: "Led India's independence movement." },
    { word: "MANDELA", hint: "Fought against apartheid in South Africa." },
    { word: "TESLA", hint: "Pioneer of electricity." }
  ],
  countries: [
    { word: "ALGERIA", hint: "Country in North Africa." },
    { word: "CANADA", hint: "Known for maple syrup." },
    { word: "BRAZIL", hint: "Famous for football and carnival." },
    { word: "FRANCE", hint: "Home of the Eiffel Tower." },
    { word: "EGYPT", hint: "Land of the Pyramids." },
    { word: "JAPAN", hint: "Known for sushi and samurai." },
    { word: "GERMANY", hint: "Land of Beethoven and Oktoberfest." },
    { word: "AUSTRALIA", hint: "Famous for kangaroos and the Outback." },
    { word: "MEXICO", hint: "Home of tacos and tequila." }
  ],
  sports: [
    { word: "BASKETBALL", hint: "A sport played with a hoop and a ball." },
    { word: "FOOTBALL", hint: "A sport where goals are scored by kicking a ball." },
    { word: "TENNIS", hint: "A racket sport played on a court." },
    { word: "BASEBALL", hint: "A bat-and-ball game popular in the USA." },
    { word: "HOCKEY", hint: "A sport played on ice or field with sticks." },
    { word: "CRICKET", hint: "A bat-and-ball game popular in India and England." },
    { word: "RUGBY", hint: "A physical sport played with an oval ball." },
    { word: "ATHLETICS", hint: "Track and field sports." },
    { word: "GOLF", hint: "A sport involving hitting a ball into holes." },
    { word: "VOLLEYBALL", hint: "A net sport where the ball is hit over the net." },
    { word: "SWIMMING", hint: "A sport performed in water." },
    { word: "BOXING", hint: "A combat sport with gloves." },
    { word: "MMA", hint: "A full-contact combat sport." },
    { word: "BADMINTON", hint: "A racket sport with a shuttlecock." },
    { word: "CYCLING", hint: "A sport using bicycles." },
    { word: "SKIING", hint: "A winter sport on snow." },
    { word: "HANDBALL", hint: "A sport where players throw a ball into a goal." },
    { word: "WRESTLING", hint: "A sport involving grappling and pinning." },
    { word: "CROSSFIT", hint: "A high-intensity fitness regimen." },
    { word: "TABLE TENNIS", hint: "A smaller-scale version of tennis." }
  ],
  soccer: [
    { word: "MESSI", hint: "Argentinian football legend." },
    { word: "RONALDO", hint: "Portuguese football star." },
    { word: "PELE", hint: "Brazilian football icon." },
    { word: "MARADONA", hint: "Argentinian football genius." },
    { word: "NEYMAR", hint: "Brazilian footballer with flair." },
    { word: "MBAPPE", hint: "French football prodigy." },
    { word: "ZIDANE", hint: "French footballer and manager." },
    { word: "BECKHAM", hint: "English footballer famous for free kicks." },
    { word: "SIR-ALEX-FERGUSON", hint: "Legendary Manchester United manager." }
  ],
  animals: [
    { word: "ELEPHANT", hint: "The largest land animal." },
    { word: "LION", hint: "Known as the king of the jungle." },
    { word: "TIGER", hint: "A big cat with stripes." },
    { word: "GIRAFFE", hint: "The tallest animal." },
    { word: "ZEBRA", hint: "An animal with black and white stripes." },
    { word: "KANGAROO", hint: "A hopping marsupial from Australia." },
    { word: "PANDA", hint: "A black-and-white bear-like animal." },
    { word: "KOALA", hint: "A tree-dwelling marsupial from Australia." },
    { word: "CROCODILE", hint: "A large reptile found near water." }
  ],
  planets: [
    { word: "MERCURY", hint: "The closest planet to the sun." },
    { word: "VENUS", hint: "The hottest planet in the solar system." },
    { word: "EARTH", hint: "Our home planet." },
    { word: "MARS", hint: "Known as the red planet." },
    { word: "JUPITER", hint: "The largest planet in the solar system." },
    { word: "SATURN", hint: "The planet with rings." },
    { word: "URANUS", hint: "A planet that rotates on its side." },
    { word: "NEPTUNE", hint: "The farthest planet from the sun." },
    { word: "PLUTO", hint: "A dwarf planet in the Kuiper belt." }
  ],
  cities: [
    { word: "PARIS", hint: "Known as the city of love." },
    { word: "LONDON", hint: "Home of Big Ben and the London Eye." },
    { word: "NEW-YORK", hint: "The city that never sleeps." },
    { word: "TOKYO", hint: "The capital of Japan." },
    { word: "SYDNEY", hint: "Famous for its Opera House." },
    { word: "BERLIN", hint: "The capital of Germany." },
    { word: "CAPE-TOWN", hint: "A city at the southern tip of Africa." },
    { word: "RIO", hint: "Known for its carnival in Brazil." },
    { word: "BARCELONA", hint: "A vibrant city in Spain." }
  ],
  foods: [
    { word: "PIZZA", hint: "An Italian dish with toppings and cheese." },
    { word: "BURGER", hint: "A sandwich with a patty inside." },
    { word: "PASTA", hint: "Italian noodles in various shapes." },
    { word: "SUSHI", hint: "A Japanese dish with rice and fish." },
    { word: "TACO", hint: "A Mexican dish with a tortilla." },
    { word: "SALAD", hint: "A dish with mixed vegetables." },
    { word: "STEAK", hint: "A grilled or fried cut of meat." },
    { word: "ICE CREAM", hint: "A frozen dessert." },
    { word: "SANDWICH", hint: "Two slices of bread with filling." }
  ],
  surahs: [
    { word: "AL-FATIHA", hint: "The opening chapter of the Quran." },
    { word: "AL-BAQARAH", hint: "The longest chapter of the Quran." },
    { word: "AALI IMRAN", hint: "Named after the family of Imran." },
    { word: "AN-NISA", hint: "Focused on women's issues." },
    { word: "AL-MA'IDAH", hint: "Means 'The Table Spread.'" },
    { word: "AL-AN'AM", hint: "Named after cattle." },
    { word: "AL-A'RAF", hint: "A chapter about the heights." },
    { word: "AL-ANFAL", hint: "Means 'The Spoils of War.'" },
    { word: "AT-TAUBAH", hint: "Chapter about repentance." },
    { word: "YUNUS", hint: "Named after Prophet Jonah." },
    { word: "HUD", hint: "Named after Prophet Hud." },
    { word: "YUSUF", hint: "Named after Prophet Joseph." },
    { word: "IBRAHIM", hint: "Named after Prophet Abraham." },
    { word: "AL-HIJR", hint: "Named after the rocky tract." },
    { word: "AN-NAHL", hint: "Means 'The Bee.'" },
    { word: "AL-ISRA", hint: "Chapter about the night journey." },
    { word: "AL-KAHF", hint: "Means 'The Cave.'" },
    { word: "TAHA", hint: "One of the names of the Quran chapters." },
    { word: "AL-ANBIYA", hint: "Means 'The Prophets.'" },
    { word: "AL-HUJURAT", hint: "Chapter about etiquette and manners." }
  ]
};


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
// const words = {
//   programming: [
//     "JAVASCRIPT", "PYTHON", "TYPESCRIPT", "JAVA", "RUBY", "KOTLIN", "SWIFT", "HTML", "CSS"
//   ],
//   movies: [
//     "INCEPTION", "AVATAR", "TITANIC", "GLADIATOR", "COCO", "UP", "JOKER", "INTERSTELLAR", "FROZEN"
//   ],
//   people: [
//     "EINSTEIN", "NEWTON", "DARWIN", "CLEOPATRA", "ARISTOTLE", "SHAKESPEARE", "GANDHI", "MANDELA", "TESLA"
//   ],
//   countries: [
//     "ALGERIA", "CANADA", "BRAZIL", "FRANCE", "EGYPT", "JAPAN", "GERMANY", "AUSTRALIA", "MEXICO"
//   ],
//   sports: [
//     "BASKETBALL", "FOOTBALL", "TENNIS", "BASEBALL", "HOCKEY", "CRICKET", "RUGBY", "ATHLETICS", "GOLF", "VOLLEYBALL",
//     "SWIMMING", "BOXING", "MMA", "BADMINTON", "CYCLING", "SKIING", "HANDBALL", "WRESTLING", "CROSSFIT", "TABLE TENNIS"],
//   soccer: [
//     "MESSI", "RONALDO", "PELE", "MARADONA", "NEYMAR", "MBAPPE", "ZIDANE", "BECKHAM", "SIR-ALEX-FERGUSON"
//   ],
//   animals: [
//     "ELEPHANT", "LION", "TIGER", "GIRAFFE", "ZEBRA", "KANGAROO", "PANDA", "KOALA", "CROCODILE"
//   ],
//   planets: [
//     "MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE", "PLUTO"
//   ],
//   sports: [
//     "BASKETBALL", "FOOTBALL", "TENNIS", "BASEBALL", "HOCKEY", "CRICKET", "RUGBY", "ATHLETICS", "GOLF"
//   ],
//   cities: [
//     "PARIS", "LONDON", "NEW-YORK", "TOKYO", "SYDNEY", "BERLIN", "CAPE-TOWN", "RIO", "BARCELONA"
//   ],
//   foods: [
//     "PIZZA", "BURGER", "PASTA", "SUSHI", "TACO", "SALAD", "STEAK", "ICE CREAM", "SANDWICH"
//   ],
//   surahs: [
//     "AL-FATIHA", "AL-BAQARAH", "AALI IMRAN", "AN-NISA", "AL-MA'IDAH", "AL-AN'AM", "AL-A'RAF", "AL-ANFAL", "AT-TAUBAH", "YUNUS",
//     "HUD", "YUSUF", "IBRAHIM", "AL-HIJR", "AN-NAHL", "AL-ISRA", "AL-KAHF", "TAHA", "AL-ANBIYA", "AL-HUJURAT"
//   ]
// };

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
let randomovaluevalue = randompropvalue[randomvaluenumber].word;
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

      if (wrongattemps === 5 && !hintShown) {
        hintShown = true;
    
        // Create a hint popup
        let hintDiv = document.createElement("div");
        hintDiv.className = "popuphint";
        let hintText = document.createTextNode(`Hint: ${randomhint}`);
        let hintbox = document.querySelector(".hint"); // Correct selector
        hintDiv.appendChild(hintText);
    
        // Append hintDiv to the letters-guess element
        hintbox.appendChild(hintDiv); // Fixed line
    }
    
        

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
