window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;
  let gameStarted = false;

  document.addEventListener("touchstart", startGameOnTouch);

  function startGameOnTouch(event) {
    if (!gameStarted) {
      startGame();
      gameStarted = true;
      document.removeEventListener("touchstart", startGameOnTouch);
    }
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    // JS, in the current tab, is going to refresh (reload) the page.
    location.reload();
  });

  function startGame() {
    //console.log("start game");
    game = new Game();
    game.start();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeys = [
      "ArrowLeft",
      "ArrowRight",
    ]

    if (possibleKeys.includes(key)) {
      event.preventDefault();

      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -10;
            break;
          case "ArrowRight":
            game.player.directionX = 10;
        }
      }
    }

  }

  function handleKeyup(event) {
    const key = event.key;
    const possibleKeys = [
      "ArrowLeft",
      "ArrowRight",
    ]

    if (possibleKeys.includes(key)) {
      event.preventDefault();

      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = 0;
            break;
          case "ArrowUp":
            game.player.directionY = 0;
            break;
          case "ArrowRight":
            game.player.directionX = 0;
          case "ArrowDown":
            game.player.directionY = 0;
        }
      }
    }

  }

  function handleTouchMove(event) {
    if (gameStarted) {
      const touchX = event.touches[0].clientX;
      const screenWidth = window.innerWidth;

      if (touchX < screenWidth / 3) {
        // Left third of the screen
        game.player.directionX = -6.5;
        game.player.directionY = -4;
      } else if (touchX < (2 * screenWidth) / 3) {
        // Middle third of the screen
        game.player.directionY = -10;
      } else {
        // Right third of the screen
        game.player.directionX = 6.5;
        game.player.directionY = -4;
      }
    }
    if (game && game.gameIsOver) {
      location.reload();
    }
  }

  function handleTouchEnd() {
    if (game) {
      setTimeout(() => {
        game.player.directionX = 0;
      }, 200);
    }
  }

  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", handleTouchEnd);

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);

};
