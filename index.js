const score = document.querySelector(".score")
const result = document.querySelector(".result")
const scoreBtn = document.querySelector(".score-btn")

console.log(score)
console.log(result)
console.log(scoreBtn)

let scoreValue = 0
const winScore = 5

scoreBtn.addEventListener("click", function () {
    if (scoreValue >=winScore) {
        return
    }
    
    scoreValue++;
    score.textContent = scoreValue

    if(scoreValue === winScore) {
        result.textContent = "winner"
    }
})
