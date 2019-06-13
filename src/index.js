import _ from 'lodash'
import Game from './game';
import Ninja from './ninja';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas')
    const playButton = document.getElementById('play')
    // const ctx = canvas.getContext("2d");

    const game = new Game(canvas);
    game.render();
 
})





   
