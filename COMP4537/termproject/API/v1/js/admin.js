// const requestCounter = {
//     "/API/v1/quiz": {
//         POST: 0,
//         PUT: 0,
//         GET: 0,
//         DELETE: 0
//     },
// };
const api_key = "?apikey=a56d4c63-b6c6-4d4a-b013-3e501f8dba5a";

function updateCounterUI(counterResponse) {
    document.getElementById("quizGet").innerHTML = counterResponse["/API/v1/quiz"].GET;
    document.getElementById("quizPost").innerHTML = counterResponse["/API/v1/quiz"].POST;
    document.getElementById("quizPut").innerHTML = counterResponse["/API/v1/quiz"].PUT;
    document.getElementById("quizDelete").innerHTML = counterResponse["/API/v1/quiz"].DELETE;

}

function getCounterFromDB() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.jsshin.com/API/V1/counter" + api_key);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            updateCounterUI(response)
        }
    };
}

getCounterFromDB();
