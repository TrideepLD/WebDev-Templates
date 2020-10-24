// Add domEventListener
// basically what the script tag is listening for
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    // use hash for id for JS to recognize the ID
    const playerDisplay = document.querySelector('#player')

    let currentPlayer = 'Player 1'

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })

    // Path through an e for event
    // We need to find out exactly which square has been clicked
    function clickOutcome(e) {
        // find index of each square
        const squareArray = Array.from(squares)
        // Below helps us know which one was clicked
        const index = squareArray.indexOf(e.target)
        console.log(index);
        playerDisplay.innerHTML = currentPlayer

        // Next block of code allows us to do two things
        // We can change the player number to either be 1 or 2(player 1 always starts first)
        // And we can code the Boxes in.
        if(currentPlayer === 'Player 1') {
            squares[index].classList.add('player_1')
            currentPlayer = 'Player 2'
        } else {
            squares[index].classList.add('player_2')
            currentPlayer = 'Player 1'
        }
    }

})


