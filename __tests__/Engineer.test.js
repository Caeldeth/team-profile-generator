const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

//need test to set github username
test('Can set github username via constructor', () => {
    const testGithub = 'wired_squirrel'
    const eng = new Engineer('Cherise', '123', 'engname@domain.com', testGithub);
    expect(eng.github).toBe(testGithub);
})

//need test to check getRole returns engineer
test('getRole should return "Engineer" for engineers', () => {
    const testRole = "Engineer";
    const eng = new Engineer('Cherise', '123', 'engname@domain.com', 'wired_squirrel');
    expect(eng.getRole()).toBe(testRole);
})

//need test to get office number
test('Can fetch github username', () => {
    const testGithub = 'wired_squirrel'
    const eng = new Engineer('Daphne', '123', 'engname@domain.com', testGithub);
    expect(eng.github).toBe(testGithub);
})
//need test to get name
test('Can fetch engineer name', () => {
    const testName = 'Cherise';
    const eng = new Engineer(testName);
    expect(eng.getName()).toBe(testName);
});

//need test to get id
test('Can fetch engineer id', () => {
    const testId = '123';
    const eng = new Engineer('Cherise', testId);
    expect(eng.getId()).toBe(testId);
});

//need test to get email
test('Can fetch engineer email', () => {
    const testEmail = 'engname@domain.com';
    const eng = new Engineer('Cherise', '123', testEmail);
    expect(eng.getEmail()).toBe(testEmail);
});