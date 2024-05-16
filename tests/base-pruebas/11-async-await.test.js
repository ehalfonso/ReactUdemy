import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Test in 11-async-await", () => {
  test("should return image url", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });
});
