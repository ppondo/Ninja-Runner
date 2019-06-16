import _ from 'lodash'
import Game from './game';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d');

    const gameOverDisplay = document.getElementById('game-over')
    const introDisplay = document.getElementById('intro')
    const playButton = document.getElementById('play')
    const restartButton = document.getElementById('try-again')

    const game = new Game(canvas, ctx);
    let gameLoopId;

    function gameLoop() {
        game.render();
        gameLoopId = window.requestAnimationFrame(gameLoop);
        if (game.gameOver === true) {
            window.cancelAnimationFrame(gameLoopId);
            gameOverDisplay.classList.remove('hide')
            gameOverDisplay.classList.add('flex')
        } 
    }

    function start() {
        window.requestAnimationFrame(gameLoop);
    }
    
    playButton.onclick = () => {
        ctx.clearRect(0, 0, 800, 400)
        introDisplay.classList.remove('flex')
        introDisplay.classList.add('hide')
        start();
    }

    restartButton.onclick = () => {
        document.location.href = '' 
        ctx.clearRect(0, 0, 800, 400)        
        game.resetGame();
        start();
    }
})





   
