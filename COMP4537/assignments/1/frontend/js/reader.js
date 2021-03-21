initfromdbRead()

function initfromdbRead() {
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
                quoteTextArea.readOnly = true;
                let quoteAuthor = document.createElement('TEXTAREA');
                quoteAuthor.readOnly = true;
                let quoteTotal = document.createElement("div");


                quoteTotal.id = 'q' + b[i];
                quoteTextArea.id = 'qText' + b[i];
                quoteAuthor.id = 'qAuth' + b[i];
                quoteTextArea.value = b[i + 1];
                quoteAuthor.value = b[i + 2];

                quoteTextArea.cols = 35;
                quoteTextArea.rows = 5;
                quoteAuthor.cols = 35;
                quoteAuthor.rows = 5;
                
                quoteTotal.appendChild(quoteTextArea);
                quoteTotal.appendChild(quoteAuthor);
                quoteTotal.appendChild(document.createElement('br'));
                container.appendChild(quoteTotal);
            }
        }
    }
}