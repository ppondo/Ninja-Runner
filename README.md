# Ninja Runner

   Ninja Runner is a JavaScript game where the player must run through the streets avoiding obstacles to get the highest score. Collecting shurikens along the way will increase your score! The goal is to get the furthest distance without falling off of a platform or hitting an obstacle.
   
<img src="https://media.giphy.com/media/MFyyImydmpCMDcq173/giphy.gif" alt="Ninja-Runner">

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
      <p>colliding with any of the obstacles will result in rendering 'game over' message.</p>
    </li>
    <li>Ninja's ability to slide and jump.
       <p>This will include different animations for jumping and sliding, jumping will allow the ninja to get over obstacles, while sliding will allow the ninja to get underneath obstcales the ninja would otherwise not be able to get past.</p>
    </li>
    <li>Properly measuring distance and returning that for final score.</li>
    <li>Background music that is mutable</li>
    <li>Parallax background to simulate running experience.
      <p>Different parts of the background will scroll at different rates as the player moves. For Instance the sky will move slower than the trees as the trees are 'closer' to the character.</p>
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





