
quiz = JSON.parse(localStorage.getItem('quiz'));
let next_num = 1;
for (let i = 0, length = quiz.length; i < length; i++) {
    initializeQuestionReadOnly(quiz[i]);
    next_num = parseInt(quiz[i].number) + 1;
}

document.getElementById('submit').onclick = submitQuiz;

function initializeQuestionReadOnly(question) {
    let q_num = question.number;
    let container = document.getElementById('container');

    let questionNumber = document.createElement('h4');
    questionNumber.textContent = 'Question ' + q_num;
    let questionTextArea = document.createElement('TEXTAREA');
    questionTextArea.id = 'qText' + q_num;
    questionTextArea.value = question.questionText;
    questionTextArea.readOnly = true;
    container.appendChild(questionNumber);
    container.appendChild(questionTextArea);
    container.appendChild(document.createElement('br'));

    let radioA = document.createElement('input');
    radioA.type = 'radio';
    radioA.value = 'q' + q_num + 'a';
    radioA.name = 'q' + q_num;
    let descriptionA = document.createElement('TEXTAREA');
    descriptionA.id = 'q' + q_num + 'a';
    descriptionA.value = question.answerAText;
    descriptionA.readOnly = true;
    container.appendChild(radioA);
    container.appendChild(descriptionA);
    container.appendChild(document.createElement('br'));

    let radioB = document.createElement('input');
    radioB.type = 'radio';
    radioB.value = 'q' + q_num + 'b';
    radioB.name = 'q' + q_num;
    let descriptionB = document.createElement('TEXTAREA');
    descriptionB.id = 'q' + q_num + 'b';
    descriptionB.value = question.answerBText;
    descriptionB.readOnly = true;
    container.appendChild(radioB);
    container.appendChild(descriptionB);
    container.appendChild(document.createElement('br'));

    let radioC = document.createElement('input');
    radioC.type = 'radio';
    radioC.value = 'q' + q_num + 'c';
    radioC.name = 'q' + q_num;
    let descriptionC = document.createElement('TEXTAREA');
    descriptionC.id = 'q' + q_num + 'c';
    descriptionC.value = question.answerCText;
    descriptionC.readOnly = true;
    container.appendChild(radioC);
    container.appendChild(descriptionC);
    container.appendChild(document.createElement('br'));

    let radioD = document.createElement('input');
    radioD.type = 'radio';
    radioD.value = 'q' + q_num + 'd';
    radioD.name = 'q' + q_num;
    if (radioD.value === question.answerVal) {
        radioD.checked = true
    }
    let descriptionD = document.createElement('TEXTAREA');
    descriptionD.id = 'q' + q_num + 'd';
    descriptionD.value = question.answerDText;
    descriptionD.readOnly = true;
    container.appendChild(radioD);
    container.appendChild(descriptionD);
    container.appendChild(document.createElement('br'));
}

function submitQuiz(){
    let correct = 0;
    let numQuestion = localStorage.getItem('numQuestion');
    for (let i = 0, length = quiz.length; i < length; i++) {
        let questionName = 'q' + quiz[i].number;
        let radios = document.getElementsByName(questionName);
        for (let j = 0, radioLength = radios.length; j < radioLength; j++) {
            if (radios[j].checked) {

                if(radios[j].value === quiz[i].answerVal) {
                    correct += 1;
                }
                break;
            }
        }
    }
    let correctPercent = correct/numQuestion * 100;
    alert('Percent correct: ' + correctPercent + '%');
}