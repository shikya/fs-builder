function sayHello(string) {
    const printable = `Hello ${string}!`
    console.log(printable);
    return printable;
};

module.exports = {
    sayHello
};