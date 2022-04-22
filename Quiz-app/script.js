const quizData=[
    {
        question:' CPU scheduling is the basis of __',
        a:'multiprogramming operating systems',
        b:'larger memory sized systems',
        c:'multiprocessor systems',
        d:'none of the mentioned',
        correct:'a'
    },
    {
        question:'What is the most used programming language in 2022',
        a:'java',
        b:'python',
        c:'c++',
        d:'javascript',
        correct:'b'
    },
    {
        question:'Compiler generates ___ file.',
        a:'Executable code',
        b:'Object code',
        c:'Assembly code',
        d:'None of above',
        correct:'b'
    },
    {
        question:'Which one of the following is not a real time operating system?',
        a:' RTLinux',
        b:'Palm OS',
        c:'QNX',
        d:'VxWorks',
        correct:'b'
    },
    {
        question:'What does OS X has?',
        a:'monolithic kernel with modules',
        b:'microkerne',
        c:'monolithic kernel',
        d:'hybrid kernel',
        correct:'d'
    }
];

const questionEl =  document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz= 0;
// let answer = undefined;
let score = 0;
loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected(){
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;
    answerEls.forEach((answerEl) =>{
        // console.log(answer.checked);
        if(answerEl.checked){
            answer =  answerEl.id;
        }
        
    });
    return answer;
}

submitBtn.addEventListener('click',()=>{
    answer = getSelected();
    console.log(answer);

    if(answer){
        if(answer=== quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
             console.log(score);
             alert('You finished! Score :'+score+'/'+quizData.length);
             currentQuiz = 0;
             loadQuiz();
             
        }
    }
});