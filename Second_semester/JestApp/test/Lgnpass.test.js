const Lgpassw =require('../src/Lgnpass.js')

test("returns secret phrase for valid credentials", () => {
    expect(Lgpassw("Aaron Warner", `"${String.fromCodePoint(0x1F60F)}"`)).toBe(" LYHFML");
  });
  
