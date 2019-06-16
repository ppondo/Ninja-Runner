const CRATE1 = {
    src: './assets/images/obstacles/crate.png',
    width: (106 * 0.5),
    height: (106 * 0.5),
    xPos: 850,
    yPos: 307,
    vel: 4
};

const CRATE2 = {
    src: './assets/images/obstacles/crate.png',
    width: (106 * 0.5),
    height: (106 * 0.5),
    xPos: 1150,
    yPos: 307,
    vel: 4
};


const BUSH1 = {
    src: './assets/images/obstacles/dead_bush.png',
    width: (132 * 0.6),
    height: (74 * 0.6),
    xPos: 1475,
    yPos: 315,
    vel: 4
};


const BUSH2 = {
    src: './assets/images/obstacles/dead_bush.png',
    width: (132 * 0.6),
    height: (74 * 0.6),
    xPos: 1900,
    yPos: 315,
    vel: 4
};

class Obstacles {
    constructor(ctx, canvas) {
        this.crate1 = CRATE1;
        this.bush1 = BUSH1;
        this.crate2 = CRATE2;
        this.bush2 = BUSH2;
        this.getImages();
        this.canvas = canvas;
        this.ctx = ctx;

        this.obstaclesArray = [this.crate1, this.crate2, this.bush1, this.bush2]
        this.draw = this.draw.bind(this);
    }

    getImages() {
        this.crate1Img = new Image();
        this.crate1Img.src = this.crate1.src;

        this.crate2Img = new Image();
        this.crate2Img.src = this.crate2.src;

        this.bush1Img = new Image();
        this.bush1Img.src = this.bush1.src;

        this.bush2Img = new Image();
        this.bush2Img.src = this.bush2.src;
    }

    draw() {
        this.crate1.xPos -= this.crate1.vel;
        this.crate2.xPos -= this.crate2.vel;
        this.bush1.xPos -= this.bush1.vel;
        this.bush2.xPos -= this.bush2.vel;

        this.ctx.drawImage(
            this.crate1Img, 
            this.crate1.xPos, 
            this.crate1.yPos,
            this.crate1.width, 
            this.crate1.height
        );

        this.ctx.drawImage(
            this.crate2Img,
            this.crate2.xPos,
            this.crate2.yPos,
            this.crate2.width,
            this.crate2.height
        );

        this.ctx.drawImage(
            this.bush1Img,
            this.bush1.xPos,
            this.bush1.yPos,
            this.bush1.width,
            this.bush1.height
        );

        this.ctx.drawImage(
            this.bush2Img,
            this.bush2.xPos,
            this.bush2.yPos,
            this.bush2.width,
            this.bush2.height
        );

        if (this.crate1.xPos <= -this.canvas.width) {
            this.crate1.xPos = 845;
        } else if (this.crate2.xPos <= -this.canvas.width) {
            this.crate2.xPos = 1000;
        } else if (this.bush1.xPos <= -this.canvas.width) {
            this.bush1.xPos = 1430;
        } else if (this.bush2.xPos <= -this.canvas.width) {
            this.bush2.xPos = 1850;
        }
    }
}

export default Obstacles;