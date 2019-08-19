const helloWorld = require('./helloWorld');

test('helloWorld works for happy case', () => {
    commandLineArgs = ['node', 'helloWorld.js', 'Name'];
    expect(helloWorld.run(commandLineArgs)).toEqual('hello world Name!');
});

test('helloWorld works even with extra parameters', () => {
    commandLineArgs = ['node', 'helloWorld.js', 'one', 'two', 'three'];
    expect(helloWorld.run(commandLineArgs)).toEqual('hello world one!');
});

test('helloWorld missing name', () => {
    commandLineArgs = ['node', 'helloWorld.js'];
    expect(helloWorld.run(commandLineArgs)).toEqual('error: missing name');
});

