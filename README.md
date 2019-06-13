# Ninja Runner

   Ninja Runner is a JavaScript game where the player must run through the streets avoiding obstacles to get the highest score. Collecting shurikens along the way will increase your score! The goal is to get the furthest distance without falling off of a platform or hitting an obstacle.
  
## Functionality and MVP Features
<ul>
    <li>Collision detection for when ninja falls off platform, collects shurikens, or hits obstacle.
      <p>Falling off of a platform or hitting an obstacle will result in rendering 'game over' message.</p>
    </li>
    <li>Ninja's ability to slide and jump.
       <p>This will include different animations for jumping and sliding, jumping will allow the ninja to get over obstacles, while sliding will allow the ninja to get underneath obstcales the ninja would otherwise not be able to get past.</p>
    </li>
    <li>Properly measuring distance and counting shurikens for total score.</li>
    <li>Background music that is mutable</li>
    <li>Parallax background to simulate running experience.
      <p>Different parts of the background will scroll at different rates as the player moves. For Instance the sky will move slower than a tree as the tree is 'closer' to the character.</p>
    </li>
</ul>

## Technologies
<ul>
    <li>HTML 5 Canvas for displaying game</li>
    <li>Vanilla JavaScript for game logic and functionality</li>
    <li>CSS for UI styling</li>
</ul>

### File Structure
<ul>
    <li>Game.js</li>
    <li>Platform.js</li>
    <li>Ninja.js</li>
    <li>Obstacle.js</li>
    <li>Shuriken.js</li>
    <li>Parallax.js</li>
    <li>Sidebar.js</li>
</ul>

## Implementation Timeline
<ul>
    <li>Day 1
      <p>Set up webpack, basic file structure, and review canvas and Object-Oriented JS.</p> 
      <p>Begin writing code for running logic and displaying ninja sprite. </p> 
    </li>
    <li>Day 2
      <p>Work on character controls (jumping, sliding).</p> 
      <p>Work on creating obstacles and shurikens and rendering them on the canvas. </p>
    </li>
    <li>Day 3
      <p>Implement collision detection for falling off runnable surface, shurikens, and obstacles. </p>
      <p>Implement scoring and game over logic.</p>
      <p>Create parallax background.</p>
    </li>
    <li>Day 4
      <p>Work on styling and aesthetics</p>
      <p>Work out any bugs and complete MVPs  </p>  
    </li>
</ul>

## Wireframe

![Wireframe](https://github.com/ppondo/Ninja-Runner/blob/master/assets/wireframe.png)



