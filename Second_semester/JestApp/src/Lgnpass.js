const Lgpass = [
    {login: "Rhys Larsen", password:`"${String.fromCodePoint(0x1F601)}"`, secretPhrase: "STFUATTLDLAGG"},
    {login: "Cassian", password:`"${String.fromCodePoint(0x1F60E)}"`, secretPhrase: "PYHOTH"},
    {login: "Aaron Warner", password: `"${String.fromCodePoint(0x1F60C)}"`, secretPhrase: "LYHFML"},
    {login: "Dante Russo", password:`"${String.fromCodePoint(0x1F60F)}"`, secretPhrase: "CUYMV"}

]

function Lgpassw(login, password){  
  const user = Lgpass.find(user => user.login === login && user.password === password);
    if (user) {
        return user.secretPhrase;
    } else
        return 'Incorrect login or password';
    }
  


  
    module.exports = Lgpassw;