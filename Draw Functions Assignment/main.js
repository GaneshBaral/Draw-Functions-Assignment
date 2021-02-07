// Draw functions assignment
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Rectangular platforms

// Left platform
fill("orange");
rect(20, 250, 200, 70, "fill"); // Bottom color

fill("green");
rect(20, 248, 200, 15, "fill"); // Top color

// Right platform
fill("red");
rect(580, 302, 200, 70, "fill"); // Bottom color

fill("black");
rect(580, 300, 200, 15, "fill"); // Top color

// Middle platform
fill("brown");
rect(300, 500, 400, 70, "fill"); // Bottom color

fill("blue");
rect(300, 498, 400, 20, "fill"); // Top color

// Circular objects

// Top right
fill("lavender");
circle(700, 60, 50, "fill"); // Top right outer fill

fill("lime");
circle(700, 60, 40, "fill"); // Top right inner fill

// Left Middle
fill("purple");
circle(200, 198, 50, "fill"); // Left platform outer

fill("blue");
circle(200, 198, 40, "fill"); // Left platform inner
