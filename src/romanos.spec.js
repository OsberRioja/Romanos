import romanizar from "./romanos.js";

describe("Romanizar", () => {
  it("si el numero es 1 devuelve 'I'", () => {
    expect(romanizar(1)).toEqual("I");
  });
  it("si el numero es 5 devuelve 'V'", () => {
    expect(romanizar(5)).toEqual("V");
  });
});