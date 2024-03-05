describe('describe outer', () => {
  console.log('describe outer-a'); // 1

  describe('describe inner 1', () => {
    console.log('describe inner 1'); // 2

    test('test 1', () => console.log('test 1')); // 6
  });

  console.log('describe outer-b'); // 3

  test('test 2', () => console.log('test 2')); // 7

  describe('describe inner 2', () => {
    console.log('describe inner 2'); // 4

    test('test 3', () => console.log('test 3')); // 8
  });

  console.log('describe outer-c'); // 5
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test 1
// test 2
// test 3

즉, test 문은 제일 마지막에 실행됨