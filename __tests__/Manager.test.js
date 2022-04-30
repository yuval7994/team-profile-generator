const { it, expect } = require("@jest/globals")
const Manager = require("../dist/Manager")
describe("Manager", () => {
  it("Creates a Manager Object", () => {
    const manager = new Manager("beanie", "329745453", "cookie@gmail.com", "79")
    expect(manager.name).toBe("beanie")
    expect(manager.id).toBe("329745453")
    expect(manager.email).toBe("cookie@gmail.com")
    expect(manager.officeNumber).toBe("79")
  })
  it("Gets Role", () => {
    const manager = new Manager("beanie", "329745453", "cookie@gmail.com", "79")
    expect(manager.getRole()).toBe('Manager')

  })
})
