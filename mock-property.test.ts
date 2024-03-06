const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances); // mock property
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts); // mock property
// > [ <b> ]

// Test code:
// 함수가 단 한 번 호출:
expect(someMockFunction.mock.calls).toHaveLength(1);

// 첫번째 호출 당시의 첫번째 인자가 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

// 첫번째 호출 당시의 두번째 인자가 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

// 첫번째 호출 당시의 리턴값이 'return value'
expect(someMockFunction.mock.results[0].value).toBe('return value');

// The function was called with a certain `this` context: the `element` object.
expect(someMockFunction.mock.contexts[0]).toBe(element);

// 인스턴스가 두 번 만들어짐
expect(someMockFunction.mock.instances.length).toBe(2);

// 첫번째로 생성된 인스턴스의 'name' 프로퍼티의 값이 'test'
expect(someMockFunction.mock.instances[0].name).toBe('test');

// 함수의 마지막 호출 당시 첫번째 인자가 'test'
expect(someMockFunction.mock.lastCall[0]).toBe('test');
