document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'eifelTower',
            img: 'images/honhonhon.jpg'
        },
        {
            name: 'eifelTower',
            img: 'images/honhonhon.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'Donkey',
            img: 'images/DONKEY!!.jpg'
        },
        {
            name: 'Donkey',
            img: 'images/DONKEY!!.jpg'
        },
        {
            name: 'Mountain',
            img: 'images/Mountain.jpg'
        },
        {
            name: 'Mountain',
            img: 'images/Mountain.jpg'
        },
        {
            name: 'BlackHole',
            img: 'images/OHMYGODITsABLACKHOLE.jpg'
        },
        {
            name: 'BlackHole',
            img: 'images/OHMYGODITsABLACKHOLE.jpg'
        },
        {
            name: 'corgi',
            img: 'images/corgi.png'
        },
        {
            name: 'corgi',
            img: 'images/corgi.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()

    // cardArray.sort(() => 0.5 - Math.random())

    // const grid = document.querySelector('.grid')
    // const resultDisplay = document.querySelector('#result')
    // var cardsChosen = []
    // var cardsChosenId = []
    // var cardsWon = []

    // //create the board
    // function createBoard() {
    //     // Loop over the card array. And for each card we will create an image element
    //     for (let i = 0; i < cardArray.length; i++) {
    //         var card = document.createElement('img')
    //         card.setAttribute('src', 'images/blank.jpg') //set the back side of the card without the image
    //         // a data Id and we loop over them to give them an id that goes from 0 - 11 aswe have 12 cards in total
    //         card.setAttribute('data-id', i)
    //         // Down below is where we want to do the flipping when the card is clicked
    //         card.addEventListener('click', flipcard)
    //         // All the cards are techincally img elements with different IDs
    //         grid.appendChild(card)
    //     }
    // }

    // // check for matches
    // function checkForMatch() {
    //     var cards = document.querySelectorAll('img')
    //     const optionOneId = cardsChosenId[0]
    //     const optionTwoId = cardsChosenId[2]
    //     if (cardsChosen[0] === cardsChosen[1]) {
    //         alert('You found a match')
    //         cards[optionOneId].setAttribute('src', 'images/white.jpg')
    //         cards[optionTwoId].setAttribute('src', 'images/white.jpg')
    //         // create Empty array cards cards Won and push the chosen cards into there
    //         cardsWon.push(cardsChosen)
    //     }
    //     else {
    //         cards[optionOneId].setAttribute('src', 'images/blank.jpg')
    //         cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
    //         alert('Sorry, try again')
    //     }

    //     // Clear the cache
    //     cardsChosen = []
    //     cardsChosenId = []
    //     resultDisplay.textContent = cardsWon.length
    //     if (cardsWon.length === cardArray.length/2) {
    //         resultDisplay.textContent = "Congratulations! You've found them all!"
    //     }
    // }

    // // we gotta flip the cards right?
    // function flipCard() {
    //     var cardId = this.getAttribute('data-id')
    //     // using push we push the cards from the card array based on the card ID
    //     cardsChosen.push(cardArray[cardId].name)
    //     cardChosenId.push(cardId)
    //     // let us set an image to that square based on the card ID
    //     this.setAttribute('src', cardArray[cardId].img)
    //     if (cardsChosen.length == 2) {
    //         setTimeout(checkForMatch, 500)
    //     }
    // }

    // createBoard()

})