it('detecta a ausência de asserção quando a promessa não é aguardada', () => {
  expect.assertions(1);
  const promessa = new Promise<{ ok: boolean }>((resolve) => {
    setTimeout(() => resolve({ ok: true }), 30);
  });
  expect(promessa).resolves.toEqual({ ok: true });
});
