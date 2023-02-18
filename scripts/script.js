// Getting the grid


// Creating the cells

var game_finished = false
$(document).ready(function () {
    // Initialize the grid element with the Draggable plugin
    var grid = $('.grid');

    drag(grid);
    drawGrid(grid);
    reset();

    // Getting the game state


    var gameState = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]



    // After clicking on a cell, I change Its text to X


    $('.cell').click(function () {

        // Getting the id of the cell clicked
        var id = $(this).attr('id')
        var coords_list = id.split("-")
        let x = parseInt(coords_list[1])
        let y = parseInt(coords_list[2]);

        if ($(this).text() === "" && !game_finished) {
            gridfull(gameState)
            gameState[x][y] = 1;
            // Change the text
            $(this).text("X")
            checkwinX(gameState, x, y)
            botChoice(gameState)
            // turnX = false
            console.log(game_finished);
        }

    })
})

// Drawing the grid cell function

function drawGrid(grid) {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            let cell = $('<div>').addClass('cell').attr('id', 'cell-' + x + '-' + y);
            grid.append(cell);
        }

    }
}

// Dragging function
function drag(grid) {
    grid.draggable();

    // Set up the click event handler for the drag button
    var canDrag = false;
    var dragBtn = $('.btn-primary');
    dragBtn.click(function () {
        canDrag = !canDrag;
        if (canDrag) {
            // Enable dragging on the grid element
            grid.draggable('enable');
        } else {
            // Disable dragging on the grid element
            grid.draggable('disable');
        }
    });
}

// Reset the game function
function reset() {
    // Reset the game
    var resetBtn = $('.btn-secondary');
    resetBtn.click(function () {
        location.reload()
    })
}

// Bot choice
function botChoice(gameState) {
    let randX = getRandomInt();
    let randY = getRandomInt()
    chosen_id = "cell-" + randX + "-" + randY
    if (gameState[randX][randY] === null && !game_finished) {
        gameState[randX][randY] = 0
        $("#" + chosen_id).text("O")
        console.log(gameState);
        checkwinO(gameState, randX, randY)
    }
    else {
        if (!gridfull(gameState))
            botChoice(gameState)
    }
}


function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function gridfull(gameState) {
    let filledCases = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameState[i][j] != null) {
                filledCases++;
            }
        }
    }
    if (filledCases === 9) {
        alert("It's a DRRRRRRRRRRRAW")
        location.reload()
        return true
    } else { return false }
}

function checkwinX(gameState, x, y) {
    // For the X player

    // Checking Its correspondant row
    pointx = 0;
    for (let i = 0; i < 3; i++) {
        if (gameState[x][i] === 1) {
            pointx++;
        }
    }
    console.log(pointx);
    if (pointx === 3) {
        alert("X won")
        game_finished = true
        location.reload()
    }
    else { pointx = 0 }

    // Checking Its correspondant column
    for (let i = 0; i < 3; i++) {
        if (gameState[i][y] === 1) {
            pointx++;
        }
    }
    if (pointx === 3) {
        alert("X won")
        game_finished = true
        location.reload()
    }
    else { pointx = 0 }


    // Checking diagonally 1

    for (let i = 0; i < 3; i++) {
        if (gameState[i][i] === 1) {
            pointx++;
        }
    }
    if (pointx === 3) {
        alert("X won")
        game_finished = true
        location.reload()
    }
    else { pointx = 0 }

    // Checking diagonally 2

    for (let i = 0; i < 3; i++) {
        if (gameState[2 - i][i] === 1) {
            pointx++;
        }
    }
    if (pointx === 3) {
        alert("X won")
        game_finished = true
        location.reload()
    }
    else { pointx = 0 }
}

function checkwinO(gameState, x, y) {
    // For the O player

    // Checking Its correspondant row
    pointy = 0;
    for (let i = 0; i < 3; i++) {
        if (gameState[x][i] === 0) {
            pointy++;
        }
    }
    if (pointy === 3) {
        alert("O won")
        game_finished = true
        location.reload()
    }
    else { pointy = 0 }

    // Checking Its correspondant column
    for (let i = 0; i < 3; i++) {
        if (gameState[i][y] === 0) {
            pointy++;
        }
    }
    if (pointy === 3) {
        alert("O won")
        game_finished = true
        location.reload()
    }
    else { pointy = 0 }

    // Checking diagonally 1

    for (let i = 0; i < 3; i++) {
        if (gameState[i][i] === 0) {
            pointy++;
        }
    }
    if (pointy === 3) {
        alert("O won")
        game_finished = true
        location.reload()
    }
    else { pointy = 0 }

    // Checking diagonally 2

    for (let i = 0; i < 3; i++) {
        if (gameState[2 - i][i] === 0) {
            pointy++;
        }
    }
    if (pointy === 3) {
        alert("O won")
        game_finished = true
        location.reload()
    }
    else { pointy = 0 }
}