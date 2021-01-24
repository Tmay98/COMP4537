function QuizQuestion(number, answerVal, questionText, answerAText, answerBText, answerCText, answerDText) {
    this.number = number;
    this.answerVal = answerVal;
    this.questionText = questionText;
    this.answerAText = answerAText;
    this.answerBText = answerBText;
    this.answerCText = answerCText;
    this.answerDText = answerDText;
}

function initializeQuestion(question) {
    let q_num = question.number;
    let container = document.getElementById('container');

    let questionNumber = document.createElement('h4');
    questionNumber.textContent = 'Question ' + q_num;
    let questionTextArea = document.createElement('TEXTAREA');
    questionTextArea.id = 'qText' + q_num;
    questionTextArea.value = question.questionText;
    container.appendChild(questionNumber);
    container.appendChild(questionTextArea);
    container.appendChild(document.createElement('br'));

    let radioA = document.createElement('input');
    radioA.type = 'radio';
    radioA.value = 'q' + q_num + 'a';
    radioA.name = 'q' + q_num;
    if (radioA.value === question.answerVal) {
        radioA.checked = true
    }
    let descriptionA = document.createElement('TEXTAREA');
    descriptionA.id = 'q' + q_num + 'a';
    descriptionA.value = question.answerAText;
    container.appendChild(radioA);
    container.appendChild(descriptionA);
    container.appendChild(document.createElement('br'));

    let radioB = document.createElement('input');
    radioB.type = 'radio';
    radioB.value = 'q' + q_num + 'b';
    radioB.name = 'q' + q_num;
    if (radioB.value === question.answerVal) {
        radioB.checked = true
    }
    let descriptionB = document.createElement('TEXTAREA');
    descriptionB.id = 'q' + q_num + 'b';
    descriptionB.value = question.answerBText;
    container.appendChild(radioB);
    container.appendChild(descriptionB);
    container.appendChild(document.createElement('br'));

    let radioC = document.createElement('input');
    radioC.type = 'radio';
    radioC.value = 'q' + q_num + 'c';
    radioC.name = 'q' + q_num;
    if (radioC.value === question.answerVal) {
        radioC.checked = true
    }
    let descriptionC = document.createElement('TEXTAREA');
    descriptionC.id = 'q' + q_num + 'c';
    descriptionC.value = question.answerCText;
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
    container.appendChild(radioD);
    container.appendChild(descriptionD);
    container.appendChild(document.createElement('br'));
}

function saveQuestion() {
    let q_num = localStorage.getItem("numQuestion");
    let radios = document.getElementsByName('q' + q_num);

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            quiz[quiz.length - 1] = new QuizQuestion(q_num,
                radios[i].value,
                document.getElementById('qText' + q_num).value,
                document.getElementById(radios[0].value).value,
                document.getElementById(radios[1].value).value,
                document.getElementById(radios[2].value).value,
                document.getElementById(radios[3].value).value);

            // create new question now
            q_num = parseInt(q_num) + 1;
            q_num = q_num.toString();
            localStorage.setItem("numQuestion", q_num);
            createNewQuestion(q_num);

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}


function saveLastQuestion() {
    let q_num = localStorage.getItem("numQuestion");
    let radios = document.getElementsByName('q' + q_num);

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            quiz[quiz.length - 1] = new QuizQuestion(q_num,
                radios[i].value,
                document.getElementById('qText' + q_num).value,
                document.getElementById(radios[0].value).value,
                document.getElementById(radios[1].value).value,
                document.getElementById(radios[2].value).value,
                document.getElementById(radios[3].value).value);
            localStorage.setItem("numQuestion", q_num);
            localStorage.setItem('quiz', JSON.stringify(quiz));
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

function createNewQuestion(q_num) {
    quiz.push(new QuizQuestion(q_num,
        '?',
        '',
        '',
        '',
        '',
        ''));
    // update quiz json localstorage
    localStorage.setItem('quiz', JSON.stringify(quiz));

    let container = document.getElementById('container');

    let questionNumber = document.createElement('h4');
    questionNumber.textContent = 'Question ' + q_num;
    let questionTextArea = document.createElement('TEXTAREA');
    questionTextArea.id = 'qText' + q_num;
    container.appendChild(questionNumber);
    container.appendChild(questionTextArea);
    container.appendChild(document.createElement('br'));

    let radioA = document.createElement('input');
    radioA.type = 'radio';
    radioA.value = 'q' + q_num + 'a';
    radioA.name = 'q' + q_num;
    let descriptionA = document.createElement('TEXTAREA');
    descriptionA.id = 'q' + q_num + 'a';
    container.appendChild(radioA);
    container.appendChild(descriptionA);
    container.appendChild(document.createElement('br'));

    let radioB = document.createElement('input');
    radioB.type = 'radio';
    radioB.value = 'q' + q_num + 'b';
    radioB.name = 'q' + q_num;
    let descriptionB = document.createElement('TEXTAREA');
    descriptionB.id = 'q' + q_num + 'b';
    container.appendChild(radioB);
    container.appendChild(descriptionB);
    container.appendChild(document.createElement('br'));

    let radioC = document.createElement('input');
    radioC.type = 'radio';
    radioC.value = 'q' + q_num + 'c';
    radioC.name = 'q' + q_num;
    let descriptionC = document.createElement('TEXTAREA');
    descriptionC.id = 'q' + q_num + 'c';
    container.appendChild(radioC);
    container.appendChild(descriptionC);
    container.appendChild(document.createElement('br'));

    let radioD = document.createElement('input');
    radioD.type = 'radio';
    radioD.value = 'q' + q_num + 'd';
    radioD.name = 'q' + q_num;
    let descriptionD = document.createElement('TEXTAREA');
    descriptionD.id = 'q' + q_num + 'd';
    container.appendChild(radioD);
    container.appendChild(descriptionD);
    container.appendChild(document.createElement('br'));
}

function deleteLastQuestion() {
    if (quiz.length > 1){
        quiz.pop();
        let num = localStorage.getItem('numQuestion');
        num = parseInt(num) - 1;
        localStorage.setItem('numQuestion', num.toString());
        localStorage.setItem('quiz', JSON.stringify(quiz));
        location.reload();
    }
}