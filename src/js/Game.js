import { Timer } from './Timer';
import { Stats } from './Stats';
import { Tile } from './Tile';
import { Score } from './Score';

export class Game {
  constructor(level = 4) {
    this.level = level; // level
    this.tiles = [];  // cells

    this.timer = new Timer();
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
    // set the background color
    this.setBackgroundColor();

    // create HTML structure
    this.createHTMLStructure();
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

  createHTMLStructure() {
    const wrapper = this.buildHTMLElement('div', document.body, [{name: 'class', value: 'wrapper'}]);
    const container = this.buildHTMLElement('div', wrapper, [{name: 'class', value: 'container'}]);
    const infoPanel = this.buildHTMLElement('div', container, [{name: 'class', value: "panel"}]);
    this.createInfoPanel(infoPanel);
    const gameField = this.buildHTMLElement('div', container, [{name: 'class', value: "field"}]);
    const settingPanel = this.buildHTMLElement('div', container, [{name: 'class', value: "panel"}]);
  }

  buildHTMLElement(tagName, parent = null, attr = null) {
    const element = document.createElement(tagName);
    if (attr) {
      for (const {name, value} of attr) {
        element.setAttribute(name, value);
      }
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }

  createInfoPanel(parent) {
    const time = this.buildHTMLElement('div', parent, [{name: 'class', value: "time"}]);
    const moves = this.buildHTMLElement('div', parent, [{name: 'class', value: 'moves'}]);
    time.textContent = `Time: ${this.timer.get()}`;
    moves.textContent = `Moves: ${this.moveCounter}`;
    setInterval(() => {
      time.textContent = `Time: ${this.timer.get()}`;
    }, 1000);
  }
}