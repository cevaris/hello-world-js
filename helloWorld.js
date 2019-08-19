exports.run = (commandLineArgs) => {
    name = commandLineArgs.slice(2, 3);
    if (name.length > 0) {
        return `hello world ${name}!`;
    } else {
        return 'error: missing name';
    }
};