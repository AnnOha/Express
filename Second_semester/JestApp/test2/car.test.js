const findCarNumber=require('./num')
describe('find correct Number', () => {
    test('should return an empty string if either argument is not a string', () => {
      expect(findCarNumber('Katania', 1905)).toBe('');
      
    });
    test('should return an empty string if the codeWord is empty', () => {
      expect(findCarNumber('', '98499')).toBe('');
      
    });
    test('empty if the digitString is empty', () => {
      expect(findCarNumber('Sicily', '')).toBe('');
      
    });

    test('returns empty string if the codeWord contains non-alphabetic characters', () => {
      expect(findCarNumber('315313', '19849')).toBe('');
      
    });

  });