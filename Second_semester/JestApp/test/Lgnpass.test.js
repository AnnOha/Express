const Lgpassw =require('../src/Lgnpass.js')
describe("Bookboyfriend Tests", () => {

test("returns secret phrase", () => {
    expect(Lgpassw("Aaron Warner", "123")).toBe(" LYHFML");
  });
})
/*let b= [login = "Aaron Warner" , password ="123"]
let a=  'LYHFML'
 expect(b).toBe(a);*/