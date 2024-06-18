function getComputerChoice() {
    const choices = ['камень', 'ножницы', 'бумага'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    switch (true) {
        case playerSelection === computerSelection:
          return [0, "Ничья! Оба выбрали " + playerSelection];
        case playerSelection === 'камень' && computerSelection === 'ножницы':
        case playerSelection === 'ножницы' && computerSelection === 'бумага':
        case playerSelection === 'бумага' && computerSelection === 'камень':
          return [1, "Вы выиграли! " + playerSelection + " побеждает " + computerSelection];
        default:
          return [-1, "Вы проиграли! " + computerSelection + " побеждает " + playerSelection];
      }
    
}
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Введите свой выбор (Камень, Ножницы, Бумага):");
      let computerSelection = getComputerChoice();
      let [roundResult, roundMessage] = playRound(playerSelection, computerSelection);
      console.log(roundMessage);
  
      if (roundResult === 1) {
        playerScore++;
      } else if (roundResult === -1) {
        computerScore++;
      }
    }
    console.log("Итоговый счет:");
    console.log("Игрок: " + playerScore);
    console.log("Компьютер: " + computerScore);
  
    
    if (playerScore > computerScore) {
        console.log("Вы победили!");
    } else if (computerScore > playerScore) {
        console.log("Вы проиграли!");
    } else {
        console.log("Ничья!");
    }

}



game();