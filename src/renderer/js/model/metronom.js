import ko from "knockout";
import path from "path";

class Metronom {
  constructor() {
    // normal attributes
    this.barSound = new Audio(path.join(__static, "/metro_beat.wav"));
    this.beatSound = new Audio(path.join(__static, "/metro_bar.wav"));
    this.metronomeInterval = null;

    // ko attributes
    this.tempo = ko.observable(100);
    this.isPaused = ko.observable(true);
    this.tempoPart = ko.observable(-1);

    // methods
    this.playSound = () => {
      if (this.tempoPart() === 0) {
        this.beatSound.play();
      } else if (!(this.tempoPart() % 2) && this.tempoPart() > 0) {
        this.barSound.play();
      }
    };

    this.metronomeLoop = () => {
      this.tempoPart(this.tempoPart() + 1);
      if (this.tempoPart() >= 8) {
        this.tempoPart(0);
      }
      this.playSound();
    };

    // ko methods
    this.togglePause = () => {
      this.isPaused(!this.isPaused());
      if (!this.isPaused()) {
        const { metronomeLoop } = this;
        this.metronomeInterval = setInterval(
          metronomeLoop,
          60000 / (this.tempo() * 2)
        );
      } else {
        clearInterval(this.metronomeInterval);
        this.metronomeInterval = null;
        this.tempoPart(-1);
      }
    };
  }
}

export default Metronom;
