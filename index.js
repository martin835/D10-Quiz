
/*  
  QUIZ GAME!

  RULES:
  / The player must guess correctly a certain amount of questions
  / Each correct answer gives him one point
  / Answers could be multiple or true/false
  / At the end of the game, the user must know his/her total score

  QUESTIONS:
  / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
  / Could be multiple of boolean (true / false)

  HINTS:
  / Keep a global variable score for the user score
  / Keep a variable questionNumber for the question the user is answering
  / When questionNumber is bigger then the available questions, present the score
  / Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know how to do it!)
  / Start with the easier version and THEN implement the EXTRAs
  / Please debug everything / try it on the console to be sure of what to expect from your code

  EXTRA:
  / Show if the answer provided was the wrong one or correct it after clicking
  / Present the questions one at a time instead of having all of them displayed together
  / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)
 */
  /* WHEN YOU ARE FINISHED
    Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
  */

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let score
let questionNumber   // When questionNumber is bigger then the available questions, present the score

let questionsAnswers = []
/* 
questionsAnswers [
    {
    question: "What does CPU stand for?",
    options: ['Central Processing Unit', 'Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit']
},
] */


/* 
const answers = answers {
    question: "What does CPU stand for?",
    options: ['Central Processing Unit', 'Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit']
} */


for (i = 0; i < questions.length; i++) {

    const answers = {}
    //let answer = {} 
    answers.question = questions[i].question
    let allAnswers = []
    allAnswers.push(questions[i].correct_answer)

        for (j=0; j < questions[i].incorrect_answers.length; j++ ) {
            allAnswers.push(questions[i].incorrect_answers[j])
        }

    answers.options = allAnswers

    questionsAnswers.push(answers)

    }

console.log(questionsAnswers)

window.onload = function () {
    // HINTS
    // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
    // For each question, create a container for wrapping it; then create a radio button
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
    // with, as options, both the correct answer and the incorrect ones
    // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
    //
    // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
    // Display the first question with the text and the radio buttons
    // when the user selects an answer, pick the next question from the array and replace the old one with it
    // saving the user's choice in a variable
    
    
    console.log("This should happen first")
    
    
    console.log("This should happen last")

    

   
    let fieldSetNode = document.querySelectorAll('fieldset')
    console.log(fieldSetNode)
    
        for (let i = 0; i < fieldSetNode.length; i++) {

                let newRadioButton = document.createElement("input")   //create radio 
                let newLabel = document.createElement("label") 
                
                if(questionsAnswers[i].options[0] !== undefined) {
                
                    newLabel.innerText = questionsAnswers[i].options[0]       //create label
                    newLabel.for="Q"+(i+1)
                    newRadioButton.type="radio"
                    newRadioButton.name="Q"+(i+1)       
                    
                    fieldSetNode[i].appendChild(newRadioButton)
                    fieldSetNode[i].appendChild(newLabel) 
                
            }
        }
        for (let i = 0; i < fieldSetNode.length; i++) {

            let newRadioButton = document.createElement("input")   //create radio 
            let newLabel = document.createElement("label") 
            
            if(questionsAnswers[i].options[1] !== undefined) {
                newLabel.innerText = questionsAnswers[i].options[1]       //create label
                newLabel.for="Q"+(i+1)
                newRadioButton.type="radio"
                newRadioButton.name="Q"+(i+1)       
                
                fieldSetNode[i].appendChild(newRadioButton)
                fieldSetNode[i].appendChild(newLabel) 
            }      
        }

        for (let i = 0; i < fieldSetNode.length; i++) {

            let newRadioButton = document.createElement("input")   //create radio 
            let newLabel = document.createElement("label") 

            if(questionsAnswers[i].options[2] !== undefined) {
                newLabel.innerText = questionsAnswers[i].options[2]       //create label
                newLabel.for="Q"+(i+1)
                newRadioButton.type="radio"
                newRadioButton.name="Q"+(i+1)       
                
                fieldSetNode[i].appendChild(newRadioButton)
                fieldSetNode[i].appendChild(newLabel)   
            }    
        }

        for (let i = 0; i < fieldSetNode.length; i++) {

            let newRadioButton = document.createElement("input")   //create radio 
            let newLabel = document.createElement("label")
            
            if (questionsAnswers[i].options[3] !== undefined) {
                newLabel.innerText = questionsAnswers[i].options[3]       //create label
                newLabel.for="Q"+(i+1)
                newRadioButton.type="radio"
                newRadioButton.name="Q"+(i+1)       
                
                fieldSetNode[i].appendChild(newRadioButton)
                fieldSetNode[i].appendChild(newLabel)       
        }
    } 

  };


 


  const createQuestions = function() {
    // Find the parent for the days (= fields container)
    let questionsContainerNode = document.getElementById("questions-container")
    let questionsOnPage = questions.length    
     
        // Within a loop, we create as many fields as we need
        for (let i = 0; i <= questionsOnPage; i++) {
            // We create a new DIV element...
            let newFieldQuestion = document.createElement("div") // <div></div>
            let newFieldSet  = document.createElement("fieldset")  // <fieldset></fieldset>    
            let question = questions[i].question 
            console.log(question)
            newFieldQuestion.innerText = i+1 + ") " + question // <div>1</div>
            newFieldQuestion.classList.add("question") // <div class="question">questions[i].question</div>           
            questionsContainerNode.appendChild(newFieldQuestion)
            questionsContainerNode.appendChild(newFieldSet)            
        }             
}

createQuestions() 







// How to calculate the result? You can do it in 2 ways:
// If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer

