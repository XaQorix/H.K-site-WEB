let data = JSON.parse(localStorage.getItem("score_hk"))
if(!data) {
    data = {
        score: 0
    }
}

const div = document.getElementById("nombre")
let clickamount = data.score;

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
