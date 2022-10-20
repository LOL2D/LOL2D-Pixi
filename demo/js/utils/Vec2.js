// https://gist.github.com/jjgrainger/808640fcb5764cf92c3cad960682c677

export class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  // return the angle of the vector in radians
  getDirection() {
    return Math.atan2(this.y, this.x);
  }

  // set the direction of the vector in radians
  setDirection(angle) {
    var magnitude = this.getMagnitude();
    this.x = Math.cos(angle) * magnitude;
    this.y = Math.sin(angle) * magnitude;
  }

  // get the magnitude of the vector
  getMagnitude() {
    // use pythagoras theorem to work out the magnitude of the vector
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // set the magnitude of the vector
  setMagnitude(magnitude) {
    var direction = this.getDirection();
    this.x = Math.cos(direction) * magnitude;
    this.y = Math.sin(direction) * magnitude;
  }

  // add two vectors together and return a new one
  add(v2) {
    return new Vec2(this.x + v2.x, this.y + v2.y);
  }

  // add a vector to this one
  addTo(v2) {
    this.x += v2.x;
    this.y += v2.y;
  }

  // subtract two vectors and reutn a new one
  subtract(v2) {
    return new Vec2(this.x - v2.x, this.y - v2.y);
  }

  // subtract a vector from this one
  subtractFrom(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
  }

  // multiply this vector by a scalar and return a new one
  multiply(scalar) {
    return new Vec2(this.x * scalar, this.y * scalar);
  }

  // multiply this vector by the scalar
  multiplyBy(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }

  // scale this vector by scalar and return a new vector
  divide(scalar) {
    return new Vec2(this.x / scalar, this.y / scalar);
  }

  // scale this vector by scalar
  divideBy(scalar) {
    this.x /= scalar;
    this.y /= scalar;
  }

  copy() {
    return new Vec2(this.x, this.y);
  }

  // dot product of two vectors
  dotProduct(v2) {
    return this.x * v2.x + this.y * v2.y;
  }

  // normalize a given vector
  normalize() {
    return new Vec2(
      this.x / Math.sqrt(this.x * this.x + this.y * this.y),
      this.y / Math.sqrt(this.x * this.x + this.y * this.y)
    );
  }
}
