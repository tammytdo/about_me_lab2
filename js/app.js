
function intro() {
  console.log('Quiz Responses');
  alert('Are you a true Nancy Drew?');
  alert('Take the ultimate quiz to find out');
  alert('Enter either Yes or No');
}

//keep a tally
var tally = [];

// Question 1 about user's curiosity
function hasCuriosity() {
  var valid_answer = false;
  do {
    var curiosity = prompt('Do you have a strong sense of curiosity?').toUpperCase();
    if (curiosity === 'N' || curiosity === 'NO') {
      alert('Hmm...');
      valid_answer = true;
      tally.push(1);
      break;
    } else if (curiosity === 'Y' || curiosity === 'YES') { 
      alert('It\'s a Nancy Drew thing');
      valid_answer = true;
      break;
    }

    if (!valid_answer) {
      alert('Invalid answer. Enter Yes or No.');
    }
  } while (!valid_answer);
  return console.log('Sense of curiosity: ' + curiosity);
}

// Question 2 about user's attention to detail
function hasDetail() {
  var detail = prompt('Are you good at remembering small details? ').toUpperCase();
  if (detail === 'N' || detail === 'NO') {
    alert('Hmm...');
  } else if (detail === 'Y' || detail === 'YES') { 
    alert('Sounds like you know the secret of the old clock');
    tally.push(1);
  } else {
    alert('Invalid answer. Enter Yes or No.');
  }
  return console.log('Can remember small details: ' + detail);  
}

// Question 3 about user's likeliness to jet off on a case
function hasWhim() {
  var whim = prompt('Have you ever gone on a trip on a whim?').toUpperCase();
  if (whim === 'N' || whim === 'NO') {
    alert('I\'ll bet');
  } else if (whim === 'Y' || whim === 'YES') { 
    alert('You\'re hot on the trail!');
    tally.push(1);
  } else {
    alert('Invalid answer. Enter Yes or No.');
  }
  console.log('Likely to go on a whim: ' + whim);
}


  // Question 4 about user's secret identity
function hasSecretID() {
  var identity = prompt('Have you ever had a secret identity?').toUpperCase();
  if (identity === 'N' || identity === 'NO') {
    alert('Hmm...');
  } else if (identity === 'Y' || identity === 'YES') { 
    alert('You\'re hot on the trail!');
    tally.push(1);
  } else {
    alert('Invalid answer. Enter Yes or No.');
  }
  return console.log('Secret identity: ' + identity);
}

// Question 5 about user's ownership of a magnifying glass
function hasMagnifyGlass() {
  var magnifying_glass = prompt('Do you have a magnifying glass?').toUpperCase();
  if (magnifying_glass === 'N' || magnifying_glass === 'NO') {
    alert('Hmm...');
  } else if (magnifying_glass === 'Y' || magnifying_glass === 'YES') { 
    alert('The ultimate deadly device');
    tally.push(1);
  } else {
    alert('Invalid answer. Enter Yes or No.');
  }
  return console.log('Has a magnifying glass: ' + magnifying_glass);
}

// Repeat back responses
function repeatResponses(hasCuriosity, hasDetail, hasWhim, hasSecretID, hasMagnifyGlass) {
  return 'You answered: ' + hasCuriosity + ', ' + hasDetail + ', ' + hasWhim + ', ' + hasSecretID + ', ' + hasMagnifyGlass;
}

function generateBookNum() {
  // Question 6 about picking the Nancy Drew book number of the day
  //confirm user guess is a float
  var book_num = 99;
  return book_num;
}

function askBookNum(book_num) {
  //Award bonus point for correctly guessing which of the 175 Nancy Drew books is the featured book of the day.
  alert('Bonus point for guessing which book number is the featured book of the day.');

  var user_guess = prompt('Guess which of the 175 books is the book of the day: ');

  for (var guesses = 3; guesses > 0; guesses--) {
    if (parseInt(user_guess) === book_num) {
      alert('Bingo!');
      tally.push(1);
      return console.log('User guessed the correct number: ' + user_guess);
      break;
    } else if (user_guess > 175) {
      console.log('User guessed too high.');
      user_guess = prompt(' There are only 175 books! Guess again.')
    } else if (user_guess > book_num && user_guess <= 175) {
      user_guess = prompt('Too high. Guess again.');
      console.log('User guess too high');
    } else if (user_guess < book_num) {
      user_guess = prompt('Too low. Guess again.');
      console.log('You guessed too low! Guess again.');
    } else {
      user_guess = prompt("Invalid entry. Pick a number.");
    }
  }

  if (parseInt(user_guess) !== book_num) {
    alert('Out of guesses.');
    return 'The book of the day is number ' + book_num + '.';
  }
}

function nancyFriend() {
  // Question 7 about naming one of Nancy's main phone contacts.
  var nancy_friends = ['her Dad', 'mr. drew', 'mr drew', 'father', 'carson drew', 'frank', 'frank hardy', 'joe', 'joe hardy', 'bess', 'bess marvin', 'george', 'george fayne', 'hannah', 'hannah gruen', 'ned', 'ned nickerson'];
  var user_guess_friends = prompt('Name one of the 7 people Nancy usually calls to help solve a mystery.').toLowerCase();

  for (var i = 1; i < 7; i++) {
    if (nancy_friends.includes(user_guess_friends)) {
      alert('Correct!');
      console.log('User correctly answered '+ user_guess_friends + ' as Nancy\'s friend');
      tally.push(1);
      break;
    } else if (user_guess_friends !== nancy_friends[i]) {
      user_guess_friends = prompt('Incorrect. Guess again.');
      console.log('Incorrectly guessed a friend');
    }
  }

  if (!nancy_friends.includes(user_guess_friends)) {
    alert('Better go re-read the books.');
    alert('Possible answers were: Her dad, Frank Hardy, Joe Hardy, Bess Marvin, George Fayne, Hannah Gruen, and Ned Nickerson.');
  }
}

function keepTally() {
  // Tally points
  for (i in tally) {
    alert('You got ' + tally.length + ' points.');
    console.log('User earned ' + tally.length + ' points.');
  }
}

function confirmNancyDrew() {
  // Confirm if they are a Nancy Drew
  if (tally.length > 5) {
    alert('You are a true Nancy Drew!');
    console.log('User is a true Nancy Drew');
  } else {
    alert('You sleuth skills need some work. Better luck next time.');
    console.log('User is not a true Nancy Drew');
  }
}


intro();
hasCuriosity();
hasDetail();
hasWhim();
hasSecretID();
hasMagnifyGlass();
repeatResponses();
generateBookNum();
askBookNum();
nancyFriend();
keepTally();
confirmNancyDrew();



var nancy_characteristics = {
  name : 'Nancy',
  age : 16,
  hair_Color : 'blonde',
  fav_color : 'red',
  fav_book_genre : 'mystery',
  signature : function(){
    console.log('Love, ' + this.name);
  }
};

var ned_characteristics = {
  name : 'Ned',
  age : 17,
  hair_Color : 'brown',
  fav_color : 'blue',
  fav_book_genre : 'romance',
  signature : function(){
    console.log('Thanks! -' + this.name);
  }
};

nancy_characteristics['signature']();
ned_characteristics.signature();
