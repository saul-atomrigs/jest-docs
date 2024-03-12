const myMockFn = jest.fn((cb) => cb(null, true));

myMockFn((err, val) => console.log(val));
// > true

// foo.js
module.exports = function () {
  // some implementation;
};

// test.js
jest.mock('../foo'); // this happens automatically with automocking
const foo = require('../foo');

// foo is a mock function
foo.mockImplementation(() => 42); // 다른 모듈에서 생성된 foo라는 함수를 default implementation한다
foo();
// > 42
