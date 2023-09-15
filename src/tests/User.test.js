import { User } from "../User.js";

describe('testando a classe User', () => {
    it('Deve criar um objeto User com as propriedades corretas', () => {
        const maria = new User("Maria", "Helena", 23, "12/11/1999");

        expect(maria.name).toBe("Maria");
        expect(maria.surname).toBe("Helena");
        expect(maria.age).toBe(23);
        expect(maria.dateBirth).toBe("12/11/1999");
    });
});