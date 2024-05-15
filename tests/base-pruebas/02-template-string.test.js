import { getSaludo } from "../../src/base-pruebas/02-template-string.js";

describe("Prueba al 02-template-string", () => {
  test('getSaludo debe devolver "Hola Eric"', () => {
    const name = "Eric";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
