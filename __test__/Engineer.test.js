const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create a new Engineer instance with name, id, emial", () => {
      const name = "Sam";
      const id = 1;
      const EmployeeType = "Rogue";
      const newEmployee = new Leader(name, id, EmployeeType);

      expect(newEmployee instanceof Engineer).toBe(true);
      expect(newEmployee.name).toEqual("Sam");
      expect(newEmployee.id).toEqual(1);
      expect(newEmployee.charClass).toEqual("Engineer");
    });
  });
});