import _ from 'lodash'
import Game from './game';
import Ninja from './ninja';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas')
    // const ctx = canvas.getContext("2d");

    const game = new Game(canvas);
    game.render();
})




   
