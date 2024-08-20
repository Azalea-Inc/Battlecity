import { InCreateScene } from "./scenes/InCreateScene";
import { InGameScene } from "./scenes/InGameScene";
import { InLobbyScene } from "./scenes/InLobbyScene";
import { StartScene } from "./scenes/StartScene";



const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [StartScene, InGameScene, InCreateScene, InLobbyScene],
  parent: 'app',
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

export default new Phaser.Game(config);