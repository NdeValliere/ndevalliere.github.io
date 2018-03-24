boolean prediction = true;

float rot = 0;
int rows = 30;
int cols = 30;
float siz;

void setup() {
  size(900, 500, P3D);
  siz = width/cols;
}

void draw() {

  background(255);

  for (int x=0; x<cols+1; x++) {
    for (int y=0; y<rows+1; y++) {
      pushMatrix();
      translate(x*siz, y*siz);
      rotate(radians(rot+x+y));
      line(siz/2, 0, siz/2, siz);
      popMatrix();
    }
  }

//if (mouseX > (displayWidth/2) || mouseY > (displayHeight/2)){
//    prediction = false;
//  }
//  else {
//    prediction = true;
//  }

  if (prediction) {
    rot++;
  }

  if (!prediction) {
    rot--;
  }

}
