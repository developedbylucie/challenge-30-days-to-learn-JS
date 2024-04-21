const questions = [
    {
        question: "Quel langage permet de faire la structure d'un site web ?",
        answers: [
            {text: "CSS", correct: false},
            {text: "HTML", correct: true},
            {text: "JavaScript", correct: false},
            {text: "PHP", correct: false}
        ]
    },
    {
        question: "Lequel est un langage de programmation ?",
        answers: [
            {text: "CSS", correct: false},
            {text: "HTML", correct: false},
            {text: "SQL", correct: false},
            {text: "PHP", correct: true}
        ]
    },
    {
        question: "Quel langage permet de faire le style d'un site web ?",
        answers: [
            {text: "CSS", correct: true},
            {text: "HTML", correct: false},
            {text: "SQL", correct: false},
            {text: "PHP", correct: false}
        ]
    },
    {
        question: "Quel langage permet les interactions avec l'utilisateur dans un site web ?",
        answers: [
            {text: "CSS", correct: false},
            {text: "HTML", correct: false},
            {text: "JavaScript", correct: true},
            {text: "PHP", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Suivant";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        // add element in button
        button.innerHTML = answer.text;
        // give class to button
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            score++;
        }
        // prevent clicking on other buttons
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Votre score est de ${score} sur ${question.length} !`;
    nextButton.innerHTML = "Jouer encore";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();