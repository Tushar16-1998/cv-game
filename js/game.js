class Game {
    // code to be added
    constructor() {

        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");


        this.player = new Player(
            this.gameScreen,
            200,
            900,
            70,
            100,
            "./images/player.png");



        // Style for the board game.

        this.height = 600;
        this.width = 500;

        // Obstacles

        this.obstacles = []; //HTML
        this.obstacles2 = []; // CSS
        this.obstacles3 = []; // BUG
        this.obstacles4 = []; // JS
        this.obstacles5 = []; // React
        this.obstacles6 = []; // MongoDB
        this.obstacles7 = []; // mongoose
        this.obstacles8 = []; //nodejs
        this.obstacles9 = []; // Python
        this.obstacles10 = []; // tailwind
        this.obstacles11 = []; // chakra
        this.obstacles12 = []; // figma

        // Lives 
        this.score = 0 ; //
        this.lives = 10 ;

        //Variable to check if im in the process of creating an obstacles.
        this.isPushingObstacle = false;
        this.isPushingObstacle2 = false;
        this.isPushingObstacle3 = false;
        this.isPushingObstacle4 = false;
        this.isPushingObstacle5 = false;
        this.isPushingObstacle6 = false;
        this.isPushingObstacle7 = false;
        this.isPushingObstacle8 = false;
        this.isPushingObstacle9 = false;
        this.isPushingObstacle10 = false;
        this.isPushingObstacle11 = false;
        this.isPushingObstacle12 = false;


        //VAriable to check if the game is over

        this.gameIsOver = false;

        this.soundtrack = null;

        this.isStarted = false;

        this.timerInterval = null;

        this.timeLeft = 30 ;

    }

    start() {
        // Sets the height and width of the game screen.||||||||||

        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        // Hides the start screen.||||||||||||||||||||||||||||||||

        this.startScreen.style.display = "none";

        // Shows the game screen.|||||||||||||||||||||||||||||||||

        this.gameScreen.style.display = "block";

        this.soundtrack = document.getElementById("soundtrack");
        this.soundtrack.play() ;

//----------- Timer ------------//

        this.timerInterval = setInterval(() => {
            this.timeLeft -= 1 ;
            document.getElementById("timeRemaining").innerText = `Remaining time: ${this.timeLeft}`;
            
            if (this.timeLeft <= 0) {
                clearInterval() ;
                this.endGame();   
            }
        }, 1000)

        // Starts the game loop 

        this.gameLoop();
    }

    gameLoop() {
        if (this.gameIsOver) {
            return;
        }

        this.update();

        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {

        let lives = document.getElementById("lives");

        /* Every Frame of the game, i want to check if the car is moving */
        this.player.move();

        //--------------------- BUG -------------------------//

        for (let i = 0; i < this.obstacles3.length; i++) {
            const obstacle3 = this.obstacles3[i];
            obstacle3.move(this.player);


            if (this.player.didCollode(obstacle3)) {
                obstacle3.element.remove();

                this.obstacles3.splice(i, 1);

                this.lives--;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'No Thats a Pain in ASS';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '300px'; // Adjust as needed
                htmlText.style.left = '50%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '40px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                setTimeout(() => {
                    htmlText.remove();
                }, 2000);

            }

            else if (obstacle3.top > this.height) {

                //Remove the obstacle HTML element from the HTML.
                obstacle3.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles3.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after one and half second.
        else if (!this.obstacles3.length && !this.isPushingObstacle3) {
            this.isPushingObstacle3 = true;
            setTimeout(() => {
                this.obstacles3.push(new Obstacle3(this.gameScreen));
                this.isPushingObstacle3 = false;

            }, 1000);
        }

        //------------------- HTML LOGO --------------------//

        // Iterate over the obstacles array and make them move
        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move(this.player);


            if (this.player.didCollode(obstacle)) {
                obstacle.element.remove();

                this.obstacles.splice(i, 1);

                this.score++ ;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'HTML';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '20px'; // Adjust as needed
                htmlText.style.left = '10%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }

            else if (obstacle.top > this.height) {

                //Remove the obstacle HTML element from the HTML.
                obstacle.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after one and half second.
        else if (!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true;
            setTimeout(() => {
                this.obstacles.push(new Obstacle(this.gameScreen));
                this.isPushingObstacle = false;

            }, 1500);
        }
        //----------------------- CSS LOGO --------------------//

        for (let i = 0; i < this.obstacles2.length; i++) {
            const obstacle2 = this.obstacles2[i];
            obstacle2.move(this.player);


            if (this.player.didCollode(obstacle2)) {
                obstacle2.element.remove();

                this.obstacles2.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'CSS';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '20px'; // Adjust as needed
                htmlText.style.left = '25%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle2.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle2.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles2.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles2.length && !this.isPushingObstacle2) {
            this.isPushingObstacle2 = true;
            setTimeout(() => {
                this.obstacles2.push(new Obstacle2(this.gameScreen));
                this.isPushingObstacle2 = false;

            }, 2000);
        }

        //----------------------- JavaScript LOGO --------------------//

        for (let i = 0; i < this.obstacles4.length; i++) {
            const obstacle4 = this.obstacles4[i];
            obstacle4.move(this.player);


            if (this.player.didCollode(obstacle4)) {
                obstacle4.element.remove();

                this.obstacles4.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Javascript';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '20px'; // Adjust as needed
                htmlText.style.left = '43%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle4.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle4.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles4.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles4.length && !this.isPushingObstacle4) {
            this.isPushingObstacle4 = true;
            setTimeout(() => {
                this.obstacles4.push(new Obstacle4(this.gameScreen));
                this.isPushingObstacle4 = false;

            }, 2500);
        }

        //----------------------- REACT LOGO --------------------//


        for (let i = 0; i < this.obstacles5.length; i++) {
            const obstacle5 = this.obstacles5[i];
            obstacle5.move(this.player);


            if (this.player.didCollode(obstacle5)) {
                obstacle5.element.remove();

                this.obstacles5.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'React';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '20px'; // Adjust as needed
                htmlText.style.left = '60%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle5.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle5.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles5.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles5.length && !this.isPushingObstacle5) {
            this.isPushingObstacle5 = true;
            setTimeout(() => {
                this.obstacles5.push(new Obstacle5(this.gameScreen));
                this.isPushingObstacle5 = false;

            }, 3000);
        }

        //----------------------- MongoDB LOGO --------------------//

        for (let i = 0; i < this.obstacles6.length; i++) {
            const obstacle6 = this.obstacles6[i];
            obstacle6.move(this.player);


            if (this.player.didCollode(obstacle6)) {
                obstacle6.element.remove();

                this.obstacles6.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'MongoDB';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '20px'; // Adjust as needed
                htmlText.style.left = '79%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle6.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle6.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles6.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles6.length && !this.isPushingObstacle6) {
            this.isPushingObstacle6 = true;
            setTimeout(() => {
                this.obstacles6.push(new Obstacle6(this.gameScreen));
                this.isPushingObstacle6 = false;

            }, 3500);
        }

        //----------------------- Mongoose LOGO --------------------//

        for (let i = 0; i < this.obstacles7.length; i++) {
            const obstacle7 = this.obstacles7[i];
            obstacle7.move(this.player);


            if (this.player.didCollode(obstacle7)) {
                obstacle7.element.remove();

                this.obstacles7.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Mongoose';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '50px'; // Adjust as needed
                htmlText.style.left = '20%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle7.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle7.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles7.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles7.length && !this.isPushingObstacle7) {
            this.isPushingObstacle7 = true;
            setTimeout(() => {
                this.obstacles7.push(new Obstacle7(this.gameScreen));
                this.isPushingObstacle7 = false;

            }, 4000);
        }

        //--------------------- Node.JS ------------------------------//

        for (let i = 0; i < this.obstacles8.length; i++) {
            const obstacle8 = this.obstacles8[i];
            obstacle8.move(this.player);


            if (this.player.didCollode(obstacle8)) {
                obstacle8.element.remove();

                this.obstacles8.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Node.JS';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '50px'; // Adjust as needed
                htmlText.style.left = '42%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle8.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle8.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles8.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles8.length && !this.isPushingObstacle8) {
            this.isPushingObstacle8 = true;
            setTimeout(() => {
                this.obstacles8.push(new Obstacle8(this.gameScreen));
                this.isPushingObstacle8 = false;

            }, 4500);
        }

        //-------------------------- Python --------------------------//

        for (let i = 0; i < this.obstacles9.length; i++) {
            const obstacle9 = this.obstacles9[i];
            obstacle9.move(this.player);


            if (this.player.didCollode(obstacle9)) {
                obstacle9.element.remove();

                this.obstacles9.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Python';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '50px'; // Adjust as needed
                htmlText.style.left = '60%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle9.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle9.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles9.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles9.length && !this.isPushingObstacle9) {
            this.isPushingObstacle9 = true;
            setTimeout(() => {
                this.obstacles9.push(new Obstacle9(this.gameScreen));
                this.isPushingObstacle9 = false;

            }, 5000);
        }

        //----------------------- Tailwind CSS --------------------------------//

        for (let i = 0; i < this.obstacles10.length; i++) {
            const obstacle10 = this.obstacles10[i];
            obstacle10.move(this.player);


            if (this.player.didCollode(obstacle10)) {
                obstacle10.element.remove();

                this.obstacles10.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Tailwind CSS';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '83px'; // Adjust as needed
                htmlText.style.left = '30%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle10.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle10.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles10.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles10.length && !this.isPushingObstacle10) {
            this.isPushingObstacle10 = true;
            setTimeout(() => {
                this.obstacles10.push(new Obstacle10(this.gameScreen));
                this.isPushingObstacle10 = false;

            }, 5500);
        }

        //--------------------Chakra Logo --------------------//

        for (let i = 0; i < this.obstacles11.length; i++) {
            const obstacle11 = this.obstacles11[i];
            obstacle11.move(this.player);


            if (this.player.didCollode(obstacle11)) {
                obstacle11.element.remove();

                this.obstacles11.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Chakra';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '50px'; // Adjust as needed
                htmlText.style.left = '76%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle11.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle11.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles11.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles11.length && !this.isPushingObstacle11) {
            this.isPushingObstacle11 = true;
            setTimeout(() => {
                this.obstacles11.push(new Obstacle11(this.gameScreen));
                this.isPushingObstacle11 = false;

            }, 6000);
        }

        //-------------------------- Figma --------------------------//

        for (let i = 0; i < this.obstacles12.length; i++) {
            const obstacle12 = this.obstacles12[i];
            obstacle12.move(this.player);


            if (this.player.didCollode(obstacle12)) {
                obstacle12.element.remove();

                this.obstacles12.splice(i, 1);

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Figma';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '83px'; // Adjust as needed
                htmlText.style.left = '65%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);
            }


            else if (obstacle12.top > this.height) {

                //Remove the obstacle CSS element from the HTML.
                obstacle12.element.remove();

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles12.splice(i, 1);
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        // if there are no obstacles, push a new one after two second.
        else if (!this.obstacles12.length && !this.isPushingObstacle12) {
            this.isPushingObstacle12 = true;
            setTimeout(() => {
                this.obstacles12.push(new Obstacle12(this.gameScreen));
                this.isPushingObstacle12 = false;

            }, 6500);
        }

        score.innerHTML = this.score ;
        lives.innerHTML = this.lives ;

    }

    endGame() {
        //Change the gameIsOver status. if its true, remmember that -->
        // -->this is going to break the animation loop
        this.gameIsOver = true;

        clearInterval(this.timerInterval)

        // Remove my Player from the HTML
        this.player.element.remove();

        //Remove all the obstacles from the HTML
        this.obstacles.forEach((obstacle, index) => {
            this.obstacles.splice(index, 1);
            obstacle.element.remove();

            
        });
        
        this.soundtrack.pause();
        // Hide the current game screen
        this.gameScreen.style.display = "none";

        // In Order, to display the Game End Screen. 
        this.gameEndScreen.style.display = "block";

    }

}