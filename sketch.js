let typingMenu = false;
let t = "";
let TEXT_LIM = 53;

let noNoWords = ["damn", "fuck", "shit", "bitch", "ass"]; // Had to add this because my friend cant control his potty mouth

let btnUp = 0;
let canClick = true;

let sendUp = 0;

let exitUp = 0;

let ideaCount = 0;
let IDEA_ROW_LIM = 8;
let MARGIN = 110;
let ideaTitle;

let titleFloat = 0;

let windowWidth = 1280;
let windowHeight = 720;

function preload() {
  icoImg = loadImage("https://i.imgur.com/qutv04r.png");
  plus = loadImage("https://i.imgur.com/mrSO2WQ.png");
  ideaIco = loadImage("https://i.imgur.com/Rsn7YFg.png");
  paperBg = loadImage("https://i.imgur.com/MXoOIrG.png");
  exit = loadImage("https://i.imgur.com/spVfoNI.png");
}

function setup() {
  let CANVAS = createCanvas(windowWidth, windowHeight);
  CANVAS.position(0, 0);
}

function draw() {
  background(255);
  drawLogo();
  drawNewIdeaBtn();
}

function drawLogo() {
  titleFloat = sin(frameCount * 0.05) * 6;
  image(icoImg, 0, 50, titleFloat + 100, titleFloat + 100);
  textSize(titleFloat + 48);
  strokeWeight(6);
  stroke(5);
  fill(255);
  text("IDEAZ", 100, 120);
}

function drawNewIdeaBtn() {
  btnUp *= 0.9;
  rectMode(CENTER);
  image(plus, windowWidth-100, 50, btnUp + 100, btnUp + 100);
}

function mousePressed() {
  if (dist(mouseX, mouseY, windowWidth-100, 50) < 100 && canClick === true) {
    toPage("type");
  }
}

function drawIdea() {
  for (let i = 0; i < ideaCount; i++) {
    let Y_MARGIN = 150;
    let x = 100 + (i % IDEA_ROW_LIM) * MARGIN;
    let y = 200 + Math.floor(i / IDEA_ROW_LIM) * Y_MARGIN;
    image(ideaIco, x, y, 100, 100);
  }
}

function toPage(page){
  window.location.href = page+".html";
}
