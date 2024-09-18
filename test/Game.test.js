test("Al crear el objeto la longitud de players es 0", () => {
  const game = new Game();
  expect(game.getPlayers().length).toBe(0);
});


test("Al añadir los jugadores la cantidad debe ser cuatro", () => {
    const game = new Game();
    game.setPlayers();
    expect(game.getPlayers().length).toBe(0);
  });