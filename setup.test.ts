beforeEach(() => {
  initializeCityDatabase(); // call this before each test
});

// In case it returns a promise:
beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase(); // call this after each test
});

// In case the city database is reused between tests:
beforeAll(() => {
  return initializeCityDatabase();
});
afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
