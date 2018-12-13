//Quiz game for browser console
//Function constructor  
(function () {
	function Question(question, answer, correct) {
	this.question = question; //set everything we input into this construcor on the THIS variable - question we input
	this.answer = answer; //Answer we input
	this.correct = correct; 

}

//Store question into array
//Prototype Chain: Write the method into the Question's protoype property, which is the prototype of all of the instances of all of the objects created through it
Question.prototype.displayQuestion = function() {
	console.log(this.question);
	for (var i = 0; i < this.answer.length; i++) {
		console.log(i + ':' + this.answer[i]);
	}
	
}
// Check answer if correct, compare the answer that the user gives to our correct answer
Question.prototype.checkAnswer = function(ans, callback) {
	var sc;
	if (ans === this.correct){ // if the answer the user chooses is the same as the correct answer, then we console log the Correct, or else we console log Try again
		console.log('Correct!');
		sc = callback(true);
	} else {
		console.log('Try Again');
		
		sc = callback(false);
	}
	this.displayScore(sc);
}


Question.prototype.displayScore = 
function(score) {
	console.log('Your current score is:' + score);
	console.log('------------------------------');
}




// List of questions

var q1 = new Question('Is JavaScript the coolest language in the world?', ['Yes', 'No'], 0); //The question is the first argument, the second argument is the answers, the third argument is the answer
	
	// The 'new' operator creates a new empty object, then it calls the 'Question' function, then it sets the 'this' variablein the function to the new empty object that was just created.

var q2 = new Question('Who is the creator of this course?', ['Jonas', 'Michael', 'John'], 0);

var q3 = new Question('Which best desribes coding?', ['Hard', 'Boring', 'Fun'], 2);

var questions = [q1, q2, q3];
	
function score() {
	var sc = 0;
	return function(correct) {
		if (correct) {
			sc++;
		}
		return sc;
	}
}	

	
var keepScore = score();

	
function nextQuestion(){
// Store questions in array



// Select one random question and log to console

var r = Math.floor(Math.random() * questions.length); // The Math.random method returns a number between 0 and 1, but we dont want a number between 0 and 1, so we multiply it by the length of the questions array

													  // The Math.floor method removes the decimals from this number


questions[r].displayQuestion();

var answer = prompt('Please select correct answer'); //The parseInt function will convert the string into a number (integer)

//questions[r].checkAnswer(answer); //This calls the checkAnswer method we wrote, and pass in the users answer, which is stored in the 'answer' variable above

	
if(answer !== 'exit') {
	
	questions[r].checkAnswer(parseInt(answer), keepScore); //This calls the checkAnswer metthod we wrote, and pass in the users answer, which is stored in the 'answer' variable above
	
	nextQuestion();
   }


	
}


nextQuestion();	
	
	
	
	
})(); // The IIFE creates a new scope that we defined in all the code we wrote for the game, this ensures that if other people use this code, the variables here will not interefere with the variables of other code




















