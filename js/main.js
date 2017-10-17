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
            question : "Who were the New York Mets first manager?",
            answers  : ["Joe Torre", "Leo Durocher", "Casey Stengel", "Yogi Bera"],
            correct  : "Casey Stengel"
            },



];

var quizForm = document.getElementById("quizForm");
//FUNCTION THAT WILL RELOAD AND CLEAR SCREEN
function startQuiz(){
//START WITH A BLANK SLATE(clear previous HTML)
  quizForm.innerHTML= "";
  //UPDATE STYLE OF FORM TO CENTER ELEMENTS
  quizForm.style.margin = "12% auto";
  //load the 1st question
  createQuestion();
};

function createQuestion() {
  // clear previous HTML
  questionForm.innerHTML = "";

  //loop thourgh questions as page loads
  for (i = 0; i < 4; i++) {
      //create elememnts when page loads
      var formGroup = document.createTextNode("div");
      var questionEl = document.createElement("h2");

      //add atributes to ELEMENTS
      formGroup.className = "formGroup";
      questionEl.id       = "questions" + [i];

      //create text for question
      var answerText = document.createTextNode(questions[i].question);

      //add question text to elememnt
      questionEl.appendChild(questionText);

      //add elememnt to dom
      formGroup.appendChild(answerEl);


      //add form group to questionForm
      questionForm.appendChild(formGroup);

      //add answers to the dom
      for (var b = 0; b < questions[i].answers.length; b++)
          //create possible answers
          var answerDiv = document.createElement("div");
          var answerEl = document.createElement("input");

          //create text node for question
          var answerText = document.createTextNode(questions[i].answers[b]);

          //add question to div
          answerDiv.appendChild(answerEl);
          answerDiv.appendChild(answerText);

          //add atributes
          answerDiv.className = "questionWrap";
          answerEl.type       = "baseball";
          answerEl.name       = "baseball" + [i]
          answerEl.value      = question[i].answers[b];

          //add questions to formGroup
          formGroup.appendChild(answerDiv);

          //add attributes
          submitBtn.className = "btn btn-lg btn-primary";
          submitBtn.textContent = "Submit Answer";
          submitBtn.type        = "button";
          submitBtn.onclick     = submitAnswer;

          //add button to form group
          questionForm.appendChild(submitBtn);
    };

    function submitAnswer() {
      //get all input tags with possible answers
      var els = document.getElementsByTagName("input");

      //loop through those inputs
      for (var i = 0; i <  el.length; ++ i){
      //check which baseball is checked and if the user answer is correct
      if (els[i].checked && els[i].value.trim() == questions[0].correct.trim()){
        //confirm for developer that the user got the question correct


        //remove the currect question from the question array
        questions.shift();

        //find parent and add class of right
        els[i].parentElement.className = "questionWrap right";

        //check to see if there are any more questions, if 0 the Quiz Over!
        if(questions.length == 0) {
          //clear any previous HTML
          questionForm.innerHTML = "<h1>Well Done!</h1>" + "<br>" + "<img src='img/success.jpg'>";

          //stop the function when the user wins
          return;
        };

        //if the user is corrent and more questions exist, move to the next questions
        setTimeout(function(){
            createQuestion();
          }, 2000);

          // stop the function, user got it correect
			return;
      };
    };

      //confirm for developer that the user got the question incorrect
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
