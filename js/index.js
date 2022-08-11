let snakeDirection = {
    x:0,
    y:0

}
let snakeArr = [
    //it stores snake information like current location ,has he eater food etc
    {
        x:13,
        y:14
    }
]
let food = {
    x:6,
    y:5
}
let board = document.getElementById('gameboard');
let speed = 2;
let lastpainttime = 0;
// initializing game audios
let foodsound = new Audio('assets/audio/food.mp3');
let gameoversound = new Audio('assets/audio/gameover.mp3');
let snakemovesound = new Audio('assets/audio/move.mp3');
let gamemusic = new Audio('assets/audio/music.mp3');

// game functions
function main(currenttime) {
    window.requestAnimationFrame(main)
    // console.log(currenttime)
    if((currenttime - lastpainttime / 1000)< 1/speed){
        return;

    }
    lastpainttime = currenttime;
    gameEngine();
    
}
function gameEngine(){

    //update the snake array and food






    //render the sanke array and food
   board.innerHTML = ""
    snakeArr.forEach((elem,index)=>{
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = elem.y
        snakeElement.style.gridColumnStart = elem.x
        if(index === 0 ){
            // if snake starts then add snake head
            snakeElement.classList.add('snakehead')
        }
        else{
            snakeElement.classList.add('snakebody')
        }
        

       
        board.appendChild(snakeElement)

    })

    //rendering the food
        foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('snakefood')
        board.appendChild(foodElement)


}




//game logic
window.requestAnimationFrame(main)

window.addEventListener('keydown',e=>{
    // when keydown it will start the game
    inputDir= {x:0,y:1}
    snakemovesound.play()
    switch (e.key) {
        case 'ArrowDown':
            console.log("arrowdown")
            break;
        case 'ArrowUp':
            console.log("arowup")
            break;
        case 'ArrowRight':
            console.log("arowright")
            break;
        case 'ArrowLeft':
            console.log("arowleft")
            break;                
    
        default:
            break;
    }

})