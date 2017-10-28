// SETUP -- DO NOT EDIT
let game = new Phaser.Game(400, 200, Phaser.AUTO, 'game', {
  preload, create, update
});

function preload() {
  game.load.tilemap('map', 'Map.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('Tilemap', 'spritesheet.png');
  game.load.image('background', 'background.png');
  game.load.image('sprite', 'sprite.png');
}

let map, layer, cursors, sprite, lava, keys;

function create() {
  Phaser.Canvas.setImageRenderingCrisp(game.canvas);
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;

  game.renderer.renderSession.roundPixels = true;

  map = game.add.tilemap('map');
  map.addTilesetImage('Tilemap');

  let bg = game.add.tileSprite(0, 0, 1000, 1000, 'background');

  layer = map.createLayer('Tile Layer 1');
  // lava = map.createLayer('Death');
  // keys = map.createLayer('Keys');
  layer.resizeWorld();
  layer.smoothed = false;

  map.setCollisionBetween(1, 1000);

  sprite = game.add.sprite(30, 200, 'sprite');
  sprite.smoothed = false;

  game.physics.enable(sprite);
  sprite.body.collideWorldBounds = true;
  sprite.anchor.setTo(.5, .5);
  // sprite.body.bounce.set(0.6);

  game.camera.follow(sprite, game.camera.FOLLOW_PLATFORMER);
  game.camera.scale.x = 1;
  game.camera.scale.y = 1;

  game.physics.arcade.gravity.y = 500;

  cursors = game.input.keyboard.createCursorKeys();
}

function collectKey(sprite, key) {
  // console.log('key')
  key.destroy();
}

function die(sprite, key) {
  sprite.destroy();
}

function update() {
    game.physics.arcade.overlap(sprite, keys, collectKey, null, this);
    game.physics.arcade.collide(sprite, lava, die, null, this);
    game.physics.arcade.collide(sprite, layer);
    sprite.body.velocity.x = 0;
    // sprite.body.velocity.y = 0;

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
