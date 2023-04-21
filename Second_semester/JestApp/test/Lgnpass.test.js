const Lgpassw =require('../src/Lgnpass.js')
describe("Bookboyfriend Tests", () => {

  test('Should return Dantes pharase"', ()=>{
    const login = 'Dante Russo';
    const passord=`"${String.fromCodePoint(0x1F60F)}"`;
    expect(Lgpassw(login, passord)).toBe("CUYMV")
})

    test('Should return "Incorrect login or password" for incorrect login or password', () => {
      expect(Lgpassw('Aaron Warner', 'Ellie')).toBe('Incorrect login or password');
      
    });
    test('Should return Rhys  Larsens  pharase"', ()=>{
      expect(Lgpassw('Rhys Larsen', `"${String.fromCodePoint(0x1F601)}"` )).toBe("STFUATTLDLAGG");
    })

    test('Should return Cassians pharase"', ()=>{
        const login = 'Cassian';
        const passord=`"${String.fromCodePoint(0x1F60E)}"`;
        expect(Lgpassw(login, passord)).toBe("PYHOTH")
    })
});
      




