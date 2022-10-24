export class Tile {
  constructor(left, top, size, value, element) {
    this.left = left;
    this.top = top;
    this.size = size;
    this.value = value;
    this.element = element;
    this.isEmpty = false;
  }

  swap(other) {
    const dx = Math.abs(this.left - other.left);
    const dy = Math.abs(this.top - other.top);

    const x = this.left;
    const y = this.top;

    this.left = other.left;
    this.top = other.top;

    this.element.style.left = `${this.left * this.size}px`;
    this.element.style.top = `${this.top * this.size}px`;

    other.left = x;
    other.top = y;

    other.element.style.left = `${other.left * other.size}px`;
    other.element.style.top = `${other.top * other.size}px`;

    return (dx + dy > 1) ? false : true;
  }
}