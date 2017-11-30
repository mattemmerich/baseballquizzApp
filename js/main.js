  // array of questions and answers
  var questions = [

        {
        		question : "What year did Jackie Robinson win both the Rookie of the Year and Most Valuble Player?",
        		answers  : ["1951", "1947", "1955", "1946"],
        		correct  : "1947"
        	},


          {
              question : "Bob Feller was a vetran of what Foreign War?",
              answers  : ["WWI", "Vietnam", "WWII", "Korea"],
              correct  : "WWII"
            },


          {
              question : "What player won the Most Valuble Player in both the American League and National League?",
              answers  : ["Tris Speaker", "Barry Bonds", "Dizzy Dean", "Frank Robinson"],
              correct  : "Frank Robinson"
            },

          {
              question : "What three cities have the Athletics called home?",
              answers  : ["Philadelphia, Chicago, Oakland", "Minesota, Philadelphia, Oakland", "Philadelphia, Kansas City, Oakland", "Pittsburgh, Oakland, Philadelphia"],
              correct  : "Philadelphia, Kansas City, Oakland"
              },

          {
              question : "What year did Joe Dimagio hit safley in 56 consecutive games?",
              answers  : ["1941", "1945", "1938", "1949"],
              correct  : "1941"
              },

          {
              question : "How many seasons did the Pilots play in Seattle?",
              answers  : ["10", "7", "1", "3"],
              correct  : "1"
              },

          {
              question : "Where is Roberto Clemente from?",
              answers  : ["Miami", "Puerto Rico", "Dominican Rebuplic", "Nicaragua"],
              correct  : "Puerto Rico"
              },

          {
              question : "Who was the New York Mets first manager?",
              answers  : ["Joe Torre", "Leo Durocher", "Casey Stengel", "Yogi Bera"],
              correct  : "Casey Stengel"
              },



  ];


var questionForm = document.getElementById("questionForm");

// begin the game when the user hits the start button
function startGame() {
	// clear any previous html
	questionForm.innerHTML = "";

	// update style of form to center elements
	questionForm.style.margin  = "12% auto";

	// load the 1st question
	createQuestion();
};


function createQuestion() {
	// clear any previous html
	questionForm.innerHTML = "";

	// loop through questions when page loads
	for (var i = 0; i < 1; i++) {
		// Create Elements when page loads
		var formGroup   = document.createElement("div");
		var questionEl  = document.createElement("h2");

		// Add attributes to Elements
		formGroup.className = "formGroup";
		questionEl.id       = "questions" + [i];

		// Create text for question
		var questionText = document.createTextNode(questions[i].question);

		// Add question text to Element
		questionEl.appendChild(questionText);

		// Add Element to dom
		formGroup.appendChild(questionEl);

		// add formgroup to questionForm
		questionForm.appendChild(formGroup);

		// add answers to the dom
		for (var j = 0; j < questions[i].answers.length; j++) {
			// create possible answers
			var answerDiv  = document.createElement("div");
			var answerEl   = document.createElement("input");

			// create text node for question
			var answerText = document.createTextNode(questions[i].answers[j]);

			// add question to div
			answerDiv.appendChild(answerEl);
			answerDiv.appendChild(answerText);

			// add attributes
			answerDiv.className = "questionWrap";
			answerEl.type       = "radio";
			answerEl.name       = "radio" + [i];
			answerEl.value      = questions[i].answers[j];

			// add questions to formGroup
			formGroup.appendChild(answerDiv);
		};
	};

	// create submit button
	var submitBtn  = document.createElement("button");

	// add attributes
	submitBtn.className   = "btn btn-lg btn-primary";
	submitBtn.textContent = "Submit Answer";
	submitBtn.type        = "button";
	submitBtn.onclick     = submitAnswer;

	// add button to form group
	questionForm.appendChild(submitBtn);
};


function submitAnswer() {
	// get all input tags with possible answers
	var els = document.getElementsByTagName("input");

	// loop through those inputs
	for (var i = 0; i < els.length; i++) {
		// check which radio is checked and if the user answer is correct
		if (els[i].checked && els[i].value.trim() == questions[0].correct.trim()) {
			// confirm for develpoer that the user got the question correct
			console.log("Correct Answer", els[i]);

			// remove the current question from the questions array
			questions.shift();

			// find parent and add class of right
			els[i].parentElement.className = "questionWrap right";

			// check to see if there are any more questions, if 0 then Game Over
			if(questions.length == 0) {
				// clear any previous html
				questionForm.innerHTML = "";

				// update styles of questionForm
				questionForm.style.textAlign = "center";
				questionForm.style.margin  = "0 auto";

				// Display GAME OVER to user
				questionForm.innerHTML = "<h1>Good Job, You Completed the Quiz!</h1>" + "<br>" +  "<img src='img/success.jpg'>";

				// stop the function when the user wins
				return;
			};

			// if the user is correct and more questions exist, move to the next question
			setTimeout(function(){
				createQuestion();
			}, 2000);

			// stop the function, user got it correect
			return;
		};
	};

	// confirm for develpoer that the user got the question incorrect
	console.log("Incorrect Answer");

	// find the parent of the input element and add a class of wrong to it
	for (var i = 0; i < els.length; i++) {
		// find current radio checked
		if (els[i].checked) {
			// find parent and add class of wrong
			els[i].parentElement.className = "questionWrap wrong";
		};
	};
};
