let data = JSON.parse(localStorage.getItem("score_hk"))
const div = document.getElementById("nombre")
let clickamount = data.score;


if(!data) {clickamount = 0}

div.textContent = clickamount

function save() {
    const json = {
        score: clickamount
    }
    localStorage.setItem("score_hk", JSON.stringify(json))
}

function bonjour() {
    clickamount++
    div.textContent = clickamount
    save()
}
