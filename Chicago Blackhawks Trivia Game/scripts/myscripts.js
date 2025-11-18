// Chicago Blackhawks Trivia Game
// This script handles the logic for a trivia game about the Chicago Blackhakws.
// It includes functions to start the game, display questions, handle user answers, and update the score.


const questions = [{
        question: "Who is the all-time leading scorer for the Chicago Blackhawks?",
        answers: [
            { text: "Bobby Hull", correct: false },
            { text: "Stan Mikita", correct: true },
            { text: "Patrick Kane", correct: false },
            { text: "Denis Savard", correct: false },
            { text: "Jonathan Toews", correct: false }
        ],
        image: "images/stanMikita.jpg",
        clues: ["He played for the Blackhawks from 1958 to 1980.", "He was known for his curved stick."]
    },
    {
        question: "Which Blackhawks player won the Conn Smythe Trophy in 2013?",
        answers: [
            { text: "Jonathan Toews", correct: false },
            { text: "Patrick Kane", correct: true },
            { text: "Duncan Keith", correct: false },
            { text: "Marian Hossa", correct: false }
        ],
        image: "images/patrickKane.jpg",
        clues: ["He is known for his incredible stickhandling skills.", "He scored the Stanley Cup-winning goal in 2010."]
    },
    {
        question: "In what year did the Chicago Blackhawks win their first Stanley Cup?",
        answers: [
            { text: "1934", correct: true },
            { text: "1941", correct: false },
            { text: "1961", correct: false },
            { text: "2010", correct: false },
            { text: "1927", correct: false }
        ],
        image: "images/firstStanleyCup.jpg",
        clues: ["It was during the Great Depression.", "They defeated the Detroit Red Wings."]
    },
    {
        question: "Who was the captain of the Blackhwaks during their 2010 Stanley Cup win?",
        answers: [
            { text: "Patrick Kane", correct: false },
            { text: "Duncan Keith", correct: false },
            { text: "Jonathan Toews", correct: true },
            { text: "Brent Seabrook", correct: false },
            { text: "Marian Hossa", correct: false }
        ],
        image: "images/jonathanToews.jpg",
        clues: ["He is known as 'Captain Serious'.", "He won the Conn Smythe Trophy in 2010."]
    },
    {
        question: "Which Blackhwaks player holds the record for the most goals in a single season?",
        answers: [
            { text: "Bobby Hull", correct: true },
            { text: "Stan Mikita", correct: false },
            { text: "Patrick Kane", correct: false },
            { text: "Jeremy Roenick", correct: false },
            { text: "Steve Larmer", correct: false }
        ],
        image: "images/bobbyHull.jpg",
        clues: ["He was known as 'The Golden Jet'.", "He scored 58 goals in the 1968-69 season."]
    }];
    
    // More questions will be added here...


let currentQuestionIndex = 0; // Index of the current question
let score = 0; // Player's score
let attempts = 0; // Number of attempts for the current question

// DOM elements
const questionText = document.getElementById('question-text'); // Element to display the question text
const questionImage = document.getElementById('question-image'); // Element to display the question image
const answerButtons = document.getElementById('answer-buttons'); // Container for answer buttons
const scoreDisplay = document.getElementById('score'); // Element to display the score
const submitButton = document.getElementById('submit-button'); // Button to submit the answer
const nextButton = document.getElementById('next-button'); // Button to go to the next question
const clueText = document.getElementById('clue-text'); // Element to display clues
const messageBox = document.getElementById('message-box'); // Element to display messages (correct/incorrect)
const clueBox = document.getElementById('clue-box'); // Element to display clues
const instructions = document.getElementById('instructions'); // Instructions container
const gameContainer = document.getElementById('game-container'); // Game container
const startButton = document.getElementById('start-button'); // Button to start the game

// Start the game when the start button is clicked
startButton.addEventListener('click', () => {
    console.log('Start button clicked'); // Debugging log
    instructions.style.display = 'none';
    gameContainer.style.display = 'block';
    startGame();
});

// Initialize the game
function startGame() {
    console.log('Game started'); // Debugging log
    shuffleArray(questions); // Shuffle the questions array
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = score;
    showQuestion();
}

// Shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Display the current question and answers
function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    console.log('Showing question:', question); //Debugging log
    questionText.innerText = question.question;
    questionImage.src = question.image;
    questionImage.style.display = 'none'; //Hides images initially for each question asked
    question.answers.forEach((answer, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer.text));
        answerButtons.appendChild(label);
    });
}

// Reset the state for the next question
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    clueText.innerText = '';
    messageBox.style.display = 'none';
    clueBox.style.display = 'none';
    submitButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
    attempts = 0;
}

// Handle the answer selection
function selectAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;
    const answerIndex = selectedAnswer.value;
    const correct = questions[currentQuestionIndex].answers[answerIndex]?.correct;
    console.log('Selected answer index:', answerIndex); // Debugging log
    console.log('Selected answer correct value:', correct); // Debugging log
    if (correct) {
        highlightCorrectAnswer(); 
        if (attempts === 0) {
            score += 5;
        } else if (attempts === 1) {
            score += 3;
        } else if (attempts === 2) {
            score += 1;
        }
        scoreDisplay.innerText = score;
        messageBox.innerText = "Correct!";
        messageBox.className = "message-box correct";
        messageBox.style.display = 'block';
        questionImage.style.display = 'block';
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    } else {
        attempts++;
        if (attempts <= 2) {
            clueBox.innerText = questions[currentQuestionIndex].clues[attempts - 1];
            clueBox.style.display = 'block';
            messageBox.innerText = "Incorrect. Try again!";
        }
        if (attempts >= 3) {
            highlightCorrectAnswer(); 
            questionImage.style.display = 'block';
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
            messageBox.innerText = "Better luck next time!";
        }
        messageBox.className = "message-box incorrect";
        messageBox.style.display = 'block';
    }
}

// Highlight the correct answer
function highlightCorrectAnswer() {
    const correctAnswerIndex = 
questions[currentQuestionIndex].answers.findIndex(answer => answer.correct);
    const correctAnswerButton =
answerButtons.children[correctAnswerIndex].querySelector('input');
    correctAnswerButton.parentElement.classList.add('correct-answer');
}


// Submit the selected answer
submitButton.addEventListener('click', selectAnswer);

// Go to the next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Game Over! Your final score is ' + score);
        startGame();
    }
});

startGame();