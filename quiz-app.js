const quiz = [
    {
        question: "Who is known as the God of Cricket?",
        ans1text: "MS Dhoni",
        ans2text: "Virat Kohli",
        ans3text: "Kapil Dev",
        ans4text: "Sachin Tendulkar",
        answer: "Sachin Tendulkar",
    },
    {
        question: "Who is the highest individual scorer in ODI history?",
        ans1text: "Rohit Sharma",
        ans2text: "Virat Kohli",
        ans3text: "Ms Dhoni",
        ans4text: "Sachin Tendulkar",
        answer: "Rohit Sharma",
    },{
        question: "Who is the Player of the Tournament of 2024 Mens T20 World cup ?",
        ans1text: "Jasprit Bumrah",
        ans2text: "Rohit Sharma",
        ans3text: "Babar Azam",
        ans4text: "Travis Head",
        answer: "Jasprit Bumrah",
    },
    {
        question: "Which team does Virat Kohli play for in the IPL?",
        ans1text: "CSK",
        ans2text: "RCB",
        ans3text: "MI",
        ans4text: "KKR",
        answer: "RCB",

    }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});
