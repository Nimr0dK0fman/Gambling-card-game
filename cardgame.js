function drawRandomCard() {
    var clubs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    var diamonds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    var hearts = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    var spades = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  
    const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomSuit = suits[randomSuitIndex];
  
    let selectedArray;
    switch (randomSuit) {
      case 'Clubs':
        selectedArray = clubs;
        break;
      case 'Diamonds':
        selectedArray = diamonds;
        break;
      case 'Hearts':
        selectedArray = hearts;
        break;
      case 'Spades':
        selectedArray = spades;
        break;
      default:
        selectedArray = [];
        break;
    }
  
    const randomCardIndex = Math.floor(Math.random() * selectedArray.length);
    const randomCard = selectedArray[randomCardIndex];
  
    const output = document.getElementById('output');
    output.textContent = randomCard + ' of ' + randomSuit;
  }
  
  const shuffleButton = document.getElementById('shuffleButton');
  shuffleButton.addEventListener('click', drawRandomCard);

  