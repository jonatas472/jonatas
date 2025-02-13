const $startGameBUtton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-containers")
const $questionText = document.querySelector(".questions")
const $nextQuestionButton = document.querySelector(".next-question")


$startGameBUtton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestions) 

let currentQuestionIndex = 0;
let totalCorrect = 0


function startGame(){
    $startGameBUtton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestions()
}


function displayNextQuestions(){

    resetState()

    if(questions.length === currentQuestionIndex){
        return finishGame()
    }





        $questionText.textContent = questions[currentQuestionIndex].question
        questions[currentQuestionIndex].answers.forEach(answers => {
            const newAswnser = document.createElement("button")
            newAswnser.classList.add("button", "answers")
            newAswnser.textContent = answers.text; 
            if (answers.correct){
                newAswnser.dataset.correct = answers.correct
            }
            $answersContainer.appendChild(newAswnser)

            newAswnser.addEventListener("click", selectAnswer)
})
}

function resetState(){
    while($answersContainer.firstChild){
        $answersContainer.removeChild($answersContainer.firstChild)
    }

document.body.removeAttribute("class")
$nextQuestionButton.classList.add("hide")

}

 function selectAnswer(event){
    const answerClicked = event.target

    if (answerClicked.dataset.correct){
        document.body.classList.add("correct")
        totalCorrect++
    }
    else{
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answers").forEach(button =>{
        button.disabled = true;
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
 }


function finishGame(){
const totalQuestion = questions.length
const performance = Math.floor(totalCorrect *100 / totalQuestion)

let message = ""

switch(true){
    case(performance >= 90):
    message = "Perfeito! (lolzeiro.)"
    break
    case(performance >= 70):
    message = "Sabe da maioria! (lolzeiro.)"
    break
    case(performance >= 90):
    message = "Conhece de canto"
    break
    default: 
    message = "Voê não possui conhecimento.(se salvou)"
}
$questionsContainer.innerHTML = 
`
<p>
Você acertou ${totalCorrect} de ${totalQuestion} questões!
<span>Resultado: ${message}</span>
</p>
<button onclick=window.location.reload() class="button" >Refazer teste</button>
`

}













const questions = [
    {
        question: "A Riot(Empresa Gamer) fez uma série sobre uma das regiões mais famosa do jogo League Of Legends, qual o nome das regões?",
        answers: [
            { text: "Noxus", correct: false },
            { text: "Zaun e Piltover", correct: true },
            { text: "Frejord", correct: false },
            { text: "Demacia", correct: false },
        ],
    },
    {
        question: "A série retrata diversos personagens, pórem, a história é focada em duas irmãs, quais são seus respectivos nomes?",
        answers: [
            { text: "Caitlyn e Vi", correct: false },
            { text: "Jinx e Caitlyn", correct: false },
            { text: "Jinx e Sevika", correct: false },
            { text: "Jinx e Vi", correct: true },
        ],
    },
    {
        question: "Noxus é uma das regiões mais brutais de Runeterra, quais personagens de Noxus apareceram em Arcane?",
        answers: [
            { text: "Ambessa e Silco", correct: false },
            { text: "Heimerdinger e Ekko", correct: false },
            { text: "Mel e Viktor", correct: false },
            { text: "Mel e Ambessa", correct: true },
        ],
    },
    {
        question: "Qual foi o único casal que conseguiu permanecer vivo e juntos no fim de Arcane?",
        answers: [
            { text: "Jinx e Ekko", correct: false },
            { text: "Caitylin e Vi", correct: true },
        ],
    },
    {
        question: "Qual o a nome do artefato mágico que Jayce criou e consequentemente causou uma catastrofe no futuro?",
        answers: [
            { text: "Cristal Hextec", correct: true },
            { text: "Z-Drive", correct: false },
            { text: "Armas Hextec", correct: false },
            { text: "Hexportais", correct: false },
        ],
    },
    {
        question: "Quem pegou o Vander e o transformou num monstro??",
        answers: [
            { text: "Heimerdingger", correct: false },
            { text: "Singed", correct: true },
            { text: "Ambessa", correct: false },
            { text: "Viktor", correct: false },
        ],
    },
    {
        question: "Qual o nome da droga que Singed criou e deixou os habitantes de Zaun viciados?",
        answers: [
            { text: "Cristalina", correct: false },
            { text: "Arcano", correct: false },
            { text: "Cristal Hextec", correct: false },
            { text: "Sentila", correct: true },
        ],
    }
]