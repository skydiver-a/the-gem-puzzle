export class Timer {
  constructor() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      ++this.seconds;
      if (this.seconds > 59) {
        ++this.minutes;
      }
      if (this.minutes > 59) {
        ++this.hours;
      }
      this.seconds %= 60;
      this.minutes %= 60;
      this.hours %= 24;
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }

  stop() {
    this.pause();
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  get() {
    const hh = `${this.hours}`;
    const mm = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`;
    const ss = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`;
    return `${hh}:${mm}:${ss}`;
  }
}