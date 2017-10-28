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

<img src="/slides-img/snorlax.gif" height="100" style="image-rendering: pixelated; border: none; background: none" />

## Sprites

The "characters" or individually moving components of your game.

```javascript
game.add.sprite(50, 50, 'sprite-image');
```

- Added in `create` function, modified in `update` function!

---

## Building a Platform Game with Phaser

***

## Designing a Sprite

Open up the link to **Piskel** on the _Links_ doc!

***

## Creating a Map



---

# Thank you!

ethanl@berkeley.edu
[https://facebook.com/thatethanlee](https://facebook.com/thatethanlee)

