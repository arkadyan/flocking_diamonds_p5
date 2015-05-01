var LENGTH = 50;
var WIDTH = 30;

var Z_SCALE_WEIGHT = 0.3;
var Z_SCALE_OFFSET = 4.0;

Diamond = function(_position, _color) {
  if ( !(this instanceof Diamond) ) {
    return new Diamond( _position );
  }

  this.position = _position;
  this.color = _color;
  this.velocity = createVector(0, 0);
};

Diamond.prototype.draw = function() {
	// Draw a diamond rotated in the direction of velocity.
  var theta = this.velocity.heading() + PI*0.5;
  var zScale;

	// Determine the amount to scale the drawing based on the
	// z dimension of the position.
  zScale = (this.position.z + Z_SCALE_OFFSET) * Z_SCALE_WEIGHT;

	noStroke();
  fill(this.color);

  push();

  translate(this.position.x, this.position.y);
  rotate(theta);

	// Define the shape.
  beginShape();
  vertex(0, +0.5*LENGTH*zScale);
  vertex(+0.5*WIDTH*zScale, 0);
  vertex(0, -0.5*LENGTH*zScale);
  vertex(-0.5*WIDTH*zScale, 0);
  endShape(CLOSE);

  pop();
};
