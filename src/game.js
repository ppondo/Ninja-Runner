import Ninja from './ninja';
import Parallax from './parallax';
import Obstacles from './obstacle';

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ninja = new Ninja(this.ctx);

        this.render = this.render.bind(this);
        this.jump = this.jump.bind(this);
        this.createParallax();
        this.createObstacles();

        document.addEventListener('keydown', e => this.jump(e));
    }

    jump(e) {
        // debugger
        if ((e.key === 'ArrowUp' || e.key == 'w') && this.ninja.jumpCount < 2) {
            this.ninja.jump();
        }
    }

    createParallax() {
        this.background = new Parallax(this.ctx, this.canvas);
    }

    createObstacles() {
      this.obstacles = new Obstacles(this.ctx, this.canvas);
    }

    detectCollision() {
        if (this.ninja.collidedWith(this.obstacles.crate1)) {
            alert('Game Over')
        } else if (this.ninja.collidedWith(this.obstacles.crate2)) {
            alert('Game Over')
        } else if (this.ninja.collidedWith(this.obstacles.bush1)) {
            alert('Game Over')
        } else if (this.ninja.collidedWith(this.obstacles.bush2)) {
            alert('Game Over')
        }
    }

    render() {
        this.background.drawLayers();
        this.ninja.draw();
        this.ninja.frames++
        this.obstacles.draw();
        this.detectCollision();
        window.requestAnimationFrame(this.render);
    }


}

export default Game;

