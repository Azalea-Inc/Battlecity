import { Player } from "../src/models/Player.js";

test("Al crear jugador la vida debe ser 100", () => {
  const player = new Player();
  expect(player.getHealth()).toBe(100);
});

test("Al recibir cuatro ataques la vida debe ser 0", () => {
  const player = new Player();

  player.damage();
  player.damage();
  player.damage();
  player.damage();

  expect(player.getHealth()).toBe(0);
});

test("Al recibir cuatro ataques y tomar un potenciador la vida debe ser 25", () => {
  const player = new Player();

  player.damage();
  player.damage();
  player.damage();
  player.damage();

  player.heal();

  expect(player.getHealth()).toBe(25);
});
