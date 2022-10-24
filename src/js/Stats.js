export class Stats {
  constructor() {
    this.stats = JSON.parse(localStorage.getItem('stats') || '[]');
  }

  set(value) {
    this.stats.push(value);
    localStorage.setItem('stats', JSON.stringify(this.stats));
  }

  get() {
    this.stats.sort((left, right) => {
      return (left.rating > right.rating) ? -1 : ((left.rating < right.rating) ? 1 : 0);
    });
    this.stats = this.stats.slice(0, 10);
    return this.stats;
  }
}