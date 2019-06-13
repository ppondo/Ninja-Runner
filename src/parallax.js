const LAYER1 = {
    vel: 4.0,
    scroll: 1,
    src: "./assets/images/parallax/layer_01.png",
    x: 0,
    y: 0

}
const LAYER2 = {
    vel: 3.75,
    scroll: 1,
    src: "./assets/images/parallax/layer_02.png",
    x: 0,
    y: 0
}
const LAYER3 = {
    vel: 3,
    scroll: 1,
    src: "./assets/images/parallax/layer_03.png",
    x: 0,
    y: 0
}
const LAYER4 = {
    vel: 2.5,
    scroll: 1,
    src: "./assets/images/parallax/layer_04.png",
    x: 0,
    y: 0
}
const LAYER5 = {
    vel: 2,
    scroll: 1,
    src: "./assets/images/parallax/layer_05.png",
    x: 0,
    y: 0
}
const LAYER6 = {
    vel: 1,
    scroll: 1,
    src: "./assets/images/parallax/layer_06.png",
    x: 0,
    y: 0
}
const LAYER7 = {
    vel: 0.3,
    scroll: 1,
    dx: 1500,
    src: "./assets/images/parallax/layer_07.png",
    x: 0,
    y: 0
}
const LAYER8 = {
    vel: 0.3,
    scroll: 1,
    src: "./assets/images/parallax/layer_08.png",
    x: 0,
    y: 0
}
const LAYER9 = {
    vel: 0.3,
    scroll: 1,
    src: "./assets/images/parallax/layer_09.png",
    x: 0,
    y: 0
}
const LAYER10 = {
    vel: 0.3,
    scroll: 1,
    src: "./assets/images/parallax/layer_10.png",
    x: 0,
    y: 0
}



class Parallax {
    constructor(ctx, canvas) {
        this.canvas = canvas
        this.ctx = ctx

        this.one = LAYER1;
        this.two = LAYER2;
        this.three = LAYER3;
        this.four = LAYER4;
        this.five = LAYER5;
        this.six = LAYER6;
        this.seven = LAYER7;
        this.eight = LAYER8;
        this.nine = LAYER9;
        this.ten = LAYER10;

        this.getImages();

        this.drawLayers = this.drawLayers.bind(this);
        // this.resetLayers = this.resetLayers.bind(this);
    }

    getImages() {
        this.oneImg = new Image();
        this.oneImg.src = LAYER1.src;

        this.twoImg = new Image();
        this.twoImg.src = LAYER2.src;

        this.threeImg = new Image();
        this.threeImg.src = LAYER3.src;

        this.fourImg = new Image();
        this.fourImg.src = LAYER4.src;

        this.fiveImg = new Image();
        this.fiveImg.src = LAYER5.src;

        this.sixImg = new Image();
        this.sixImg.src = LAYER6.src;

        this.sevenImg = new Image();
        this.sevenImg.src = LAYER7.src;

        this.eightImg = new Image();
        this.eightImg.src = LAYER8.src;

        this.nineImg = new Image();
        this.nineImg.src = LAYER9.src;

        this.tenImg = new Image();
        this.tenImg.src = LAYER10.src;
    }

    drawLayers() {
        // this.ctx.clearRect(0, 0, 800, 400);
        this.one.x -= this.one.vel;
        this.two.x -= this.two.vel;
        this.three.x -= this.three.vel;
        this.four.x -= this.four.vel;
        this.five.x -= this.five.vel;
        this.six.x -= this.six.vel;
        this.seven.x -= this.seven.vel;
        this.eight.x -= this.eight.vel;
        this.nine.x -= this.nine.vel;
        this.ten.x -= this.ten.vel;
        
        this.ctx.drawImage(this.tenImg, this.ten.x, this.ten.y);
        this.ctx.drawImage(this.tenImg, this.ten.x + this.canvas.width, this.ten.y);

        this.ctx.drawImage(this.nineImg, this.nine.x, this.nine.y);        
        this.ctx.drawImage(this.nineImg, this.nine.x + this.canvas.width, this.nine.y);        

        this.ctx.drawImage(this.eightImg, this.eight.x, this.eight.y);        
        this.ctx.drawImage(this.eightImg, this.eight.x + this.canvas.width, this.eight.y);  

        this.ctx.drawImage(this.sevenImg, this.seven.x, this.seven.y);
        this.ctx.drawImage(this.sevenImg, this.seven.x + this.canvas.width, this.seven.y);
        
        this.ctx.drawImage(this.sixImg, this.six.x, this.six.y);
        this.ctx.drawImage(this.sixImg, this.six.x + this.canvas.width, this.six.y);

        this.ctx.drawImage(this.fiveImg, this.five.x, this.five.y);
        this.ctx.drawImage(this.fiveImg, this.five.x + this.canvas.width, this.five.y);

        this.ctx.drawImage(this.fourImg, this.four.x, this.four.y);
        this.ctx.drawImage(this.fourImg, this.four.x + this.canvas.width, this.four.y);

        this.ctx.drawImage(this.threeImg, this.three.x, this.three.y);
        this.ctx.drawImage(this.threeImg, this.three.x + this.canvas.width, this.three.y);

        this.ctx.drawImage(this.twoImg, this.two.x, this.two.y);
        this.ctx.drawImage(this.twoImg, this.two.x + this.canvas.width, this.two.y);

        this.ctx.drawImage(this.oneImg, this.one.x, this.one.y);
        this.ctx.drawImage(this.oneImg, this.one.x + this.canvas.width, this.one.y);

        if (this.one.x <= -this.canvas.width) {
            this.one.x = 0;
        } else if (this.two.x <= -this.canvas.width) {
            this.two.x = 0;
        } else if (this.three.x <= -this.canvas.width) {
            this.three.x = 0;
        } else if (this.four.x <= -this.canvas.width) {
            this.four.x = 0;
        } else if (this.five.x <= -this.canvas.width) {
            this.five.x = 0;
        } else if (this.six.x <= -this.canvas.width) {
            this.six.x = 0;
        } else if (this.seven.x <= -this.canvas.width) {
            this.seven.x = 0;
        } else if (this.eight.x <= -this.canvas.width) {
            this.eight.x = 0;
        } else if (this.nine.x <= -this.canvas.width) {
            this.nine.x = 0;
        } else if (this.ten.x <= -this.canvas.width) {
            this.ten.x = 0;
        }
    }

    // resetLayers() {
    //     this.one.x = 0;
    //     this.one.y = 0;

    //     this.two.x = 0;
    //     this.two.y = 0;

    //     this.three.x = 0;
    //     this.three.y = 0;

    //     this.four.x = 0;
    //     this.four.y = 0;

    //     this.five.x = 0;
    //     this.five.y = 0;

    //     this.six.x = 0;
    //     this.six.y = 0;

    //     this.seven.x = 0;
    //     this.seven.y = 0;

    //     this.eight.x = 0;
    //     this.eight.y = 0;

    //     this.nine.x = 0;
    //     this.nine.y = 0;

    //     this.ten.x = 0;
    //     this.ten.y = 0;
    // }

    // renderLayers() {
       
    //     debugger
    //     this.drawLayers();
    //     // this.resetLayers();
    // }
}

export default Parallax;