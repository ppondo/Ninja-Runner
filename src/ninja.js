const RUN = {
    src: './assets/images/ninja_run/ninja_spritesheet.png'
}

const JUMP = {
    src: './assets/images/ninja_jump/ninja_jump.png'
}

const DROP = {
    src: './assets/images/ninja_jump/ninja_drop.png'
}

class Ninja {
    constructor(ctx) {
        this.ctx = ctx;
        this.xPos = 175;
        this.yPos = 280;
        this.speed = 0;
        this.movement = 'running';
        this.getImages();
        this.width = 200;
        this.height = 252;
        this.srcX = 0;
        this.srcY = 0;
        this.jumpHeight = 0;
        this.jumpCount = 0;
        this.frames = 0;

        this.currentFrame = 0;
        this.frameCount = 9;

        this.updateFrame = this.updateFrame.bind(this);
        this.draw = this.draw.bind(this);
        this.jump = this.jump.bind(this);
    }

    getImages() {
        this.runImg = new Image();
        this.runImg.src = RUN.src;

        this.jumpImg = new Image();
        this.jumpImg.src = JUMP.src;

        this.dropImg = new Image();
        this.dropImg.src = DROP.src;
    }

    updateFrame() {
        if (this.currentFrame === this.frameCount) {
            this.currentFrame = 0;
        }
        debugger;
        if (this.movement === 'running' && this.frames % 2 === 0) {
            this.currentFrame = (this.currentFrame + 1);
        } else if (this.movement === 'drop') {
            this.currentFrame = 8;
        }
        this.srcX = this.currentFrame * this.width;
        // this.ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
    }

    jump() {
        this.movement = 'jump';
        this.jumpHeight = 15;
        this.jumpCount += 1;
    }

    draw() {
        if (this.movement === 'running') {
            this.updateFrame();
            this.ctx.drawImage(this.runImg, this.srcX, this.srcY, this.width, this.height, this.xPos, this.yPos, 66.67, 84);
        } else if (this.movement === 'jump') {
            this.updateFrame();
            // debugger
            this.yPos -= this.jumpHeight;
            this.jumpHeight -= 1.5;
            if (this.jumpHeight === 0) {
                debugger
                this.movement = 'drop';
            }
            this.ctx.drawImage(this.jumpImg, this.srcX, this.srcY, this.width, this.height, this.xPos, this.yPos, 66.67, 84);
        } else if (this.movement === 'drop') {
            this.updateFrame();
            if (this.yPos + this.jumpHeight > 280) {
                this.movement = 'running';
                this.yPos = 280;
                this.jumpHeight = 0;
                this.jumpCount = 0;
            } else {
                this.yPos += this.jumpHeight;
                this.jumpHeight += 1.5;
            }
            this.ctx.drawImage(this.jumpImg, this.srcX, this.srcY, this.width, this.height, this.xPos, this.yPos, 66.67, 84);
        }
    }

    // render() {
    //     setInterval(this.draw, 53)
    // }
}

export default Ninja;