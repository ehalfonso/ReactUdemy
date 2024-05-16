import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Prueba 05-funciones", () => {
  test("getUser return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(testUser).toEqual(user);
  });
  test("should getUsuarioActivore return an object", () => {
    const name = "Eric";
    const getUser = getUsuarioActivo(name);

    const usuario = {
      uid: "ABC567",
      username: "Eric",
    };
    expect(getUser).toEqual(usuario);
  });
});
