let typingMenu = false;
let t = "";
let noNoWords = ["Fuck", "Shit", "Bastard", "Bitch", "Nigger", "Nigga"];

let btnUp = 0;
let canClick = true;

let sendUp = 0;

let exitUp = 0;

let ideaCount = 0;
let IDEA_ROW_LIM = 8;
let MARGIN = 110;
let ideaTitle;

let windowWidth = 1920;
let windowHeight = 1080;

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

  drawPaperBg();
  drawTypedText();
  drawLogo();
  drawNewIdeaBtn();
  drawIdea();
  drawSendBtn();
  drawExitBtn();
}

function drawLogo() {
  image(icoImg, 0, 50, 100, 100);
  textSize(48);
  strokeWeight(6);
  stroke(5);
  fill(255);
  text("IDEAZ", 100, 120);
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

function mousePressed() {
  if (dist(mouseX, mouseY, 1780, 50) < 100 && canClick === true) {
    print("clicked");
    btnUp += 6;
    ideaCount += 1;
    print(ideaCount);
    canClick = false;
    typingMenu = true;
  }
  if (dist(mouseX, mouseY, windowWidth / 2, 180) < 50 && typingMenu === true) {
    sendMail();
    sendUp += 6;
  }
  if (
    dist(mouseX, mouseY, windowHeight + 80, 120) < 100 &&
    typingMenu === true
  ) {
    typingMenu = false;
    exitUp += 6;
    canClick = true;
    t = "";
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
  }
}
