// SETUP -- DO NOT EDIT
let game = new Phaser.Game(400, 200, Phaser.AUTO, 'game', {
  preload, create, update
});

function preload() {
  game.load.tilemap('map', './Map.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.spritesheet('sprites', '../spritesheet.png', 21, 21, 900, 2, 2);
  game.load.image('Tilemap', '../spritesheet.png');
  game.load.image('background', '../background.png');
  game.load.image('sprite', '../sprite.png');
}

let map, layer, cursors, sprite, hazards, keys;

function create() {
  Phaser.Canvas.setImageRenderingCrisp(game.canvas);
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.renderer.renderSession.roundPixels = true;
  game.physics.startSystem(Phaser.Physics.ARCADE);

  map = game.add.tilemap('map');
  map.addTilesetImage('Tilemap');

  let bg = game.add.tileSprite(0, 0, 1000, 1000, 'background');

  layer = map.createLayer('Tile Layer 1');
  hazards = map.createLayer('Death');

  // debugger;
  hazards = game.add.physicsGroup();
  map.createFromObjects('Death', 'Death', 'sprites', 199, true, false, hazards);
  keys = game.add.physicsGroup();
  let keyLayer = map.createLayer('Keys');

  map.createFromTiles(15, 199, 'sprites', keyLayer, keys);

  layer.resizeWorld();
  layer.smoothed = false;

  map.setCollisionBetween(1, 1000);

  sprite = game.add.sprite(30, 200, 'sprite');
  sprite.smoothed = false;

  game.physics.enable([sprite, keys], Phaser.Physics.ARCADE);

  sprite.body.collideWorldBounds = true;
  hazards.forEach(hazard => {
    hazard.body.immovable = true;
  });
  keys.forEach(key => {
    key.body.collideWorldBounds = true
    key.frame = 15;
  });
  sprite.anchor.setTo(.5, .5);

  game.camera.follow(sprite, game.camera.FOLLOW_PLATFORMER);
  game.camera.scale.x = 1;
  game.camera.scale.y = 1;

  sprite.body.gravity.y = 500;

  cursors = game.input.keyboard.createCursorKeys();
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

function update() {
    game.physics.arcade.collide(sprite, keys, collectKey, null, this);
    
    game.physics.arcade.collide(sprite, layer);
    game.physics.arcade.collide(sprite, hazards, die, null, this);
    sprite.body.velocity.x = 0;

    if (cursors.up.isDown) {
      sprite.body.velocity.y = -150;
    }
    else if (cursors.down.isDown) {
      sprite.body.velocity.y = 150;
    }

    if (cursors.left.isDown) {
      sprite.body.velocity.x = -150;
      if (sprite.scale.x == 1) sprite.scale.x *= -1;
    }
    else if (cursors.right.isDown) {
      sprite.body.velocity.x = 150;
      if (sprite.scale.x < 1) sprite.scale.x *= -1;
    }

}
