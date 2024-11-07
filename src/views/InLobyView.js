export class InLobyView {
  constructor(mainView) {
    this.mainView = mainView;
    this.view = document.getElementById("IN_LOBY");
    this.hide();
    this.setup();
  }

  setup() {
    this.startMatchButton = document.getElementById("startMatchButton");
    this.startMatchButton.addEventListener("click", (e) => {
      this.mainView.startMatch();
    });
  }

  hide() {
    this.view.style.display = "none";
  }

  show() {
    this.view.style.display = "block";
  }
}
