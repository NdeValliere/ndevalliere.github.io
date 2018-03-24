float a,b,h,xpos,ypos,oxpos,oypos,zxpos,zypos,t,ot,d,od;
int centerX,centerY;

//Audio code
// import processing.sound.*;
// AudioIn input;
// Amplitude rms;
// int scale=1;

void setup() {
  size(440, 440, P3D);
  background(250);
  centerX = width/2;
  centerY = height/2;

  //Audio
  //Create an Audio input and grab the 1st channel
  // input = new AudioIn(this, 0);
  //
  // // start the Audio Input
  // input.start();
  //
  // // create a new Amplitude analyzer
  // rms = new Amplitude(this);
  //
  // // Patch the input to an volume analyzer
  // rms.input(input);
}

void draw() {
  background((mouseX+mouseY)/2.5);
  camera(1800.0, 1200.0, 2400.0, // eyeX, eyeY, eyeZ
         0.0, 0.0, 0.0, // centerX, centerY, centerZ
         1.0, 0.0, 1.0); // upX, upY, upZ

  // a = mouseX-rms.analyze()*1000;
  // b = rms.analyze()*10;
  // h = mouseY-rms.analyze()*5000;

  a = mouseX;
  b = 60;
  h = mouseY;

  for(int i=1; i<361; i+=1) {
    t = radians(i);
    ot = radians(i-1);
    d = a*t;
    od = a*ot;

    oxpos = (a-b)*cos(ot)+h*cos(od);
    oypos = (a-b)*sin(ot)+h*sin(od);

    xpos = (a-b)*cos(t)+h*cos(d);
    ypos = (a-b)*sin(t)+h*sin(d);

    zxpos = (a-b)*cos(ot)-h*cos(od);
    zypos = (a-b)*sin(t)-h*sin(d);


    strokeWeight(0.1);
    stroke(250-((mouseX+mouseY)/2.5),250-((mouseX+mouseY)/2.5),250-((mouseX+mouseY)/2.5));
    line(centerX+oxpos, centerY+oypos, centerX+xpos, centerY+ypos, centerX+zxpos, centerY+zypos);
  }
}
