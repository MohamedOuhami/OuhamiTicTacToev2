$(document).ready(function () {
    var gameState = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    let randX = getRandomInt()
    let randY = getRandomInt()

    gameState[randX][randY] = 0;
    console.log(gameState);


})

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}
