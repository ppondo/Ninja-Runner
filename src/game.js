import Ninja from './ninja';

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ninja = new Ninja(this.ctx);

        this.render = this.render.bind(this);
    }

    render() {
        // this.ctx.clearRect(0, 0, 800, 400);
        this.ninja.render();
    }
}

export default Game;

