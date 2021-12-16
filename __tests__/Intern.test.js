const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('David', 12245, 'daviddaman@gmail.com', 'Harvard Tech');

    expect(intern).toEqual(expect.any(Object));
})

test("gets intern's school name", () => {
    const intern = new Intern('David', 12245, 'daviddaman@gmail.com', 'Harvard Tech');

    expect(intern.getSchool()).toBe('Harvard Tech');

    intern.school = 'Paris Tech College';

    expect(intern.getSchool()).toBe('Paris Tech College');
})

test("gets intern's role", () => {
    const intern = new Intern('David', 12245, 'daviddaman@gmail.com', 'Harvard Tech');

    expect(intern.getRole()).toBe('Intern');
})