import { Timer } from './Timer';
//import { Color } from './Color';
import { Stats } from './Stats';
import { Tile } from './Tile';

export class Game {
  constructor(level = 4) {
    this.level = level; // level
    this.tiles = [];  // cells

    this.timer = new Timer();
    //this.color = new Color();
    this.stats = new Stats();

    this.moveCounter = 0;
    this.moves = [];
    this.firstClick = true;

    this.tileSize = 100;
  }

  init() {
    for (let i = 0; i < (this.level ** 2); ++i) {
      const x = i % this.level;
      const y = Math.trunc(i / this.level);
      this.tiles[i] = new Tile(x, y, this.tileSize, i+1, null);
      if (i === (this.level ** 2 - 1)) {
        this.tiles[i].isEmpty = true;
      }
    }

    this.setBackgroundColor();
    return;
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
  }

  setBackgroundColor () {
    const leftColor = this.getRandomColor();
    const rightColor = this.getRandomColor();
    const angle = 'to right';

    document.body.style.background = `linear-gradient(${angle}, ${leftColor}, ${rightColor})`;
  }
}