export default class Derrota extends Phaser.Scene {
    constructor() {
      super("Derrota");
    }
   
    create() {
      this.add.image(400, 300, "Derrota")
        .setInteractive()
        .on("pointerdown", () => this.scene.start("Mapas"));
    }
  }