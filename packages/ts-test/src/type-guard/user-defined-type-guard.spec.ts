import { assertType } from './user-defined-type-guard';

describe('assertType', () => {
  it('should throw error', () => {
    const a = { b: "test" }
    expect(() => assertType(a)).toThrow(TypeError)
  });
});
