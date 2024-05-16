import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("06-deses-obj", () => {
  test("should usContext return a object", () => {
    const superHeroe = {
      nombreClave: "batman",
      anios: 45,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
    const Heroe = usContext({ clave: "batman", edad: 45 });
    expect(superHeroe).toEqual(Heroe);
  });
});
