class Menu {
  constructor(selector) {
    this.el = document.querySelector(selector);

    document.body.addEventListener("click", (event) => {
      if (event.target.offsetParent !== this.el) {
        this.close();
      }
    });
  }

  open() {
    throw new Error(`"open" method should be implemented in Menu"`);
  }

  close() {
    throw new Error(`"close" method should be implemented in Menu"`);
  }

  add() {
    throw new Error(`"add" method should be implemented in Menu"`);
  }
}

class ContextMenu extends Menu {
  static dataType = "backgroundModule";

  constructor(selector) {
    super(selector);
    this.bodyEl = document.querySelector(selector);
  }
  open() {
    const menuArea = document.querySelector("body");
    const menu = document.querySelector(".menu");
    menuArea.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      menu.style.top = `${event.clientY}px`;
      menu.style.left = `${event.clientX}px`;
      menu.classList.add("open");
    });
    menu.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
      },
      false
    );
    document.querySelector("#l1").addEventListener(
      "click",
      () => {
        trigger();
      },
      false
    );
    document.querySelector("#l2").addEventListener(
      "click",
      () => {
        trigger();
      },
      false
    );
    document.querySelector("#l3").addEventListener(
      "click",
      () => {
        trigger();
      },
      false
    );
    document.querySelector("#l4").addEventListener(
      "click",
      () => {
        trigger();
      },
      false
    );
  }

  close() {
    const menu = document.querySelector(".menu");
    document.addEventListener(
      "click",
      (event) => {
        if (event.button !== 2) {
          menu.classList.remove(`open`);
        }
      },
      false
    );
  }

  add() {
    Object.values(this.modules).forEach((module) => {
      this.el.insertAdjacentHTML("beforeend", module.toHTML());
      this.modules instanceof Module;
    });
  }
}

const menuArea = new ContextMenu("body");

menuArea.open();
