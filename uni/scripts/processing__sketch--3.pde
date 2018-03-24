float rot = 0;

int rows = 27; //amount of letters in total
int cols = 51;

float siz;

PFont f;
String[] letters = {"S","E","A","S","O","N","S"," ","G","R","E","E","T","I","N","G","S"," ","F","R","O","M"," ","A","L","L"," ","A","T"," ","C","E","N","T","R","A","L"," ","S","A","I","N","T"," ","M","A","R","T","I","N","S"," "," "," "," "," "," ","  "," "," "," "," "," "," "," ","  "," "," "," "," "," "," "," ","  "," "," "," "," "," "," "," ","  "," "," "," "," "," "," "," ","  "," "," "," "," "," "," "," ","  "," "};

//color whiteStart = color(250,250,250);
//color redEnd = color(250,0,0);

void setup() {
  frameRate(10);

  size(900, 300, P3D);
  siz = width/cols;

  f = createFont("GothamPro-Bold.otf", siz);
  textFont(f);
  textAlign(CENTER, CENTER);
}

void draw() {
  background(250,250,250);
  fill(250,0,0);
  noCursor();

    for (int x=0; x<cols+1; x++) {
      rot=+ mouseX * x * 0.01;
      for (int y=0; y<rows+1; y++) {
        pushMatrix();
        translate(x*siz, y*siz); //e.g. 1 * 1440/30
        rotate(radians(rot*y));
        text(letters[x], siz/2, siz*2); //make lines in center of all grid squares
        popMatrix();

      //if (mouseX > (0.9*displayWidth) && mouseY > (0.9*displayHeight)) {
      //  fill(lerpColor(whiteStart, redEnd, (millis()%5000)/5000.0));
      //  rect(0,0,displayWidth,displayHeight);
      //}
    }
  }
}
