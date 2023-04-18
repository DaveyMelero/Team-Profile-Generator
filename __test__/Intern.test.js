const Intern = require('../lib/Engineer');

 describe ("Intern", () => {
    describe('Initialization', () =>{
        it("should create a new intern instance with id, name, email", ()=> {
        const name ='blake';
        const id = 112;
        const EmployeeType = "Engineer"
        const newEmployee = new Intern (name, id , EmployeeType);

        expect(newEmployee instanceof Intern).toBe(true);
        expect (newEmployee.name).toEqual ('blake');
        expect (newEmployee.id).toEqual(112);
        expect(newEmployee.EmployeeType).toEqual('Intern')
        });
    });
});