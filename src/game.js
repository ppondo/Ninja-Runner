import Ninja from './ninja';
import Parallax from './parallax';
import Obstacles from './obstacle';
import Shuriken from './shuriken';

class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.createNinja();
        this.createParallax();
        this.createObstacles();
        this.createGameControls();
        this.gameOver = false;

        this.render = this.render.bind(this);
        this.action = this.action.bind(this);
        this.resetGame = this.resetGame.bind(this)
        this.score = 0;
    }

    action(e) {
        // debugger
        if ((e.key === 'ArrowUp' || e.key === 'w') && this.ninja.jumpCount < 2) {
            this.ninja.action('jump');
        } else if ((e.key === 'ArrowDown' || e.key === 's') && this.ninja.yPos === 280){
            this.ninja.action('slide');
        }
    }

    // run() {
    //     this.ninja.action('running');
    // }

    createGameControls() {
        document.addEventListener('keydown', e => this.action(e));
        document.addEventListener('keyup', e => {
            if (e.key === 's' || e.key === 'ArrowDown' && this.ninja.movement === 'slide') {
                this.ninja.movement = 'running';
            }
        });
    }

    createNinja() {
        this.ninja = new Ninja(this.ctx);
    }

    createParallax() {
        this.background = new Parallax(this.ctx, this.canvas);
    }

    createObstacles() {
      this.obstacles = new Obstacles(this.ctx, this.canvas);
      this.shuriken = new Shuriken(this.ctx, this.canvas)
    }

    detectCollision() {
        this.obstacles.obstaclesArray.forEach(obs => {
            if (this.ninja.collidedWith(obs)) {
                // debugger;
                this.gameOver = true;
            }
        });

        
    }

    shurikenCollision() {
        if (this.ninja.shurikenColl(this.shuriken)) {
            this.gameOver = true;
        }
    }

    updateScore() {
        if (this.ninja.frames % 20 === 0) {
            this.score++
        }
    }

    render() {
        this.background.drawLayers();
        this.ninja.draw();
        this.ninja.frames++
        this.obstacles.draw();
        this.shuriken.drawShuriken();
        this.shuriken.frames++
        this.detectCollision();
        this.shurikenCollision();
        this.updateScore();
        if (this.score === 168) {
            this.obstacles.resetObstacles();
        }
    }

    resetGame() {
        this.ctx.clearRect(0, 0, 800, 400)
        this.score = 0;
        this.createNinja();
        this.background.resetParallax();
        this.obstacles.resetObstacles();
        this.shuriken.resetShuriken();
        this.gameOver = false;
    }

}

export default Game;

