import '../index';

test('Transform to UPPERCASE', () => {
  expect('testing'.u()).toBe('TESTING');
  expect('testing'.upper()).toBe('TESTING');
});

test('Transform to lowercase', () => {
  expect('Testing'.l()).toBe('testing');
  expect('testing'.lower()).toBe('testing');
});
