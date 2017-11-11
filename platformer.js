let game = new Phaser.Game(400, 200, Phaser.AUTO, 'game', {
  preload, create, update
});

function preload() {
  game.load.tilemap('map', 'Map.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.spritesheet('sprites', 'spritesheet.png', 21, 21, 900, 2, 2);
  game.load.image('Tilemap', 'spritesheet.png');
  // Load an image from background.png to add the background TileSprite!
  // Load an image from sprite.png to add the image for your sprite!
}

let map, layer, cursors, sprite, hazards, keys;

function create() {
  // Initial display properties for your game
  Phaser.Canvas.setImageRenderingCrisp(game.canvas);
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // Loading in your tilemap and adding it to the game world
  map = game.add.tilemap('map');
  map.addTilesetImage('Tilemap');

  // Add your background to the game -
  // remember to use:
  // game.add.tileSprite(x-coord, y-coord, width, height, 'name-of-image-set-in-preload')
  // 
  // Note: You can just use 1000 for width and height to cause your tilesprite to repeat
  // across those dimensions.

  // Your code here!

  layer = map.createLayer('Tile Layer 1');
  hazards = map.createLayer('Death');

  hazards = game.add.physicsGroup();
  map.createFromObjects('Death', 'Death', 'sprites', 199, true, false, hazards);
  keys = game.add.physicsGroup();
  let keyLayer = map.createLayer('Keys');

  map.createFromTiles(15, 199, 'sprites', keyLayer, keys);


  // Add your sprite to the game - 
  // remember to use game.add.sprite('name-of-image-set-in-preload', x-coord, y-coord)

  // Your code here!


  // Setting up display properties for your sprite and layers
  game.renderer.renderSession.roundPixels = true;
  layer.resizeWorld();
  layer.smoothed = false;
  sprite.smoothed = false;

  // Setting up physical properties for your sprite and layers
  game.physics.enable([sprite, keys], Phaser.Physics.ARCADE);
  map.setCollisionBetween(1, 1000);
  sprite.body.collideWorldBounds = true;
  hazards.forEach(hazard => {
    hazard.body.immovable = true;
  });
  keys.forEach(key => {
    key.body.collideWorldBounds = true
    key.frame = 15;
  });

  // Camera setup to follow your sprite
  game.camera.follow(sprite, game.camera.FOLLOW_PLATFORMER);
  sprite.anchor.setTo(.5, .5);
  sprite.body.gravity.y = 500;

  // Setting up your keyboard inputs
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    game.physics.arcade.collide(sprite, keys, collectKey, null, this);
    game.physics.arcade.collide(sprite, hazards, die, null, this);
    // Write another collision statement between the sprite and your tilemap.
    // Your code here!

    sprite.body.velocity.x = 0;

    if (cursors.up.isDown) {
      // Change a property of your sprite to make it move!
      // Your code here!
    }
    else if (cursors.down.isDown) {
      // Your code here!
    }

    if (cursors.left.isDown) {
      // Your code here!
      if (sprite.scale.x == 1) sprite.scale.x *= -1;
    }
    else if (cursors.right.isDown) {
      // Your code here!
      if (sprite.scale.x < 1) sprite.scale.x *= -1;
    }
}

function collectKey(sprite, key) {
  key.destroy();
  if (keys.children.length === 0) {
    let text = game.add.text(0, 0, 'You win!', {
      fill: '#000'
    });
    text.fixedToCamera = true;
  }
}

function die(sprite, key) {
  sprite.kill();
  let text = game.add.text(0, 0, 'You lose :(', {
    fill: '#000',
    align: 'center'
  });
  text.fixedToCamera = true;
}
