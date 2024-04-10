class Obstacle9 {
    constructor(gameScreen , player) {
        this.gameScreen = gameScreen ;
        this.player = player ;
       
        // Random Position
        this.left = Math.floor(Math.random() * 300 + 70) ;

        this.top = 0 ;
        this.width = 50 ;
        this.height = 50 ;

        // Create the HTML elements and create default styling
        this.element = document.createElement("img") ;
        this.element.src = "./images/python.png" ;
        this.element.style.position = "absolute" ;
        this.element.style.width = `${this.width}px` ;
        this.element.style.height = `${this.height}px` ;
        this.element.style.left = `${this.left}px` ;
        this.element.style.top = `${this.top}px` ;

        this.gameScreen.appendChild(this.element) ;
        
    }

    move() {
        // Move obstacles down 
        this.top += 4 ;

        this.updatePosition() ;
    }

    updatePosition() {
        this.element.style.left = `${this.left}px` ;
        this.element.style.top = `${this.top}px`
    }
}