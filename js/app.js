console.log('Quiz Responses');
alert('Are you a true Nancy Drew?');
alert('Take the ultimate quiz to find out');
alert('Enter Yes or No');


// Question 1 about user's curiosity
var curiosity = prompt('Do you have a strong sense of curiosity?').toUpperCase();
if (curiosity === 'N' || curiosity === 'NO') {
  alert('Hmm...');
} else if (curiosity === 'Y' || curiosity === 'YES') { 
  alert('It\'s a Nancy Drew thing');
} else {
  alert('Nancy never makes a mistake. No points. ');
}
console.log('Sense of curiosity: ' + curiosity);

// Question 2 about user's attention to detail
var detail = prompt('Are you good at remembering small details? ').toUpperCase();
if (detail === 'N' || detail === 'NO') {
  alert('Hmm...');
} else if (detail === 'Y' || detail === 'YES') { 
  alert('Sounds like you know the secret of the old clock');
} else {
  alert('Nancy never makes a mistake. No points. ');
}
console.log('Can remember small details: ' + detail);

// Question 3 about user's likeliness to jet off on a case
var travel = prompt('Have you ever hopped on a plane on a whim?').toUpperCase();
if (travel === 'N' || travel === 'NO') {
  alert('I\ll bet');
} else if (travel === 'Y' || travel === 'YES') { 
  alert('You\re hot on the trail!');
} else {
  alert('Nancy never makes a mistake. No points. ');
}
console.log('Likely to jet set: ' + travel);

// Question 4 about user's secret identity
var identity = prompt('Have you ever had a secret identity?').toUpperCase();
if (identity === 'N' || identity === 'NO') {
  alert('Hmm...');
} else if (identity === 'Y' || identity === 'YES') { 
  alert('You\'re hot on the trail!');
} else {
  alert('Nancy never makes a mistake. No points. ');
}
console.log('Secret identity: ' + identity);


// Question 5 about user's ownership of a magnifying glass
var magnifying_glass = prompt('Do you have a favorite magnifying glass?').toUpperCase();
if (magnifying_glass === 'N' || magnifying_glass === 'NO') {
  alert('Hmm...');
} else if (magnifying_glass === 'Y' || magnifying_glass === 'YES') { 
  alert('The ultimate deadly device');
} else {
  alert('Nancy never makes a mistake. No points. ');
}
console.log('Favorite magnifying glass: ' + magnifying_glass);

// Repeat back responses
alert('You answered: ' + curiosity + ', ' + detail + ', ' + travel + ', ' + identity + ', ' + magnifying_glass);

//Award bonus point for correctly guessing which of the 175 Nancy Drew books is the featured book of the day.
alert('Bonus point for guessing which book number is the featured book of the day.');

// Question 6 about picking the Nancy Drew book number of the day
//confirm user guess is a float
var book_num = 9;
var user_guess = prompt('Guess the book of the day: ');


for (var guesses = 3; guesses > 0; guesses--) {
  if (user_guess === book_num) {
    alert('Bingo!');
    console.log('User guessed the correct number: ' + user_guess);
    break;
  } else if (user_guess > 175) {
    console.log('User guessed too high.');
    user_guess = prompt(' There are only 175 books! Guess again.')
  } else if (user_guess > book_num && user_guess < 175) {
    user_guess = prompt('You guessed too high. Guess again.');
    console.log('User guess too high');
  } else if (user_guess < book_num) {
    user_guess = prompt('You guessed too low. Guess again.');
    console.log('You guessed too low! Guess again.');
  } else {
    user_guess = prompt("Invalid entry. Pick a number.");
  }
}

// Question 7 about

// Tally points

// Confirm if they are a Nancy Drew

