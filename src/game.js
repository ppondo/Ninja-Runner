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
        if (e.key === 'ArrowUp' && this.ninja.jumpCount < 2) {
            this.ninja.jump();
        }
    }

    createParallax() {
        this.background = new Parallax(this.ctx, this.canvas);
    }

    createObstacles() {
      this.obstacles = new Obstacles(this.ctx, this.canvas);
    }

    // drawObstacles() {
    //     this.obstacles.forEach(obs => {
    //         obs.draw();
    //     });
    // }

    render() {
        this.background.drawLayers();
        this.ninja.draw();
        this.ninja.frames++
        this.obstacles.draw();
        window.requestAnimationFrame(this.render);
    }


}

export default Game;

