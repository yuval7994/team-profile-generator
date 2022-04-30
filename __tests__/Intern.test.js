const { expect, it } = require("@jest/globals")
const Intern = require("../dist/Intern")
describe("Intern", () => {
  it("Creates an Intern Object", () => {
    const intern = new Intern("kora", "329745456", "cola@gmail.com", "vanderbilt")
    expect(intern.name).toBe("kora")
    expect(intern.id).toBe("329745456")
    expect(intern.email).toBe("cola@gmail.com")
    expect(intern.school).toBe("vanderbilt")
  })
  it("Gets School", () => {
    const intern = new Intern("kora", "329745456", "cola@gmail.com", "vanderbilt")
    expect(intern.getSchool()).toBe('vanderbilt')
    expect(intern.getRole()).toBe('intern')
  })
})
