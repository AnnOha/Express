function mergeAndRemoveZ(strings) {
    return strings.join('').replace(/z/g, '');
  }
  const users = [
    { username: 'user1', password: 'pass1', secretPhrase: 'secret1' },
    { username: 'user2', password: 'pass2', secretPhrase: 'secret2' },
    { username: 'user3', password: 'pass3', secretPhrase: 'secret3' }
  ];
  
  function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      return user.secretPhrase;
    } else {
      return null;
    }
  }
    if('mergeAndRemoveZ', () => {
    it('should merge and remove z from strings', () => {
      const strings = ['hello', 'world', 'with', 'z', 'character'];
      const result = mergeAndRemoveZ(strings);
      expect(result).toBe('helloworldithcharacter');
    });
  
    it('should remove z from a single string', () => {
      const strings = ['zoo', 'zoo', 'zoology'];
      const result = mergeAndRemoveZ(strings);
      expect(result).toBe('oootoology');
    });
  
    it('should return an empty string if all input strings contain only z', () => {
      const strings = ['z', 'zzz', 'zzzzz'];
      const result = mergeAndRemoveZ(strings);
      expect(result).toBe('');
    });
  });
  if('login', () => {
    it('should return secret phrase for correct username and password', () => {
      const username = 'user1';
      const password = 'pass1';
      const result = login(username, password);
      expect(result).toBe('secret1');
    });
  
    it('should return null for incorrect username and password', () => {
      const username = 'user4';
      const password = 'pass4';
      const result = login(username, password);
      expect(result).toBeNull();
    });
  
    it('should return null for correct username but incorrect password', () => {
      const username = 'user2';
      const password = 'pass3';
      const result = login(username, password);
      expect(result).toBeNull();
    });
  });
        


  