const Fail = require('../fail');

describe('Fail', () => {
  it('should execute a fail state', async () => {
    const state = {
      Type: 'Fail',
      Error: 'ExecutionFailed',
    };
    const execution = {
      executionArn: 'my-execution-arn',
      events: [],
    };
    try {
      const input = {};
      const failInstance = new Fail(state, execution, 'FailState');
      const result = await failInstance.execute(input);
      expect(result).not.toBeDefined();
    } catch (e) {
      expect(e.message).toEqual(state.Error);
      expect(e.name).not.toBeDefined();
    }
  });
});
