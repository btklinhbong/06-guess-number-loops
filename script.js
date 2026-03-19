document.getElementById('start-button').addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  // Track whether the player guessed correctly
  let guessedCorrectly = false;

  // Give the player exactly 5 attempts
  for (let attempts = 1; attempts <= 5; attempts = attempts + 1) {
    // Prompt the player to enter a guess
    let guess = prompt('Guess a number between 1 and 10:');

    // Convert the guess to a number
    guess = parseInt(guess);

    // Check if the guess is correct
    if (guess === secretNumber) {
      const message = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
      document.getElementById('message').textContent = message;
      guessedCorrectly = true;
      break;
    }

    // Give feedback if there are attempts left
    if (attempts < 5) {
      if (guess > secretNumber) {
        alert('Too high! Try again.');
      }

      if (guess < secretNumber) {
        alert('Too low! Try again.');
      }
    }
  }

  // If all attempts are used, show the game over message
  if (guessedCorrectly === false) {
    const message = `❌ Game over! The number was ${secretNumber}.`;
    document.getElementById('message').textContent = message;
  }
});