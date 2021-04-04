import { describe, expect, test } from '@jest/globals';
import SwaggerUI from '../..';

describe('webpack browser es-bundle build', () => {
  test('should export a function for es-bundle', () => {
    expect(SwaggerUI).toBeInstanceOf(Function);
  });
});
