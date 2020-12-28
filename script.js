
function preload() {
  this.load.image('bagA', 'https://i.imgur.com/fcOZBS3.jpg');
  this.load.image('bagB', 'https://i.imgur.com/vjqK6WY.jpg');
  this.load.image('bagC', 'https://i.imgur.com/Eo7yOIM.jpg');
  this.load.image('probTitle','https://i.imgur.com/cYPusLe.png' )
  this.load.image('grey','https://i.imgur.com/KQVglKm.jpg')
  this.load.image('redChip','https://i.imgur.com/7rudBTE.jpg');
  this.load.image('blueChip','https://i.imgur.com/OF7BijQ.jpg');
  this.load.image('greenChip', 'https://i.imgur.com/0jgTyeb.jpg');
}

const gameState = {
};

var redADraws = 0; 
var redBDraws = 0; 
var redCDraws = 0; 

var blueADraws = 0; 
var blueBDraws = 0; 
var blueCDraws = 0; 

var greenADraws = 0; 
var greenBDraws = 0; 
var greenCDraws = 0; 

function create() {

  titleText = this.add.text(config.width/10,0, 'Probability Exercise', { fontSize: '128px', fill: '#000',});
  var bagA = this.add.sprite(300,800,'bagA').setInteractive();
  var bagB = this.add.sprite(900,800,'bagB').setInteractive();
  var bagC = this.add.sprite(1500,800,'bagC').setInteractive();
  bagA.setScale(.8);
  bagB.setScale(.8);
  bagC.setScale(.8);

  tableA = this.add.text(200,200,'Bag A', {fontSize: '64px', fill:'#000'});
  tableC = this.add.text(825,200,'Bag B', {fontSize: '64px', fill:'#000'});
  tableC = this.add.text(1425,200,'Bag C', {fontSize: '64px', fill:'#000'});

  redA = this.add.text(200,275,'Red:' + redADraws, {fontSize: '40px', fill:'#000'});
  redB = this.add.text(825,275,'Red:' + redBDraws, {fontSize: '40px', fill:'#000'});
  redC = this.add.text(1425,275,'Red:' + redCDraws, {fontSize: '40px', fill:'#000'});

  blueA = this.add.text(200,325,'Blue:' + blueADraws, {fontSize: '40px', fill:'#000'});
  blueB = this.add.text(825,325,'Blue:' + blueBDraws, {fontSize: '40px', fill:'#000'});
  blueC = this.add.text(1425,325,'Blue:' + blueCDraws, {fontSize: '40px', fill:'#000'});

  greenA = this.add.text(200,375,'Green:' + greenADraws, {fontSize: '40px', fill:'#000'});
  greenB = this.add.text(825,375,'Green:' + greenBDraws, {fontSize: '40px', fill:'#000'});
  greenC = this.add.text(1425,375,'Green:' + greenCDraws, {fontSize: '40px', fill:'#000'});

  redChipA = this.add.sprite(325,525,'redChip').setScale(.5);
  blueChipA = this.add.sprite(325,525,'blueChip').setScale(.5);
  greenChipA = this.add.sprite(325,525,'greenChip').setScale(.5);
  redChipA.setVisible(false);
  blueChipA.setVisible(false);
  greenChipA.setVisible(false);

  redChipB = this.add.sprite(925,525,'redChip').setScale(.5);
  blueChipB = this.add.sprite(925,525,'blueChip').setScale(.5);
  greenChipB = this.add.sprite(925,525,'greenChip').setScale(.5);
  redChipB.setVisible(false);
  blueChipB.setVisible(false);
  greenChipB.setVisible(false);


  redChipC = this.add.sprite(1525,525,'redChip').setScale(.5);
  blueChipC = this.add.sprite(1525,525,'blueChip').setScale(.5);
  greenChipC = this.add.sprite(1525,525,'greenChip').setScale(.5);
  redChipC.setVisible(false);
  blueChipC.setVisible(false);
  greenChipC.setVisible(false);

  var buttonA = this.add.sprite(310,1040,'grey').setInteractive();
  buttonA.setScale(.1,.05);

  var buttonB = this.add.sprite(910,1040,'grey').setInteractive();
  buttonB.setScale(.1,.05);
  
  var buttonC = this.add.sprite(1510,1040,'grey').setInteractive();
  buttonC.setScale(.1,.05);

  resetA = this.add.text(200,1000,'Reset A', {fontSize:'60px', fill: '#000000', fontFamily: 'Verdana'});
  resetB = this.add.text(800,1000,'Reset B', {fontSize:'60px', fill: '#000000', fontFamily: 'Verdana'});
  resetC = this.add.text(1400,1000,'Reset C', {fontSize:'60px', fill: '#000000', fontFamily: 'Verdana'});



  bagA.on('pointerdown', function(pointer) {
    rollA();
  });

  bagB.on('pointerdown', function(pointer) {
    rollB(); 
  });

  bagC.on('pointerdown', function(pointer) {
    rollC(); 
  });

  buttonA.on('pointerdown', function(pointer) {
    this.setTint(0xC0C0C0);
  });

  buttonA.on('pointerup', function(pointer) {
    chipRA = false; 
    chipBA = false; 
    chipGA = false; 
    this.setTint(0xffffff);
    redoA();
  });

  buttonB.on('pointerdown', function(pointer) {
    this.setTint(0xC0C0C0);
  });

  buttonB.on('pointerup', function(pointer) {
    chipRB = false; 
    chipBB = false; 
    chipGB = false; 
    this.setTint(0xffffff);
    redoB();
  });

  buttonC.on('pointerdown', function(pointer) {
    this.setTint(0xC0C0C0);
  });

  buttonC.on('pointerup', function(pointer) {
    chipRC = false; 
    chipBC = false; 
    chipGC = false; 
    this.setTint(0xffffff);
    redoC();
  });



}

var chipRA = false; 
var chipBA = false; 
var chipGA = false; 

var chipRB = false; 
var chipBB = false;
var chipGB = false; 

var chipRC = false; 
var chipBC = false; 
var chipGC = false; 

function redoA() {
  redADraws = 0; 
  blueADraws = 0; 
  greenADraws = 0; 
  redA.setText('Red:' + redADraws);
  blueA.setText('Blue:' + blueADraws); 
  greenA.setText('Green:' + greenADraws);
}

function redoB() {
  redBDraws = 0; 
  blueBDraws = 0; 
  greenBDraws = 0; 
  redB.setText('Red:' + redBDraws);
  blueB.setText('Blue:' + blueBDraws); 
  greenB.setText('Green:' + greenBDraws);
}

function redoC() {
  redCDraws = 0; 
  blueCDraws = 0; 
  greenCDraws = 0; 
  redC.setText('Red:' + redCDraws);
  blueC.setText('Blue:' + blueCDraws); 
  greenC.setText('Green:' + greenCDraws);
}

function rollA() {
  var temp = Math.floor(Math.random() * 12) + 1;
  if(temp<=2) {
    chipBA = false;
    chipGA = false; 
    chipRA = true; 
    redADraws++;
    redA.setText('Red:' + redADraws);
  }
  else if(temp<=10) {
    chipRa = false;
    chipGA = false; 
    chipBA = true; 
    blueADraws++;
    blueA.setText('Blue:' + blueADraws);
  }
  else {
    chipRA = false;
    chipBA = false; 
    chipGA = true;
    greenADraws++;
    greenA.setText('Green:' + greenADraws);
  }
}


function rollB() {
  var temp = Math.floor(Math.random() * 12) + 1;
  if(temp<=4) {
    chipBB = false; 
    chipGB = false;
    chipRB = true; 
    redBDraws++;
    redB.setText('Red:' + redBDraws);
  }
  else if(temp<=8) {
    chipRB = false;
    chipGB = false; 
    chipBB = true;
    blueBDraws++;
    blueB.setText('Blue:' + blueBDraws);
  }
  else {
    chipRB = false; 
    chipBB = false; 
    chipGB = true;
    greenBDraws++;
    greenB.setText('Green:' + greenBDraws);
  }
}

function rollC() {
  var temp = Math.floor(Math.random() * 12) + 1;
  if(temp<=3) {
    chipBC = false;
    chipGC = false;
    chipRC = true; 
    redCDraws++;
    redC.setText('Red:' + redCDraws);
  }
  else if(temp<=5) {
    chipRC = false;
    chipGC = false; 
    chipBC = true;
    blueCDraws++;
    blueC.setText('Blue:' + blueCDraws);
  }
  else {
    chipRC = false; 
    chipBC = false; 
    chipGC = true;
    greenCDraws++;
    greenC.setText('Green:' + greenCDraws);
  }
}

function update() {
  if(chipRA==true) {
    redChipA.setVisible(true);
  }
  else {
    redChipA.setVisible(false);
  }
  if(chipBA==true) {
    blueChipA.setVisible(true);
  }
  else {
    blueChipA.setVisible(false);
  }
  if(chipGA==true) {
    greenChipA.setVisible(true);
  }
  else {
    greenChipA.setVisible(false);
  }

  if(chipRB==true) {
    redChipB.setVisible(true);
  }
  else {
    redChipB.setVisible(false);
  }
  if(chipBB==true) {
    blueChipB.setVisible(true);
  }
  else {
    blueChipB.setVisible(false);
  }
  if(chipGB==true) {
    greenChipB.setVisible(true);
  }
  else {
    greenChipB.setVisible(false);
  }

 if(chipRC==true) {
    redChipC.setVisible(true);
  }
  else {
    redChipC.setVisible(false);
  }
  if(chipBC==true) {
    blueChipC.setVisible(true);
  }
  else {
    blueChipC.setVisible(false);
  }
  if(chipGC==true) {
    greenChipC.setVisible(true);
  }
  else {
    greenChipC.setVisible(false);
  }
}

var scene1 = {
    preload,
    create,
    update,
  }

var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: "ffffff",
  physics: {
    default: 'arcade',
    arcade: {
      enableBody: true,
      debug: false,
      gravity: {}
    }
  },
  scene: scene1
};

const game = new Phaser.Game(config);