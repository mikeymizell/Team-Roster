const Engineer = require('../lib/Engineer');

test('creates enginner object', () => {
    const engineer = new Engineer('David', '12445', 'daviddaman@gmail.com', 'bossDavid');

    expect(engineer).toEqual(expect.any(Object));
})

test("gets engineer's github username", () => {
    const engineer = new Engineer('David', '12445', 'daviddaman@gmail.com', 'bossDavid');

    expect(engineer.getGithub()).toBe('bossDavid');

    engineer.github = 'bossmanDavid';

    expect(engineer.getGithub()).toBe('bossmanDavid');
})

test("gets engineer's role", () => {
    const engineer = new Engineer('David', '12445', 'daviddaman@gmail.com', 'bossDavid');

    expect(engineer.getRole()).toBe('Engineer');
})