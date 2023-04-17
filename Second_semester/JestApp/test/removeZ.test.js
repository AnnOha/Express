const removeZ = require('../src/removeZ');

describe("Z-remover Tests", () => {
// arrange and act
// Перший тест - перевіряє, чи повертає функція рядок без символів "z" при передачі масиву з однією строкою без "z"
test('Returns string without "z"', () => {
    const arr = ["trailblazer","hydralazine", "tetrazolium","azoospermia"];
    const result = 'trailblaerhydralainetetraoliumaoospermia';
    const actual = removeZ(arr);
    expect(actual).toBe(result);
  });
  
  test('Returns string without "z" when there are multiply "z"', () => {
    const arr = ['amazing', 'mozzarella', 'dazzlingly', 'zizzled'];
    const result = 'amaingmoarelladalinglyiled';
    const actual = removeZ(arr);
    expect(actual).toBe(result);
  });
  

  test('returns empty string when passed an empty array', () => {
    const arr = [];
    const result = '';
    const actual = removeZ(arr);
    expect(actual).toBe(result);
  });
  
  test('Returns string without Upper and Lowercase "Z,z"', () => {
    const arr = ['Zade', 'moZzarella', 'Zach', 'zizzled'];
    const result = 'ademoarellaachiled';
    const actual = removeZ(arr);
    expect(actual).toBe(result);
  });

});
