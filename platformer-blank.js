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

  layer = null; // Determine what layer needs to be.
  // Hint: This represents the layer that contains all non-interactable parts of the level
  // that your sprite will collide with.
  // Refer to https://phaser.io/docs/2.4.4/Phaser.Tilemap.html#createLayer 

  hazards = null; // Determine what hazards needs to be (based on the subsequent createFromObjects call)
  // Hint: Check out the following:
  // https://phaser.io/docs/2.4.4/Phaser.State.html#add
  // https://phaser.io/docs/2.4.4/Phaser.GameObjectFactory.html#physicsGroup
  // https://phaser.io/docs/2.4.4/Phaser.Tilemap.html#createFromObjects


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
    // Write collision statements between sprite and keys and between sprite and hazards.
    // For sprite <-> keys collisions, use the collectKey collision handler.
    // For sprite <-> hazards collisions, use the die collision handler.

    // Your code here!




    // Write another collision statement between the sprite and your tilemap.

    // Your code here!




    // Stop your sprite from drifting all over the place.
    // Change a property of your sprite to make it stop.

    // Your code here!




    // Make your sprite move on keypresses!

    // Your code here!




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
