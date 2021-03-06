const RUN = {
    src: './assets/images/ninja_run/ninja_spritesheet.png'
}

const JUMP = {
    src: './assets/images/ninja_jump/ninja_jump.png'
}

const DROP = {
    src: './assets/images/ninja_jump/ninja_drop.png'
}


const SLIDE = {
    src: './assets/images/ninja_run/ninja_slide.png'
}

class Ninja {
    constructor(ctx) {
        this.ctx = ctx;
        this.xPos = 175;
        this.yPos = 280;
        this.vel = 0;
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
        this.action = this.action.bind(this);
    }

    getImages() {
        this.runImg = new Image();
        this.runImg.src = RUN.src;

        this.jumpImg = new Image();
        this.jumpImg.src = JUMP.src;

        this.dropImg = new Image();
        this.dropImg.src = DROP.src;

        this.slideImg = new Image();
        this.slideImg.src = SLIDE.src;
    }

    updateFrame() {
        if (this.currentFrame === this.frameCount) {
            this.currentFrame = 0;
        }
        if (this.movement === 'running' && this.frames % 2 === 0) {
            this.currentFrame = (this.currentFrame + 1);
        } else if (this.movement === 'drop') {
            this.currentFrame = 8;
        }
        this.srcX = this.currentFrame * this.width;
    }

    action(type) {
        if (type === 'jump') {
            this.movement = 'jump';
            if (this.jumpCount === 1) {
                this.jumpHeight = 7;
            } else {
                this.jumpHeight = 9;
            }
            this.jumpCount += 1;
        } else if ((type === 'slide') && (this.jumpHeight === 0)) {
            this.movement = 'slide';
        } else {
            this.movement = 'running';
        }
    }


    collidedWith(obstacle) {
        let hitBoxX = obstacle.xPos + obstacle.width - 25;
        let hitBoxY = obstacle.yPos + obstacle.height - 20;

        if (this.yPos > (hitBoxY) || (this.yPos + 84) < obstacle.yPos + 15){
            return false;
        } else if (this.xPos > (hitBoxX) || (this.xPos + 66) < (obstacle.xPos + 30)) {
            return false;
        } else {
            return true;
        }
    }

    shurikenColl(shuriken) {
        let shurBoxX = shuriken.xPos + 24;
        let shurBoxY = shuriken.yPos + 25.5;

        // debugger
        if ((this.yPos + 84) < (shuriken.yPos + 15) || (this.yPos) > (shurBoxY)) {
            return false;
        } else if ((this.xPos + 66) < (shuriken.xPos + 19) || (this.xPos) > (shurBoxX)) {
            return false;
        } else {
            return true;
        }
    }

    draw() {
        this.xPos -= this.vel;

        if (this.movement === 'running') {
            this.yPos = 280;
            this.updateFrame();
            this.ctx.drawImage(this.runImg, this.srcX, this.srcY, this.width, this.height, this.xPos, this.yPos, 66.67, 84);
        } else if (this.movement === 'jump') {
            this.updateFrame();
            this.yPos -= this.jumpHeight;
            this.jumpHeight -= 0.5;
            if (this.jumpHeight === 0) {
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
                this.jumpHeight += 0.5;
            }
            this.ctx.drawImage(this.jumpImg, this.srcX, this.srcY, this.width, this.height, this.xPos, this.yPos, 66.67, 84);
        } else if (this.movement === 'slide') {
            this.yPos = 310;
            this.updateFrame();
            this.ctx.drawImage(this.slideImg, this.srcX, this.srcY, this.width, 187, this.xPos, this.yPos, 66.67, 62.33);
        }
    }
}

export default Ninja;