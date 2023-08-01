export default class Ganar extends Phaser.Scene {
  constructor() {
    super("Ganar");
  }

  init({ timer, score2, TirosHechos }) {
    this.timer = timer;
    this.score2 = score2;
    this.TirosHechos = TirosHechos
  }

  create() {

    this.add.image(400, 300, "ganar")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("Inicio"));

    this.add.image(750, 550, "Siguiente").setScale(1).setInteractive()
    .on("pointerdown", () => this.scene.start("Inicio"));
    
    this.TirosHechosText = this.add.text(330, 196, "" + this.TirosHechos, {
      fontSize: "50px",
      fontStyle: "bold",
      fill: "#87CEEB", 
    });
 
    this.add.text(500, 460, " " + this.score2, {
      fontSize: "50px",
      fontStyle: "bold",
      fill: "#87CEEB",
    });

    this.timer++;
    this.add.text(375, 320, "" + this.timer, {
      fontSize: "50px",
      fontStyle: "bold",
      fill: "#87CEEB",
    });

  }
}