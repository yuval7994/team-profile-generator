const { it, expect } = require("@jest/globals")
const Engineer = require("../dist/Engineer")
describe("Engineer", () => {
  it("Creates an Engineer Object", () => {
    const engineer = new Engineer("lucky", "329745452", "cracker@gmail.com", "yuval7994")
    expect(engineer.name).toBe("lucky")
    expect(engineer.id).toBe("329745452")
    expect(engineer.email).toBe("cracker@gmail.com")
    expect(engineer.github).toBe("yuval7994")
  })
  it("Gets Github", () => {
    const engineer = new Engineer("lucky", "329745452", "cracker@gmail.com", "yuval7994")
    expect(engineer.getGithub()).toBe("yuval7994")
  })
  it("Gets Role", () => {
    const engineer = new Engineer("lucky", "329745452", "cracker@gmail.com", "yuval7994")
    expect(engineer.getRole()).toBe("Engineer")
  })
})
