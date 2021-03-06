'use strict';

// Intro
function intro() {
  console.log('Quiz Responses');
  alert('Are you a true Nancy Drew?');
  alert('Take the ultimate quiz to find out');
  alert('Enter either Yes or No');
}

// Keep a tally of points
var tally = [];

// Question 1: Curiosity
function hasCuriosity() {
  var curiosity = prompt('Do you have a strong sense of curiosity?').toUpperCase();
  if (curiosity === 'N' || curiosity === 'NO') {
    alert('Hmm...');
  } else if (curiosity === 'Y' || curiosity === 'YES') { 
    alert('It\'s a Nancy Drew thing');
    tally.push(1);
  } else {
    alert('Invalid answer.'); 
  }
  return console.log('Sense of curiosity: ' + curiosity);
}

// Question 2: Attention to detail
function hasDetail() {
  var detail = prompt('Are you good at remembering small details? ').toUpperCase();
  if (detail === 'N' || detail === 'NO') {
    alert('Hmm...');
  } else if (detail === 'Y' || detail === 'YES') { 
    alert('Sounds like you know the secret of the old clock');
    tally.push(1);
  } else {
    alert('Invalid answer.');
  }
  return console.log('Can remember small details: ' + detail);
}

// Question 3: Jetsetter
function hasWhim() {
  var whim = prompt('Have you ever gone on a trip on a whim?').toUpperCase();
  if (whim === 'N' || whim === 'NO') {
    alert('I\'ll bet');
  } else if (whim === 'Y' || whim === 'YES') { 
    alert('You\'re hot on the trail!');
    tally.push(1);
  } else {
    alert('Invalid answer.');
  }
  console.log('Likely to go on a whim: ' + whim);
}


// Question 4: Secret identity
function hasSecretID() {
  var identity = prompt('Have you ever had a secret identity?').toUpperCase();
  if (identity === 'N' || identity === 'NO') {
    alert('Hmm...');
  } else if (identity === 'Y' || identity === 'YES') { 
    alert('You\'re hot on the trail!');
    tally.push(1);
  } else {
    alert('Invalid answer.');
  }
  return console.log('Secret identity: ' + identity);
}

// Question 5: Magnifyer
function hasMagnifyGlass() {
  var magnifying_glass = prompt('Do you have a magnifying glass?').toUpperCase();
  if (magnifying_glass === 'N' || magnifying_glass === 'NO') {
    alert('Hmm...');
  } else if (magnifying_glass === 'Y' || magnifying_glass === 'YES') { 
    alert('The ultimate deadly device');
    tally.push(1);
  } else {
    alert('Invalid answer.');
  }
  return console.log('Has a magnifying glass: ' + magnifying_glass);
}

// Repeat back responses
function repeatResponses(hasCuriosity, hasDetail, hasWhim, hasSecretID, hasMagnifyGlass) {
  return 'You answered: ' + hasCuriosity + ', ' + hasDetail + ', ' + hasWhim + ', ' + hasSecretID + ', ' + hasMagnifyGlass;
}

// Question 6: bonus point for correctly guessing which of the 175 Nancy Drew books is the featured book of the day.
function bookOfTheDay() {
  var book_num = Math.floor(Math.random() * 175) + 1;

  alert('Bonus point for guessing which book number is the featured book of the day.');

  var user_guess = prompt('Guess which of the 175 books is the book of the day: ');
  

  for (var guesses = 3; guesses > 0; guesses--) {
    if (parseInt(user_guess) === book_num) {
      alert('Bingo!');
      tally.push(1);
      return console.log('User guessed the correct number: ' + user_guess);
    } else if (user_guess > 175) {
      console.log('User guessed too high.');
      user_guess = prompt(' There are only 175 books! Guess lower.')
    } else if (user_guess > book_num && user_guess <= 175) {
      user_guess = prompt('Too high. Guess again.');
      console.log('User guess too high');
    } else if (user_guess < book_num) {
      user_guess = prompt('Too low. Guess again.');
      console.log('You guessed too low! Guess again.');
    } else {
      user_guess = prompt('Invalid entry. Pick a valid number.');
    }
  }

  if (parseInt(user_guess) !== book_num) {
    alert('Out of guesses.');
    alert('The book of the day is #' + book_num + '.');
  }
}

// Question 7: Main contacts
function nancyFriends() {
  var nancy_friends = ['her dad', 'dad', 'mr. drew', 'mr drew', 'father', 'carson', 'carson drew', 'frank', 'frank hardy', 'joe', 'joe hardy', 'bess', 'bess marvin', 'george', 'george fayne', 'hannah', 'hannah gruen', 'ned', 'ned nickerson'];

  var user_guess_friends = prompt('Name one of the 7 people Nancy usually calls to help solve a mystery.').toLowerCase();

  var guesses_left = 6;
  for (var i = 0; i < 6; i++) {
    if (nancy_friends.includes(user_guess_friends)) {
      alert('Correct!');
      console.log('User correctly answered '+ user_guess_friends + ' as Nancy\'s friend');
      tally.push(1);
      break;
    } else if (user_guess_friends !== nancy_friends[i]) {
      user_guess_friends = prompt('Incorrect. Guesses left: ' + guesses_left + '.');
      guesses_left--
      console.log('Incorrectly guessed a friend');
    }
  }

  if (!nancy_friends.includes(user_guess_friends)) {
    alert('Better go re-read the books.');
    alert('Possible answers were: Her dad, Frank Hardy, Joe Hardy, Bess Marvin, George Fayne, Hannah Gruen, and Ned Nickerson.');
  }
}

function keepTally() {
  alert('You got ' + tally.length + ' points.');
  console.log('User earned ' + tally.length + ' points.');  
}


// Confirm if true Nancy Drew
function confirmNancyDrew() {
  if (tally.length > 5) {
    alert('You are a true Nancy Drew!');
    console.log('User is a true Nancy Drew');
  } else {
    alert('You sleuth skills need some work. Better luck next time.');
    console.log('User is not a true Nancy Drew');
  }
}

function run_quiz() {
  intro();
  hasCuriosity();
  hasDetail();
  hasWhim();
  hasSecretID();
  hasMagnifyGlass();
  repeatResponses();
  bookOfTheDay();
  nancyFriends();
  keepTally();
  confirmNancyDrew();
}

run_quiz();
