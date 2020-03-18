var letterSelected = 0
var playerActive = 1

var playerOne = {
    points: 0
}
var playerTwo = {
    points: 0
}


var player1D = document.getElementById('player1')
var player2D = document.getElementById('player2')

var scores1D = document.getElementById('scores1')
var scores2D = document.getElementById('scores2')


var letterSelectedD = document.getElementById('letter-selected')


function changePlayer(){
    playerActive = (playerActive == 1) ? 2 : 1
    if(playerActive == 1){
        player1D.classList.add('active');
        player2D.classList.remove('active');
    }else{
        player2D.classList.add('active');
        player1D.classList.remove('active');
    }
}

function selectLetter(event){
    letterSelected = Math.floor((Math.random() * 13) + 1)
    showLetter()
    updateScores()
    event = event || window.event
    if(event.preventDefault) event.preventDefault()
    if(event.returnValue) event.returnValue()
    return false
}


function showLetter(){
    if(letterSelected == 0){
        letterSelectedD.style.display = 'none'
    }else{
        var src = "assets/carts/" + letterSelected + ".png"
        letterSelectedD.setAttribute('src', src)
        letterSelectedD.style.display = 'block'
    }
}

function updateScores(){
    if(playerActive == 1){
        playerOne.points += letterSelected
    }else{
        playerTwo.points += letterSelected
    }

    if(playerOne.points >= 21 || playerTwo.points >= 21){
        finishGame()
    }

    scores1D.innerText = playerOne.points;
    scores2D.innerText = playerTwo.points;
}

function finishGame(){
    if(playerOne.points <= 21 && playerOne.points > playerTwo.points){
        swal('player 1 campeão', '', 'success')
    }else if(playerTwo.points <= 21 && playerTwo.points > playerOne.points){
        swal('player 2 campeão', '', 'success')
    }else if (playerOne.points > 21){
        swal('player 2 campeão', '', 'success')
    }else if (playerTwo.points > 21){
        swal('player 1 campeão', '', 'success')
    }else{
        swal('Empate', '', 'success')
    }
    setTimeout(resetGame, 1000)
}

function resetGame(){
    letterSelected = 0
    playerActive = 1

    playerOne = {
        points: 0
    }
    playerTwo = {
        points: 0
    }
    updateScores()
    showLetter()

}