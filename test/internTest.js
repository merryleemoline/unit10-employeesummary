const Intern = require("../lib/interns");

test("Sets school", () => {
  const testValue = "Biola";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Gets 'Intern' from getRole()", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "Biola");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school with getSchool()", () => {
  const testValue = "Biola";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});