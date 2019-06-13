import Ninja from './ninja';
import Parallax from './parallax';

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ninja = new Ninja(this.ctx);

        this.render = this.render.bind(this);
        this.jump = this.jump.bind(this);
        this.parallax();

        document.addEventListener('keydown', e => this.jump(e));
    }

    jump(e) {
        // debugger
        if (e.key === 'ArrowUp' && this.ninja.jumpCount < 2) {
            this.ninja.jump();
        }
    }

    parallax() {
        this.background = new Parallax(this.ctx, this.canvas);
    }

    render() {
        this.background.drawLayers();
        // this.ctx.clearRect(0, 0, 800, 400);
        this.ninja.draw();
        this.ninja.frames++
        window.requestAnimationFrame(this.render);
    }


}

export default Game;

