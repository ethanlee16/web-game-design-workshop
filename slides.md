<img src="/sprite.png" height="150" style="image-rendering: pixelated; border: none; background: none" />
## Web Game Design

#### Hone &amp; Explore: October 28, 2017

---

## Hello, I'm Ethan!
- First-year intended CS (sad)
- InnoD Web Team
- Tech trash
- Enjoys Korean food

---

# Game Design

***

## Pong (~1972)
![Pong!](/slides-img/pong.png)

***

## Space Invaders (~1978)
![Space Invaders](/slides-img/spaceinvaders.gif)

***

---

## _Web_ Game Design
- Works for (almost) everyone with a browser
- No native download required
  - All assets downloaded like a webpage
- Push out updates instantly

***

## Club Penguin
![Club Penguin](/slides-img/clubpenguin.jpg)

***

## Messenger Instant Games
![Messenger](/slides-img/messenger.png)

***

## Snapchat Ads
![Snapchat](/slides-img/snapchat.png)

---

## Resources for this workshop
Open the _Links_ document!
<h4><a href="https://bitly.com/webgamedesign" style="text-transform: lowercase;">https://bitly.com/webgamedesign</a></h4>

---

# Basics of Web Game Design

***

### An empty canvas
```html
<canvas id="game"></canvas>
```

```javascript
let canvas = document.querySelector('#game');
let game = canvas.getContext('2d');
```

***

### Request animation frame
```javascript
function gameLoop() {
  // Gets called many, many times
  // Your code goes here!

  game.fillRect(x, y, width, height);
}

requestAnimationFrame(gameLoop);
```

***

## Inline Exercise 0

Open **Basics of Web Game Design** CodePen from the _Links_ doc!

***

What do these do?

```javascript
game.fillRect(<x value>, <y value>, <width>, <height>);
```

```javascript
game.clearRect(<x value>, <y value>, <width>, <height>);
```

**Hint:** Try adding two slashes (//) before them (telling the computer to ignore the line) and see what happens!

---

# Enter Phaser.js
A JavaScript framework that abstracts away web technologies like HTML5 Canvas and WebGL

---

# Basics of Phaser

***

## Everything happens in four functions

```javascript
function preload() {
  // Load images, sounds, etc.
}

function create() {
  // Setup your game world!
}

function update() {
  // Like our gameLoop() function, this gets called many times per second!
}

function render() {
  // Called after game elements are rendered
}

```

***

## Inline Exercise 1

Open **Basics of Phaser** CodePen from the _Links_ doc!

***

## Loading assets

(such as images or audio)

- Occurs in `preload` function!

```javascript
game.load.image('sprite-image', '/path/to/image');
```

![](/snorlax-sprite.png)

***

<img src="/slides-img/snorlax.gif" height="100" style="image-rendering: pixelated; border: none; background: none" />

## Adding sprites

The "characters" or individually moving components of your game.

- Occurs in `create` function!

```javascript
game.add.sprite(50, 50, 'sprite-image');
```

***

<img src="/coin.png" height="100" style="image-rendering: pixelated; border: none; background: none" />

## Moving stuff around

- Occurs in `update` function!

```javascript
sprite.velocity.x = 500;
sprite.velocity.y = 500;
```

---

## Building a Platform Game with Phaser

***

## Designing a Sprite

Open up the link to **Piskel** on the _Links_ doc!

***

## Designing a Map

Launch the **Tiled** app on your computer! (setup files in Web Game Design Drive)

***

## Connecting the Pieces

Download the **platformer.zip** file from the Web Game Design Drive and open it up in your text editor of choice.

**Note:** Download _Sublime Text (your platform)_ from the folder if you don't have a text editor you use for code!

---

# Thank you!

ethanl@berkeley.edu
[https://facebook.com/thatethanlee](https://facebook.com/thatethanlee)

