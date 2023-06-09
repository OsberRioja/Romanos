import romanizar from "./romanos.js";

describe("Romanizar", () => {
  it("si el numero es 1 devuelve 'I'", () => {
    expect(romanizar(1)).toEqual("I");
  });
  it("si el numero es 5 devuelve 'V'", () => {
    expect(romanizar(5)).toEqual("V");
  });
  it("si el numero es 10 devuelve 'X'", () => {
    expect(romanizar(10)).toEqual("X");
  });
  it("si el numero es 50 devuelve 'L'", () => {
    expect(romanizar(50)).toEqual("L");
  });
  it("si el numero es 100 devuelve 'C'", () => {
    expect(romanizar(100)).toEqual("C");
  });
  it("si el numero es 10 o menor deberia devolver su representacion en romano", () => {
    expect(romanizar(9)).toEqual("IX");
  });
  it("si el numero es 100 o menor deberia devolver su representacion en romano", () => {
    expect(romanizar(97)).toEqual("XCVII");
  });
});