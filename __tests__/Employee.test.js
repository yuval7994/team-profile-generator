const { expect, it } = require("@jest/globals")
const Employee = require("../dist/Employee.js")
describe("Employee", () => {
  it("Creates an Employee Object", () => {
    const employee = new Employee("cosmo", "329745459", "test@gmail.com")
    expect(employee.name).toBe("cosmo")
    expect(employee.id).toBe("329745459")
    expect(employee.email).toBe("test@gmail.com")
  })
  it("Gets Name", () => {
    const employee = new Employee("cosmo", "329745459", "test@gmail.com")
    expect(employee.getName()).toBe("cosmo")
  })
  it("Gets Id", () => {
    const employee = new Employee("cosmo", "329745459", "test@gmail.com")
    expect(employee.getId()).toBe('329745459')
  })
  it("Gets Email", () => {
    const employee = new Employee("cosmo", "329745459", "test@gmail.com")
    expect(employee.getEmail()).toBe('test@gmail.com')
  })
  it("Gets Role", () => {
    const employee = new Employee("cosmo", "329745459", "test@gmail.com")
    expect(employee.getRole()).toBe('Employee')
  })
})

