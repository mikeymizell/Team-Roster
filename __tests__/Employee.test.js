const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('David', 12445, 'daviddaman@gmail.com');

    expect(employee.name).toBe('David');
    expect(employee.id).toBe(12445);
    expect(employee.email).toBe('daviddaman@gmail.com');
})

test("gets employee's name", () => {
    const employee = new Employee('David', 12445, 'daviddaman@gmail.com');

    expect(employee.getName()).toBe('David');

    employee.name = 'Clark';

    expect(employee.getName()).toBe('Clark');
})

test("gets employee's id", () => {
    const employee = new Employee('David', 12445, 'daviddaman@gmail.com');

    expect(employee.getId()).toBe(12445);

    employee.id = 13376;

    expect(employee.getId()).toBe(13376);
})

test("gets employee's email", () => {
    const employee = new Employee('David', 12445, 'daviddaman@gmail.com');

    expect(employee.getEmail()).toBe('daviddaman@gmail.com');

    employee.email = 'daviddaboss@gmail.com';

    expect(employee.getEmail()).toBe('daviddaboss@gmail.com');
})

test("gets employee's role", () => {
    const employee = new Employee('David', 12445, 'daviddaman@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})