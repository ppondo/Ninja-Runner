// const LAYER1 = {
//     vel: 4,
//     scroll: 1,
//     dx: 1300,
//     src: "./assets/images/parallax/layer_01.png"

// }
// const LAYER2 = {
//     vel: 3.5,
//     scroll: 1,
//     dx: 1300,
//     src: "./assets/images/parallax/layer_02.png"
// }
// const LAYER3 = {
//     vel: 3,
//     scroll: 1,
//     dx: 1300,
//     src: "./assets/images/parallax/layer_03.png"
// }
// const LAYER4 = {
//     vel: 2.5,
//     scroll: 1,
//     dx: 1300,
//     src: "./assets/images/parallax/layer_04.png"
// }
// const LAYER5 = {
//     vel: 2,
//     scroll: 1,
//     dx: 1300,
//     src: "./assets/images/parallax/layer_05.png"
// }
// const LAYER6 = {
//     vel: 1,
//     scroll: 1,
//     dx: 1300,
//     src: "./assets/images/parallax/layer_06.png"
// }
// const LAYER7 = {
//     vel: 0.3,
//     scroll: 1,
//     dx: 1500,
//     src: "./assets/images/parallax/layer_07.png"
// }
// const LAYER8 = {
//     vel: 0.3,
//     scroll: 1,
//     dx: 1300,
//     src: "./assets/images/parallax/layer_08.png"
// }
// const LAYER9 = {
//     vel: 0.3,
//     scroll: 1,
//     dx: 1300,
//     src: "./assets/images/parallax/layer_09.png"
// }
// const LAYER10 = {
//     vel: 0.3,
//     scroll: 1,
//     dx: 1300,
//     src: "./assets/images/parallax/layer_10.png"
// }



// class Parallax {
//     constructor(ctx, desc) {
//         switch(desc) {
//             case 'one':
//                 this.layer = LAYER1;
//                 break;
//             case 'two':
//                 this.layer = LAYER2;
//                 break;
//             case 'three':
//                 this.layer = LAYER3;
//                 break;
//             case 'four':
//                 this.layer = LAYER4;
//                 break;
//             case 'five':
//                 this.layer = LAYER5;
//                 break;
//             case 'six':
//                 this.layer = LAYER6;
//                 break;
//             case 'seven':
//                 this.layer = LAYER7;
//                 break;
//             case 'eight':
//                 this.layer = LAYER8;
//                 break;
//             case 'nine':
//                 this.layer = LAYER9;
//                 break;
//             case 'ten':
//                 this.layer = LAYER10;
//                 break;
//         }

//         this.desc = desc;
//         this.vel = this.layer.vel;
//         this.scroll = this.layer.scroll;
//         this.dx = this.layer.dx;
//         this.dx1 = null;
//         this.dx2 = null;
//         this.dy = 0;
//         this.ctx = ctx;

//         this.image = new Image;
//         this.image.onload = () => {
//             this.ctx.drawImage(this.image, 0, 0, this.dx, 400, this.dx1, this.dy, this.dx, 400);
//         }

//         this.drawLayer = this.drawLayer.bind(this)
//         this.renderLayer = this.renderLayer.bind(this)
//     }

//     drawLayer() {
//         this.ctx.drawImage(this.image, 0, 0, this.dx, 400, this.dx1, this.dy, this.dx, 400);
//         this.ctx.drawImage(this.image, 0, 0, this.dx, 400, this.dx2, this.dy, this.dx, 400);
//     }

//     renderLayer() {
//         this.ctx.clearRect(0, 0, 700, 400);
//         this.dx1 = this.xPos
//         this.dx2 = this.xPos + this.dx
//         this.drawLayer();
//     }
// }

// export default Parallax;