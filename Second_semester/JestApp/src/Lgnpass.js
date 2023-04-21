const Lgpass = [
    {login: "Rhys Larsen", password:`"${String.fromCodePoint(0x1F601)}"`, secretPhrase: "STFUATTLDLAGG"},
    {login: "Cassian", password:`"${String.fromCodePoint(0x1F60E)}"`, secretPhrase: "PYHOTH"},
    {login: "Aaron Warner", password: "123", secretPhrase: "LYHFML"},
    {login: "Dante Russo", password:`"${String.fromCodePoint(0x1F60F)}"`, secretPhrase: "CUYMV"}

]

function Lgpassw(login, password){
  const user = Lgpass.find
    if(login === user.login && password === user.password){
     return user.secretPhrase;
    } else if (login !== user.login && password !== user.password){
      return 'invalid';
    } else if(login !== user.login && password ===user.password){
      return 'login incorrect';
    }else if (login === user.login && password !== user.password){
     return('pass incorrect ');
    }
  }
    module.exports = Lgpassw;