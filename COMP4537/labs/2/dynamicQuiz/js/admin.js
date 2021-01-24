// initialize admin page
let quiz = [];
if (!localStorage.getItem('quiz')) {
    localStorage.setItem('numQuestion', '1');
    localStorage.setItem('quiz', '[{}]');
    createNewQuestion(1);
}
else {
    quiz = JSON.parse(localStorage.getItem('quiz'));
    let next_num = 1;
    for (let i = 0, length = quiz.length; i < length; i++) {
        initializeQuestion(quiz[i]);
        next_num = parseInt(quiz[i].number) + 1;
    }
}

document.getElementById('add').onclick = saveQuestion;
document.getElementById('save').onclick = saveLastQuestion;
document.getElementById('delete').onclick = deleteLastQuestion;
