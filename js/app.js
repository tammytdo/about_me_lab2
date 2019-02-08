console.log('Quiz Responses');
alert('Are you a true Nancy Drew?');
alert('Take the ultimate quiz to find out');
alert('Enter Yes or No');


// Quiz question about user's curiosity
var curiosity = prompt('Do you have a strong sense of curiosity?').toUpperCase();
if (curiosity === "N" || curiosity === "NO") {
  alert("Hmm...");
} else if (curiosity === "Y" || curiosity === "YES") { 
  alert("It's a Nancy Drew thing");
} else {
  alert("Nancy never makes a mistake. 0 points. ");
}
console.log('Sense of curiosity: ' + curiosity);

// Quiz question about user's attention to detail
var detail = prompt('Are you good at remembering small details? ').toUpperCase();
if (detail === "N" || detail === "NO") {
  alert("Hmm...");
} else if (detail === "Y" || detail === "YES") { 
  alert("Sounds like you know the secret of the old clock");
} else {
  alert("Nancy never makes a mistake. 0 points. ");
}
console.log('Can remember small details: ' + detail);

// Quiz question about user's likeliness to jet off on a case
var travel = prompt('Have you ever hopped on a plane on a whim?').toUpperCase();
if (travel === "N" || travel === "NO") {
  alert("I'll bet");
} else if (travel === "Y" || travel === "YES") { 
  alert("You're hot on the trail!");
} else {
  alert("Nancy never makes a mistake. 0 points. ");
}
console.log('Likely to jet set: ' + travel);

// Quiz question about user's secret identity
var identity = prompt('Have you ever had a secret identity?').toUpperCase();
if (identity === "N" || identity === "NO") {
  alert("Hmm...");
} else if (identity === "Y" || identity === "YES") { 
  alert("You're hot on the trail!");
} else {
  alert("Nancy never makes a mistake. 0 points. ");
}
console.log('Secret identity: ' + identity);


// Quiz question about user's ownership of a magnifying glass
var magnifying_glass = prompt('Do you have a favorite magnifying glass?').toUpperCase();
if (magnifying_glass === "N" || magnifying_glass === "NO") {
  alert("Hmm...");
} else if (magnifying_glass === "Y" || magnifying_glass === "YES") { 
  alert("The ultimate deadly device");
} else {
  alert("Nancy never makes a mistake. 0 points. ");
}
console.log('Favorite magnifying glass: ' + magnifying_glass);

// Repeat back responses
alert("You answered: " + curiosity + ", " + detail + ", " + travel + ", " + identity + ", " + magnifying_glass);



// Tally points

// Confirm if they are a Nancy Drew
