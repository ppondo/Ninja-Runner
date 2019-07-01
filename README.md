
# Ninja Runner

   Ninja Runner is a JavaScript game where the player must run through the streets avoiding obstacles to get the highest score. Collecting shurikens along the way will increase your score! The goal is to get the furthest distance without falling off of a platform or hitting an obstacle. Click on the Ninja below to check out the game!

<div >
  <img src="https://media.giphy.com/media/MFyyImydmpCMDcq173/giphy.gif" alt="Ninja-Runner"><a href='https://ppondo.github.io/Ninja-Runner/'><img height="290" src="https://github.com/ppondo/Ninja-Runner/blob/master/assets/images/ninja-man.png" alt='Ninja'></a>
</div>

## Technologies
<ul>
    <li>HTML 5 Canvas for displaying game</li>
    <li>Vanilla JavaScript for game logic and functionality</li>
    <li>CSS for UI styling</li>
</ul>

## Highlights

This is the function to update the frame of the ninja spritesheet. The most difficult part of developing this function was making the ninja render at a lower frame rate. The ninja spritesheet had 10 frames, so the animation was too fast at 60 frames per second. To remedy this, I kept track of the frame count and updated the ninja's running frame on every second frame, rendering the ninja at 30 FPS.

```JavaScript
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
```

  
## Functionality and Features
<ul>
    <li>Collision detection for when ninja hits a box, shuriken, or spikey bush.
      <p>colliding with any of the obstacles results in rendering 'game over' message.</p>
    </li>
    <li>Ninja's ability to slide and jump.
       <p>This includes different animations for jumping and sliding, jumping allows the ninja to get over obstacles, while sliding allows the ninja to get underneath obstcales the ninja is not be able to run past.</p>
    </li>
    <li>Properly measures distance and returns that for the final score.</li>
    <li>Background music that is mutable</li>
    <li>Parallax background to simulate running experience.
      <p>Different parts of the background scroll at different rates as the player moves. For Instance the sky layer moves slower than the trees as the trees are 'closer' to the character.</p>
    </li>
</ul>


### File Structure
<ul>
    <li>index.js</li>
    <li>game.js</li>
    <li>ninja.js</li>
    <li>obstacle.js</li>
    <li>shuriken.js</li>
    <li>parallax.js</li>
</ul>





