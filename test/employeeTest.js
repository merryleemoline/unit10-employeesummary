const Employee = require("../lib/employees");

test("There is an employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Sets name", () => {
  const name = "Merry";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Sets ID", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Sets email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Gets name with getName()", () => {
  const testValue = "Merry";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Gets ID with getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Gets email with getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Gets 'Employee' with getRole()", () => {
  const testValue = "Employee";
  const e = new Employee("Merry", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
