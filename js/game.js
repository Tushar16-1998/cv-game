class Game {
    // code to be added
    constructor () {

        this.startScreen = document.getElementById("game-intro") ;
        this.gameScreen = document.getElementById("game-screen") ;
        this.gameEndScreen = document.getElementById("game-end") ;
        
        /* Im going to create a player in the future. for this moment of 
        the code-along , i'll leave it to null.*/

        this.player = new Player(
            this.gameScreen , 
            200 , 
            500 , 
            100 , 
            150 , 
            "./images/vegeta.png") ;
           


        // Style for the board game.

        this.height = 600 ;
        this.width = 800 ; 

        // Obstacles

        this.obstacles = [] ;

        // Score 
        
        this.score = 0 ;

        // Lives 
        
        this.lives = 3 ;

        //Variable to check if im in the process of creating an obstacles.
        this.isPushingObstacle = false ;


        //VAriable to check if the game is over
        
        this.gameIsOver = false ;

        this.soundtrack = null ;
        
    }  

    start(){
        // Sets the height and width of the game screen.||||||||||

        this.gameScreen.style.height = `${this.height}px` ;
        this.gameScreen.style.width = `${this.width}px` ;

        // Hides the start screen.||||||||||||||||||||||||||||||||

        this.startScreen.style.display = "none" ;

        // Shows the game screen.|||||||||||||||||||||||||||||||||

        this.gameScreen.style.display = "block" ;

        this.soundtrack = document.getElementById("soundtrack") ;

        this.soundtrack.play() ;

        // Starts the game loop 

        this.gameLoop() ; 
    }    
    
    gameLoop() {
        if(this.gameIsOver) {
            return ;
        }

        this.update() ;

        window.requestAnimationFrame(() => this.gameLoop()) ;
    }

    update() {
        /* Score, lives Scoreboard */
        let score = document.getElementById("score") ;
        let lives = document.getElementById("lives") ;

        /* Every Frame of the game, i want to check if the car is moving */
        this.player.move() ;

        // Iterate over the obstacles array and make them move
        for(let i = 0 ; i < this.obstacles.length ; i++) {
            const obstacle = this.obstacles[i] ;
            obstacle.move() ;

            if(this.player.didCollode(obstacle)){
                obstacle.element.remove() ;

                this.obstacles.splice(i , 1) ;

                this.lives-- ;
            }

            else if(obstacle.top > this.height) {
                this.score++ ;

                //Remove the obstacle HTML element from the HTML.
                obstacle.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after one and half second.
        else if(!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true ;
            setTimeout(() =>{
                this.obstacles.push(new Obstacle(this.gameScreen)) ;
                this.isPushingObstacle = false ;  

            } , 1500) ;
        }

        score.innerHTML = this.score ;
        lives.innerHTML = this.lives ; 
    }

    endGame() {
        //Change the gameIsOver status. if its true, remmember that -->
        // -->this is going to break the animation loop
        this.gameIsOver = true ;

        // Remove my Player from the HTML
        this.player.element.remove() ;

        //Remove all the obstacles from the HTML
        this.obstacles.forEach((obstacle , index) => {
            this.obstacles.splice(index , 1) ;
            obstacle.element.remove() ;
        }) ;

        // Hide the current game screen
        this.gameScreen.style.display = "none" ;

        // In Order, to display the Game End Screen. 
        this.gameEndScreen.style.display = "block" ;

        const highestScore = localStorage.setItem("highestScore") ;

        if(highestScore && this.score > highestScore) {
            localStorage.setItem("highestScore" , this.score) ;
        }
    }

}