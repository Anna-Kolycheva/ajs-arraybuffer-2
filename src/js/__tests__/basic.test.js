import ArrayBufferConverter, { getBuffer } from '../app';

test('should sum', () => {
  const iufd = new ArrayBufferConverter();
  iufd.load(getBuffer());
  expect(iufd.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
