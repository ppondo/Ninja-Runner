import _ from 'lodash'
import Game from './game';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d');

    const gameOverDisplay = document.getElementById('game-over');
    const introDisplay = document.getElementById('intro');
    const playButton = document.getElementById('play');
    const restartButton = document.getElementById('try-again');
    const score = document.getElementById('score');
    const muteMusic = document.getElementById('mute-music');
    const playMusic = document.getElementById('play-music');

    const gameMusic = new Audio('./assets/sounds/background_music.mp3');
    gameMusic.loop = true;
    gameMusic.volume = 0.1;
    let isMuted = false;
    
    const game = new Game(canvas, ctx);
    let gameLoopId;
    
    function gameLoop() {
        game.render();
        gameLoopId = window.requestAnimationFrame(gameLoop);

        if (!isMuted) {
            playMusic.classList.add('glow')
            gameMusic.play();
        }

        if (game.gameOver) {
            window.cancelAnimationFrame(gameLoopId);
            gameOverDisplay.classList.remove('hide');
            gameOverDisplay.classList.add('flex');
            score.innerHTML = `${game.score}`
        } 
    }

    function start() {
        window.requestAnimationFrame(gameLoop);
    }
    
    playButton.onclick = () => {
        introDisplay.classList.remove('flex');
        introDisplay.classList.add('hide');
        game.resetGame();
        start();
    }

    restartButton.onclick = () => {
        gameOverDisplay.classList.remove('flex');
        gameOverDisplay.classList.add('hide');
        ctx.clearRect(0, 0, 800, 400)        
        game.resetGame();
        start();
    }

    muteMusic.onclick = () => {
        isMuted = true;
        gameMusic.pause();
        playMusic.classList.remove('glow')
        muteMusic.classList.add('glow')
    }

    playMusic.onclick = () => {
        isMuted = false;
        gameMusic.play();
        muteMusic.classList.remove('glow')
        playMusic.classList.add('glow')
    }
})





   
