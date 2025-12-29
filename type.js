let typingMenu = true;
let t = "";
let TEXT_LIM = 53;

let noNoWords = ["damn", "fuck", "shit", "bitch", "ass"]; // Had to add this because my friend cant control his potty mouth

let btnUp = 0;
let canClick = true;

let sendUp = 0;

let exitUp = 0;

let W_W = 1280;
let W_H = 720;

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
    textAlign(CENTER);
    textWrap(WORD);
    textWrap(CHAR);
    textSize(23);
    fill(0);
    text(t, W_W/2, 50, 1000);
  }
}

function drawSendBtn() {
  sendUp *= 0.9;
  if (typingMenu) {
    rectMode(CENTER);
    fill(0, 255, 0);
    rect(W_W-70, 200, 160 + sendUp, 80 + sendUp);
    fill(255);
    textSize(48 + sendUp);
    text("send", W_W-70, 210);
  }
}

function drawExitBtn() {
  exitUp *= 0.9;
  if (typingMenu) {
    image(exit, W_W-100, 50, 100 + exitUp, 100 + exitUp);
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, W_W-70, 200) < 50 && typingMenu) {
    sendMail();
    sendUp += 6;
    setTimeout(() => {
      toPage("index");
    },1000);
  }
  if (dist(mouseX, mouseY, W_W-100, 50) < 100 && typingMenu) {
    setTimeout(() => {
      toPage("index");
    },1000);
  }
}

function addFilter() {
  for (let i = 0; i < noNoWords.length; i++) {
    if (t.toLowerCase().includes(noNoWords[i].toLowerCase())) {
      t = t.replace(new RegExp(noNoWords[i], "gi"), "");
    }
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
