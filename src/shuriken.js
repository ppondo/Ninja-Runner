const SHURIKEN = {
    src: './assets/images/obstacles/shuriken-sheet.png'
};

class Shuriken {
    constructor(ctx, canvas) {
        this.shuriken = SHURIKEN;
        this.ctx = ctx;
        this.canvas = canvas
        this.xPos = 900
        this.yPos = 250
        this.vel = 4.5;
        this.getImages();
        this.frameCount = 2;
        this.currentFrame = 1;
        this.width = 225;
        this.height = 225;
        this.srcX = 0;
        this.srcY = 0;
        this.frames = 0;
    }

    getImages() {
        this.shurikenImg = new Image();
        this.shurikenImg.src = this.shuriken.src;
    }

    updateFrame() {
        if (this.currentFrame === this.frameCount) {
            this.currentFrame = 1;
        }
        if(this.frames % 2 === 0) {
            this.currentFrame = (this.currentFrame + 1);
        }
        this.srcX = this.currentFrame * this.width;
    }

    drawShuriken() {
        this.shuriken.xPos -= this.shuriken.vel;
        this.updateFrame();
        this.ctx.drawImage(
            this.shurikenImg,
            this.srcX,
            this.srcY,
            this.width,
            this.height,
            this.xPos,
            this.yPos,
            225,
            225
        );

        if (this.shuriken.xPos <= -this.canvas.width) {
            this.shuriken.xPos = 900;
        }
    }

    resetShuriken() {
        this.xPos = 900;
    }

}
export default Shuriken;