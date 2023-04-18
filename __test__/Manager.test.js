const Engineer = require('../lib/Engineer');

 describe ("Engineer", () => {
    describe('Initialization', () =>{
        it("should create a new engineer instance with id, name, email", ()=> {
        const name ='sam';
        const id = 111;
        const EmployeeType = "Engineer"
        const newEmployee = new Engineer (name, id , EmployeeType);

        expect(newEmployee instanceof Engineer).toBe(true);
        expect (newEmployee.name).toEqual ('sam');
        expect (newEmployee.id).toEqual(111);
        expect(newEmployee.EmployeeType).toEqual('Engineer')
        });
    });
});