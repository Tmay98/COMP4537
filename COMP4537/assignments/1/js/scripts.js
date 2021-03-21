let quoteCount = 0;
let quoteCurr = 0;

function createNewQuote() {
    quoteCount++;
    let curr = quoteCount;
    let container = document.getElementById('container');
    let quoteTextArea = document.createElement('TEXTAREA');
    let quoteAuthor = document.createElement('TEXTAREA');
    let quoteTotal = document.createElement("div");

    let quoteSaveButton = document.createElement("BUTTON");
    quoteSaveButton.innerText = "update in DB";
    quoteSaveButton.onclick = function() {
        quoteCurr = curr;
        saveQuote()
    };

    let quoteDeleteButton = document.createElement("BUTTON");
    quoteDeleteButton.innerText = "delete";
    quoteDeleteButton.onclick = function() {
        quoteCurr = curr;
        deleteQuote()
    };

    quoteTotal.id = 'q' + quoteCount;
    quoteTextArea.id = 'qText' + quoteCount;
    quoteAuthor.id = 'qAuth' + quoteCount;

    quoteTotal.appendChild(quoteTextArea);
    quoteTotal.appendChild(quoteAuthor);
    quoteTotal.appendChild(quoteSaveButton);
    quoteTotal.appendChild(quoteDeleteButton);
    quoteTotal.appendChild(document.createElement('br'));
    container.appendChild(quoteTotal);

}

function deleteQuote() {
    const xhttp = new XMLHttpRequest();
    const id = quoteCurr;
    console.log(id);
    xhttp.open("GET", "https://tommy-delete.herokuapp.com/?index=" + id, true);
    xhttp.send();
    let el = document.getElementById("q" + id);
    el.parentNode.removeChild(el);
    quoteCount--
}

function saveQuote() {
    const xhttp = new XMLHttpRequest();
    const id = quoteCurr;
    const name = document.getElementById('qText' + id.toString()).value;
    const score = document.getElementById('qAuth' + id.toString()).value;
    console.log(id);
    xhttp.open("GET", "https://tommy-write.herokuapp.com/?index=" + id + "&quoteText=" + name + "&author=" + score, true);
    xhttp.send();
}

function initfromdb() {
    const xhttp = new XMLHttpRequest();
    let b = [];
    xhttp.open("GET", "https://tommy-read.herokuapp.com/", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let a = this.responseText;
            b = JSON.parse(a);
            for (let i = 0; i < b.length; i += 3) {
                quoteCount++;
                let curr = b[i];
                let container = document.getElementById('container');
                let quoteTextArea = document.createElement('TEXTAREA');
                let quoteAuthor = document.createElement('TEXTAREA');
                let quoteTotal = document.createElement("div");

                let quoteButton = document.createElement("BUTTON");
                quoteButton.innerText = "update in DB";
                quoteButton.onclick = function () {
                    quoteCurr = curr;
                    saveQuote()
                };

                let quoteDeleteButton = document.createElement("BUTTON");
                quoteDeleteButton.innerText = "delete";
                quoteDeleteButton.onclick = function() {
                    quoteCurr = curr;
                    deleteQuote()

                };

                quoteTotal.id = 'q' + b[i];
                quoteTextArea.id = 'qText' + b[i];
                quoteAuthor.id = 'qAuth' + b[i];
                quoteTextArea.value = b[i + 1];
                quoteAuthor.value = b[i + 2];

                quoteTotal.appendChild(quoteTextArea);
                quoteTotal.appendChild(quoteAuthor);
                quoteTotal.appendChild(quoteButton);
                quoteTotal.appendChild(quoteDeleteButton);
                quoteTotal.appendChild(document.createElement('br'));
                container.appendChild(quoteTotal);
            }
        }
    }
}


// "https://tommy-write.herokuapp.com/?name="


