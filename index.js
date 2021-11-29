const frameRate = 30;

class Entity {
  constructor(tag, X, Y) {
    this.tag = document.getElementById(tag);
    this.X = X;
    this.Y = Y;
    this.pos = null;
    this.tag.style.top = this.Y + "px";
    this.tag.style.left = this.X + "px";
  }

  movetop() {
    clearInterval(this.pos);
    this.pos = setInterval(() => {
      if (this.Y > 0) {
        this.Y -= 10;
        this.tag.style.top = this.Y + "px";
      } else {
        this.movedown();
      }
    }, frameRate);
  }

  moveright() {
    clearInterval(this.pos);
    this.pos = setInterval(() => {
      if (this.X < window.innerWidth - 50) {
        this.X += 10;
        this.tag.style.left = this.X + "px";
      } else {
        this.moveleft();
      }
    }, frameRate);
  }

  movedown() {
    clearInterval(this.pos);
    this.pos = setInterval(() => {
      if (this.Y < window.innerHeight - 50) {
        this.Y += 10;
        this.tag.style.top = this.Y + "px";
      } else {
        this.movetop();
      }
    }, frameRate);
  }
  moveleft() {
    clearInterval(this.pos);
    this.pos = setInterval(() => {
      if (this.X > 0) {
        this.X -= 10;
        this.tag.style.left = this.X + "px";
      } else {
        this.moveright();
      }
    }, frameRate);
  }

  move(e) {
    switch (e.key) {
      case "ArrowDown":
        this.movedown();
        break;
      case "ArrowUp":
        this.movetop();
        break;
      case "ArrowRight":
        this.moveright();
        break;
      case "ArrowLeft":
        this.moveleft();
        break;
    }
  }

  RamdomMove() {
    let time = Math.floor(Math.random() * 2000 + 300);
    console.log(time);
    setInterval(() => {
      const directions = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"];
      let e = {
        key: directions[Math.floor(Math.random() * directions.length)],
      };
      this.move(e);
    }, time);
  }
}

let player = new Entity("player", 0, 0);
let ghost1 = new Entity("ghost1", 200, 200);
let ghost2 = new Entity("ghost2", 200, 200);
let ghost3 = new Entity("ghost3", 200, 200);
let ghost4 = new Entity("ghost4", 200, 200);
let ghost5 = new Entity("ghost5", 200, 200);

addEventListener("keydown", (e) => {
  player.move(e);
});

ghost1.RamdomMove();
ghost2.RamdomMove();
ghost3.RamdomMove();
ghost4.RamdomMove();
ghost5.RamdomMove();
