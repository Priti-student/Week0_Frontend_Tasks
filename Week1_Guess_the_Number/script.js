let secretNumber = Math.floor(Math.random() * 20) + 1;

  function checkGuess() {
    const userGuess = Number(document.getElementById("guess").value);
    const result = document.getElementById("result");

    if (userGuess < 1 || userGuess > 20 || isNaN(userGuess)) {
      result.textContent = "🚫 Please enter a number between 1 and 20.";
      return;
    }

    if (userGuess === secretNumber) {
      result.textContent = "🎉 Correct! You guessed it!";
    } else {
      const diff = Math.abs(secretNumber - userGuess);
      const closeness = Math.round(((20 - diff) / 19) * 100);

      if (userGuess < secretNumber) {
        result.textContent = `📈 Ooh.. its low! You are ${closeness}% close!`;
      } else {
        result.textContent = `📉 Ooh.. its high! You are ${closeness}% close!`;
      }
    }
  }
  function resetGame() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById("guess").value = '';
    document.getElementById("result").textContent = '';
  }
  