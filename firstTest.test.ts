import { sum } from './firstTest';

// Exact matcher (.toBe())
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // passed ✅
});

// Exact matcher (.toEqual())
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 }); // passed ✅
});

// Not Matcher (not.toBe())
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0); // passed ✅
    }
  }
});

// truthy / falsy
test('null', () => {
  const n = null;
  expect(n).toBeNull(); // passed ✅
  expect(n).toBeDefined(); // passed ✅
  expect(n).not.toBeUndefined(); // passed ✅
  expect(n).not.toBeTruthy(); // passed ✅
  expect(n).toBeFalsy(); // passed ✅
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull(); // passed ✅
  expect(z).toBeDefined(); // passed ✅
  expect(z).not.toBeUndefined(); // passed ✅
  expect(z).not.toBeTruthy(); // passed ✅
  expect(z).toBeFalsy(); // passed ✅
});

// numbers
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBe(0.3); //  ❌ This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // passed ✅
});

// string, regex (.toMatch)
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/); // passed ✅
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/); // passed ✅
});

// Arrays and iterables (.toContain)
test('the shopping list has milk on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  expect(shoppingList).toContain('milk'); // passed ✅
  expect(new Set(shoppingList)).toContain('milk'); // passed ✅
});

// Exceptions (.toThrow())
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}
test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow(); //passed ✅
  expect(() => compileAndroidCode()).toThrow(Error); //passed ✅

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK'); //passed ✅
  expect(() => compileAndroidCode()).toThrow(/JDK/); // passed ✅

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // ❌ Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // passed ✅
});
