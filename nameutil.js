const sayHi = (name) => {
    console.log(`Hello there, ${name}`);
};

const agent = (secret) => {
    console.log(`You are a ${secret}`);
}

module.exports = {sayHi, agent};