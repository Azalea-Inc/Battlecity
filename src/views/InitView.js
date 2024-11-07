export class InitView {
  constructor(mainView) {
    this.mainView = mainView;
    this.view = document.getElementById("INIT");
    this.hide();
    this.setup();
  }

  setup() {
    this.createButton = document.getElementById("create-button");
    this.createButton.addEventListener("click", (event) => {
      this.mainView.createMatch();
    });
  }

  hide() {
    this.view.style.display = "none";
  }

  show() {
    this.view.style.display = "block";
  }
}
