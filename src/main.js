import { InGameView } from "./views/InGameView";
import { InitView } from "./views/InitView";
import { InLobyView } from "./views/InLobyView";

class View {
  constructor() {
    this.initView = new InitView(this);
    this.inLobyView = new InLobyView(this);
    this.inGameView = new InGameView(this);
  }

  init() {
    this.currentView = this.inGameView;
    this.currentView.show();
  }

  createMatch() {
    this.currentView.hide();
    this.currentView = this.inLobyView;
    this.currentView.show();
  }

  startMatch() {
    this.currentView.hide();
    this.currentView = this.inGameView;
    this.inGameView.show();
  }
}

new View().init();
