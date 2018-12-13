// Function constructor


//Creating an object called 'john'
/*
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

//Function constructor
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	this.calculateAge 
}

// Inheritance with methods
Person.prototype.calculateAge = function() {
		console.log(2016 - this.yearOfBirth);
	};

// Inheritance with properties

Person.prototype.lastName = 'Smith';



var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// How does this work
// 1. When we use the 'new' operator, a brand new empty object is created
// 2. After that, the constructor function, which is 'Person' function is called, with the arguments specified
// 3. Calling a function creates a new execution context, which has the 'this' vaariable not pointing to the global object, but to the new object created.
// 4. The this variable is no longer set on the global object but on the new object
// 5. These are then assigned to the new variable


*/

// Object.create
/*
var personProto = {
	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
	
	name: { value: 'Jane' },
	yearOfBirth: { value: 1969 },
	job: { value: 'designer'}
});
*/

// Primitives vs objects

// Primitives
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
*/

// 2 variables holding 2 primitives are different things

/*
//Objects
var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change (a, b) {
	a = 30;
	b.city = 'San Francisco';
	
}

//call the function
change (age, obj);

console.log(age);
console.log(obj.city);

*/

//Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el){
	
	if (el >= 18 && el <= 81){
	
	return Math.round(206.9 - (0.67 * el));
} else {
	return -1;
}
}


var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);



console.log(ages);
console.log(fullAges);
console.log(rates);


*/

// Lecture: Function returining functions

/*
function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?')
		}
	} else if (job === 'teacher') {
		return function (name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + ' , what do you do?');
		}
	}
	
}

var teacherQuestion = interviewQuestion('teacher');

var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');


interviewQuestion('teacher')('Mark');

*/

/// Lecture: IIFE - Immediately Invoked Functions

/*
function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();

//IIFE
(function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);

*/


// Lecture: Closures
/*
function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);
retirementUS(1990);

//retirement(66)(1990);
*/

/*
function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?')
		}
	} else if (job === 'teacher') {
		return function (name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + ' , what do you do?');
		}
	}
	
}

var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');
var noQuestion = interviewQuestion();

designerQuestion('John');
teacherQuestion('John');
noQuestion('John');
*/

//Closure
/*
function interviewQuestion(job){
	return function(name) {
		if (job ==='designer') {
			console.log(name + ', can you please explain what UX design is?')
		} else if (job === 'teacher') {
			console.log('What subject do you teach, ' + name + '?');
		} else {
			console.log('Hello ' + name + ' , what do you do?');
		}
	}
}


interviewQuestion('teacher')('John');
		
*/

// Lecture: Bind, Call and Apply
/*
var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'friendly') {
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.' );
		}
	}
}

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};


//john.presentation('formal', 'morning');

// Method borrowing
// The CALL method allows us to set the THIS variable
//john.presentation.call(emily, 'friendly', 'afternoon');

//The APPLY method

//john.presentation.apply(emily, ['friendly', 'afternoon']);

//The BIND method generates a copy of a function
/*
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;

}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/



/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


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



/*--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

	

nextQuestion();	
	
	
	
	
})(); // The IIFE creates a new scope that we defined in all the code we wrote for the game, this ensures that if other people use this code, the variables here will not interefere with the variables of other code




















