const SHURIKEN = {
    src: './assets/images/obstacles/shuriken-sheet.png'
};

class Shuriken {
    constructor(ctx, canvas) {
        this.shuriken = SHURIKEN;
        this.ctx = ctx;
        this.canvas = canvas
        this.xPos = 900
        this.yPos = 267
        this.vel = 6.7;
        this.getImages();
        this.frameCount = 3;
        this.currentFrame = 0;
        this.width = 70;
        this.height = 73;
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
            this.currentFrame = 0;
        }
        if(this.frames % 3 === 0) {
            this.currentFrame = (this.currentFrame + 1);
        }
        this.srcX = this.currentFrame * this.width;
    }

    drawShuriken() {
        this.xPos -= this.vel;
        this.updateFrame();
        this.ctx.drawImage(
            this.shurikenImg,
            this.srcX,
            this.srcY,
            this.width,
            this.height,
            this.xPos,
            this.yPos,
            35,
            36.5
        );

        if (this.xPos <= (-this.canvas.width * 2.6)) {
            this.xPos = 900;
        }
    }

    resetShuriken() {
        this.xPos = 900;
    }

}
export default Shuriken;