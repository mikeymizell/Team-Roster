const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('David', '12445', 'daviddaman@gmail.com', '9255973603');

    expect(manager).toEqual(expect.any(Object));
})

test("gets manager's office number", () => {
    const manager = new Manager('David', '12445', 'daviddaman@gmail.com', '9255973603');
})

test("gets manager's role", () => {
    const manager = new Manager('David', '12445', 'daviddaman@gmail.com', '9255973603');

    expect(manager.getRole()).toBe('Manager');
})