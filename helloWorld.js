// console.log(process.argv);

// console.log('hello world');

args = process.argv;
name = args.slice(2, 3);
if (name.length > 0) {
    console.log(`hello world ${name}!`);
} else {
    console.log('name not found');
}
