let typingMenu = true
let t = ""
let noNoWords = ["Fuck","Shit","Damn","Bitch","Nigger","Nigga"]

let windowWidth = 1920
let windowHeight = 1080

function preload() {
}

function setup() {
  let CANVAS = createCanvas(windowWidth, windowHeight)
  CANVAS.position(0,0)
}

function draw(){
  background(255)
  
  fill(0)
  text(t,windowHeight/2, windowHeight/2)
  print(t)
}

function keyTyped() {
  if (typingMenu) {
    t += key
    t = t.replace("Enter", "");
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    t = t+"\n"
  }
  if (keyCode === BACKSPACE) {
    if (t.length > 0) {
      t = t.substring(0, t.length-1);
    }
  }
}