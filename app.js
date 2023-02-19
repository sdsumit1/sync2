const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "Which of these is not a form of Spring Cloud library?",
    a: "Spring Commons",
    b: "Spring Compact",
    c: "Spring Cloud Context",
    d: "NOT",
    correct: "b",
},
{
    question: "Which of the libraries refers to a set of abstractions used for different implementations?",
    a: "Spring Cloud Commons",
    b: "Spring Cloud Context",
    c: "Spring Cloud Compact",
    d: "Spring Cloud Connect",
    correct: "a",
},
{
    question: "Which of the libraries provide utilities and special services?",
    a: "Spring Cloud Commons",
    b: "Spring Cloud Context",
    c: "Spring Cloud Compact",
    d: "Spring Cloud Connect",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "What is Spring Cloud Eureka about?",
    a: "It is a configuration application",
    b: "It is a coding template",
    c: "It is a discovery server",
    d: "It is a discovery server",
    correct: "d",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);