const add = (a, b) => a + b;
const generateGreeting = (name='Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should greet the nice people', () => {
    const name = 'Clint',
        result = generateGreeting(name);

    expect(result).toBe(`Hello Clint!`);
});

test('should greet the no-name person', () => {
    const result = generateGreeting();

    expect(result).toBe('Hello Anonymous!');
});