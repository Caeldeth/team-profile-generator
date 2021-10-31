const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

//need test to set school username
test('Can set school username via constructor', () => {
    const testSchool = 'wired_squirrel'
    const int = new Intern('Frankie', '456', 'intname@domain.com', testSchool);
    expect(int.school).toBe(testSchool);
})

//need test to check getRole returns intern
test('getRole should return "Intern" for interns', () => {
    const testRole = "Intern";
    const int = new Intern('Frankie', '456', 'intname@domain.com', 'wired_squirrel');
    expect(int.getRole()).toBe(testRole);
})

//need test to get office number
test('Can fetch school username', () => {
    const testSchool = 'wired_squirrel'
    const int = new Intern('Frankie', '456', 'intname@domain.com', testSchool);
    expect(int.school).toBe(testSchool);
})
//need test to get name
test('Can fetch intern name', () => {
    const testName = 'Frankie';
    const int = new Intern(testName);
    expect(int.getName()).toBe(testName);
});

//need test to get id
test('Can fetch intern id', () => {
    const testId = '456';
    const int = new Intern('Frankie', testId);
    expect(int.getId()).toBe(testId);
});

//need test to get email
test('Can fetch intern email', () => {
    const testEmail = 'intname@domain.com';
    const int = new Intern('Frankie', '456', testEmail);
    expect(int.getEmail()).toBe(testEmail);
});