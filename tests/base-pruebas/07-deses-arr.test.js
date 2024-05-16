import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Test in 07-deses-arr", () => {
  test("should return a string and number", () => {
    const [letters, number] = retornaArreglo();

    expect(typeof letters).toBe("string");
    // expect(letters).toEqual(expect.any(String));
    // expect(letters).toBe("ABC");
  });
});
