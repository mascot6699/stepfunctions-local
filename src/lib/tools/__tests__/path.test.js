const {
  applyInputPath,
  applyOutputPath,
  applyResultPath,
} = require('../path');

describe('Path', () => {
  it('should apply input + output path', () => {
    const inputPath = '$.foo';
    const outputPath = '$.john';
    const object = {
      foo: 'bar',
      john: 'doe',
    };
    expect(applyInputPath(object, inputPath)).toEqual('bar');
    expect(applyOutputPath(object, outputPath)).toEqual('doe');
  });

  it('should apply result path', () => {
    const resultPath = '$.a.great.result.path';
    const value = 'value';
    const object = {
      foo: 'bar',
    };
    expect(applyResultPath(object, resultPath, value)).toMatchObject({
      foo: 'bar',
      a: {
        great: {
          result: {
            path: 'value',
          },
        },
      },
    });
  });

  it('should return task output for $ result path', () => {
    const resultPath = '$';
    const value = {
      foo: 'foo',
    };
    const object = {
      foo: 'bar',
    };
    expect(applyResultPath(object, resultPath, value)).toMatchObject({
      foo: 'foo',
    });
  });

  it('should return task input for null result path', () => {
    const resultPath = null;
    const value = {
      foo: 'foo',
    };
    const object = {
      foo: 'bar',
    };
    expect(applyResultPath(object, resultPath, value)).toMatchObject({
      foo: 'bar',
    });
  });
});
