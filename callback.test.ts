// ❌ Don't do this:
// 아래 예시에서 fetchData(callback)은 테스트되지 않는다!!
// Don't do this!
test('the data is peanut butter', () => {
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe('peanut butter');
  } // Test ends here

  fetchData(callback); // ❌ This line is not tested
});

// ✅ Do this (done):
// Jest will wait until the done callback is called before finishing the test.
test('the data is peanut butter', (done) => {
  function callback(error, data) {
    if (error) {
      done(error); // Add this
      return;
    }
    try {
      expect(data).toBe('peanut butter');
      done(); // Add this
    } catch (error) {
      done(error); // Add this
    }
  }

  fetchData(callback);
});
