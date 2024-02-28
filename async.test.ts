// .then()
test('the data is peanut butter', () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter');
  });
});

// async/await
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch('error');
  }
});

// .resolves, .rejects
test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter'); // Promise resolves -> ✅ Test passes
});

test('the fetch fails with an error', async () => {
  await expect(fetchData()).rejects.toMatch('error'); // Promise rejects -> ❌ Test fails
});

// .catch()
test('the fetch fails with an error', () => {
  expect.assertions(1); // verifies that fetchData() was called at least once
  return fetchData().catch((error) => expect(error).toMatch('error'));
});
