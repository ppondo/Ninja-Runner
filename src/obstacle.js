const CRATE1 = {
    src: './assets/images/obstacles/crate.png',
    width: 106,
    height: 106,
    xPos: 850,
    vel: 4
};

const CRATE2 = {
    src: './assets/images/obstacles/crate.png',
    width: 106,
    height: 106,
    xPos: 1150,
    vel: 4
};


const BUSH1 = {
    src: './assets/images/obstacles/dead_bush.png',
    width: 132,
    height: 74,
    xPos: 1450,
    vel: 4
};


const BUSH2 = {
    src: './assets/images/obstacles/dead_bush.png',
    width: 132,
    height: 74,
    xPos: 1900,
    vel: 4
};

class Obstacles {
    constructor(ctx, canvas) {
        this.crate1 = CRATE1;
        this.bush1 = BUSH1;
        this.crate2 = CRATE2;
        this.bush2 = BUSH2;
        this.getImages();
        this.canvas = canvas
        this.ctx = ctx;

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
            307,
            (this.crate1.width * 0.5), 
            (this.crate1.height * 0.5)
        );

        this.ctx.drawImage(
            this.crate2Img,
            this.crate2.xPos,
            307,
            (this.crate2.width * 0.5),
            (this.crate2.height * 0.5)
        );

        this.ctx.drawImage(
            this.bush1Img,
            this.bush1.xPos,
            315,
            (this.bush1.width * 0.6),
            (this.bush1.height * 0.6)
        );

        this.ctx.drawImage(
            this.bush2Img,
            this.bush2.xPos,
            315,
            (this.bush2.width * 0.6),
            (this.bush2.height * 0.6)
        );

        if (this.crate1.xPos <= -this.canvas.width + 200) {
            this.crate1.xPos = 820;
        } else if (this.crate2.xPos <= -this.canvas.width + 200) {
            this.crate2.xPos = 1200;
        } else if (this.bush1.xPos <= -this.canvas.width + 200) {
            this.bush1.xPos = 1475;
        } else if (this.bush2.xPos <= -this.canvas.width + 200) {
            this.bush2.xPos = 1800;
        }
    }
}

export default Obstacles;