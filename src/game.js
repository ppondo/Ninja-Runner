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
        this.jump = this.jump.bind(this);
        this.resetGame = this.resetGame.bind(this)
        this.score = 0;
    }

    jump(e) {
        // debugger
        if ((e.key === 'ArrowUp' || e.key == 'w') && this.ninja.jumpCount < 2) {
            this.ninja.jump();
        }
    }

    createGameControls() {
        document.addEventListener('keydown', e => this.jump(e));
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
        this.updateScore();
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

