
const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create a new Employee instance with name, id, Employee class', () => {
      const name = 'Sam';
      const id = 1;
    //   const charClass = 'Rogue';
      const newEmployee = new Employee(name, id, charClass);

      expect(newEmployee instanceof Employee).toBe(true);
      expect(newEmployee.name).toEqual('Sam');
      expect(newEmployee.id).toEqual(1);
      expect(newEmployee.EmployeeType).toEqual('Rogue');
    });
  });
  describe('getName', () => {
    it('should return the class of the Employee', () => {
      const name = 'Sam';
      const id = 1;
    //   const charClass = 'Rogue';
      const newCharacter = new Employee(name, id, charClass);

      const result = newCharacter.getClass();

      expect(result).toEqual('Rogue');
    });
  });
  describe('getId', () => {
    it('should return the role of the character', () => {
      const name = 'Sam';
      const id = 1;
      const charClass = 'Leader';
      const newEmployee = new Employee(name, id, charClass);

      const result = newEmployee.getMemberRole();

      expect(result).toEqual('Leader');
    });
  });
});

describe('getEmail', () => {
    it('should return the role of the character', () => {
      const name = 'Sam';
      const id = 1;
      const charClass = 'Leader';
      const newEmployee = new Employee(name, id, charClass);

      const result = newEmployee.getMemberRole();

      expect(result).toEqual('Leader');
    });
  });



  describe('getRole', () => {
    it('should return the role of the character', () => {
      const name = 'Sam';
      const id = 1;
      const charClass = 'Leader';
      const newEmployee = new Employee(name, id, charClass);

      const result = newEmployee.getMemberRole();

      expect(result).toEqual('Leader');
    });
  });

