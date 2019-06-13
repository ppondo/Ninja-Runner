const RUN = {
    src: './assets/images/ninja_run/ninja_spritesheet.png'
}

const JUMP = {
    src: './assets/images/ninja_jump/ninja_jump.png'
}

class Ninja {
    constructor(ctx) {
        this.ctx = ctx;
        this.xPos = 100;
        this.yPos = 280;
        this.speed = 0;
        this.motion = 'running';
        this.getImage();
        this.width = 200;
        this.height = 252;
        this.srcX = 0;
        this.srcY = 0;

        this.currentFrame = 0;
        this.frameCount = 9;

        this.updateFrame = this.updateFrame.bind(this);
        this.render = this.render.bind(this);
        this.draw = this.draw.bind(this);
    }

    getImage() {
        this.runImg = new Image();
        this.runImg.src = RUN.src;
    }

    updateFrame() {
        if (this.currentFrame === this.frameCount) {
            this.currentFrame = 0;
        }
        this.currentFrame = (this.currentFrame + 1);
        this.srcX = this.currentFrame * this.width;
        this.ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
    }

    draw() {
        this.updateFrame();
        // if (this.motion === 'running') {
            this.ctx.drawImage(this.runImg, this.srcX, this.srcY, this.width, this.height, this.xPos, this.yPos, 66.67, 84);
        // }
    }

    render() {
        setInterval(this.draw, 55)
    }
}

export default Ninja;