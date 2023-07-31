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
    
    this.TirosHechosText = this.add.text(350, 50, "Tiros Hechos " + this.TirosHechos, {
      fontSize: "20px",
      fontStyle: "bold",
      fill: "#00FF00", 
    });
 
    this.add.text(20, 80, "Cantidad de estrellas recolectadas " + (this.score2 ), {
      fontSize: "20px",
      fontStyle: "bold",
      fill: "#00FF00",
    });

    this.timer++;
    this.add.text(350, 20, "Tiempo " + this.timer, {
      fontSize: "20px",
      fontStyle: "bold",
      fill: "#00FF00",
    });

    this.add.image(400, 300, "ganar")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("Inicio"));
  }
}