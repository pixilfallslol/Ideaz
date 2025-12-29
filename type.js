let typingMenu = true;
let t = "";
let TEXT_LIM = 53;

let noNoWords = ["damn", "fuck", "shit", "bitch", "ass"]; // Had to add this because my friend cant control his potty mouth

let btnUp = 0;
let canClick = true;

let sendUp = 0;

let exitUp = 0;

let W_W = 1920;
let W_H = 1080;

function preload() {
  ideaIco = loadImage("https://i.imgur.com/Rsn7YFg.png");
  paperBg = loadImage("https://i.imgur.com/MXoOIrG.png");
  exit = loadImage("https://i.imgur.com/spVfoNI.png");
}

function setup() {
  let CANVAS = createCanvas(W_W, W_H);
  CANVAS.position(0, 0);
  resetText();
}

function draw() {
  background(255);
  drawPaperBg();
  drawTypedText();
  drawSendBtn();
  drawExitBtn();
  addFilter();
}

function resetText(){
  print("reset");
  btnUp += 6;
  canClick = false;
  typingMenu = true;
}

function drawTypedText() {
  if (typingMenu === true) {
    textSize(23);
    fill(255);
    text(t, 720, 265);
  }
}

function drawNewIdeaBtn() {
  btnUp *= 0.9;
  rectMode(CENTER);
  image(plus, 1780, 50, btnUp + 100, btnUp + 100);
}

function drawSendBtn() {
  sendUp *= 0.9;
  if (typingMenu) {
    fill(0, 255, 0);
    rect(windowWidth / 2, 180, 160 + sendUp, 80 + sendUp);
    fill(255);
    textSize(48 + sendUp);
    text("send", windowWidth / 2 - 50, 200);
  }
}

function drawExitBtn() {
  exitUp *= 0.9;
  if (typingMenu) {
    image(exit, windowHeight + 80, 120, 100 + exitUp, 100 + exitUp);
  }
}

function mousePressed(){
  if (dist(mouseX, mouseY, windowWidth / 2, 180) < 50 && typingMenu === true) {
    sendMail();
    sendUp += 6;
  }
  if (dist(mouseX, mouseY, windowHeight + 80, 120) < 100 && typingMenu === true) {
    typingMenu = false;
    exitUp += 6;
    canClick = true;
    t = "";
    toPage("index")
  }
}

function addFilter() {
  for (let i = 0; i < noNoWords.length; i++) {
    if (t.toLowerCase().includes(noNoWords[i].toLowerCase())) {
      t = t.replace(new RegExp(noNoWords[i], "gi"), "");
    }
  }
}

function drawPaperBg() {
  if (typingMenu) {
    imageMode(CENTER);
    image(paperBg, windowWidth / 2, windowHeight / 2);
    imageMode(CORNER);
  }
}

function sendMail(event) {
  let parms = {
    title: "IDEA FROM IDEAZ!",
    message: t,
    name: "Ideaz User",
    email: "no-reply@ideaz.com",
  };

  emailjs
    .send("service_1d0x9v8", "template_0dpvd9j", parms)
    .then(alert("SENT!"));
}

function toPage(page){
  window.location.href = page+".html";
}

function keyTyped() {
  if (typingMenu) {
    t += key;
    t = t.replace("Enter", "");
  }
}

function keyPressed() {
  if (typingMenu) {
    if (keyCode === ENTER) {
      t = t + "\n";
    }
    if (keyCode === BACKSPACE) {
      if (t.length > 0) {
        t = t.substring(0, t.length - 1);
      }
    }
    if (keyCode === " ") {
      return false;
    }
  }
}
