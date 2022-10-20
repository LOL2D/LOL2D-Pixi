// https://radzion.com/blog/linear-algebra/vectors

export const toDegrees = (radians) => (radians * 180) / Math.PI;
export const toRadians = (degrees) => (degrees * Math.PI) / 180;

export class Vector {
  constructor(...components) {
    this.components = components;
  }

  add({ components }) {
    return new Vector(
      ...components.map(
        (component, index) => this.components[index] + component
      )
    );
  }

  subtract({ components }) {
    return new Vector(
      ...components.map(
        (component, index) => this.components[index] - component
      )
    );
  }

  scaleBy(number) {
    return new Vector(
      ...this.components.map((component) => component * number)
    );
  }

  length() {
    return Math.hypot(...this.components);
  }

  dotProduct({ components }) {
    return components.reduce(
      (acc, component, index) => acc + component * this.components[index],
      0
    );
  }

  normalize() {
    return this.scaleBy(1 / this.length());
  }

  haveSameDirectionWith(other) {
    const dotProduct = this.normalize().dotProduct(other.normalize());
    return areEqual(dotProduct, 1);
  }

  haveOppositeDirectionTo(other) {
    const dotProduct = this.normalize().dotProduct(other.normalize());
    return areEqual(dotProduct, -1);
  }

  isPerpendicularTo(other) {
    const dotProduct = this.normalize().dotProduct(other.normalize());
    return areEqual(dotProduct, 0);
  }

  // 3D vectors only
  crossProduct({ components }) {
    return new Vector(
      this.components[1] * components[2] - this.components[2] * components[1],
      this.components[2] * components[0] - this.components[0] * components[2],
      this.components[0] * components[1] - this.components[1] * components[0]
    );
  }

  angleBetween(other) {
    return toDegrees(
      Math.acos(this.dotProduct(other) / (this.length() * other.length()))
    );
  }

  negate() {
    return this.scaleBy(-1);
  }

  projectOn(other) {
    const normalized = other.normalize();
    return normalized.scaleBy(this.dotProduct(normalized));
  }

  withLength(newLength) {
    return this.normalize().scaleBy(newLength);
  }

  equalTo({ components }) {
    return components.every((component, index) =>
      areEqual(component, this.components[index])
    );
  }
}
