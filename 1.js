var config = {
    type: Phaser.AUTO,
    width: 700,
    height: 300,
    _parent: 'phaser-example',
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
function preload ()
{
    this.load.image('ball', 'logo.png');

}

function create ()
{
    var ball = this.add.image(100, 100, 'ball');
  

    ball.setInteractive();

    this.input.setDraggable(ball);
   
    
	


    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}
function update(){
    this.logo.rotation +=0.01;
}
/*
var config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    _parent: 'phaser-example',
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bowl', 'ball1.png');
}

function create ()
{
    var bowl = this.add.image(100, 100, 'bowl');

    bowl.setInteractive();

    this.input.setDraggable(bowl);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}
*/




