import _ from 'lodash'
import Game from './game';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas')
    const playButton = document.getElementById('play')

    const game = new Game(canvas);
    game.render();
 
})





   
