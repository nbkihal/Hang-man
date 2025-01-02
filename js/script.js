//letters
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

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
  programming: ["JAVASCRIPT", "PYTHON", "TYPESCRIPT", "JAVA", "RUBY", "KOTLIN", "SWIFT", "HTML", "CSS"],
  movies: ["INCEPTION", "AVATAR", "TITANIC", "GLADIATOR", "COCO", "UP", "JOKER", "INTERSTELLAR", "FROZEN"],
  people: ["EINSTEIN", "NEWTON", "DARWIN", "CLEOPATRA", "ARISTOTLE", "SHAKESPEARE", "GANDHI", "MANDELA", "TESLA"],
  countries: ["ALGERIA", "CANADA", "BRAZIL", "FRANCE", "EGYPT", "JAPAN", "GERMANY", "AUSTRALIA", "MEXICO"],
}

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
    }

  }
});