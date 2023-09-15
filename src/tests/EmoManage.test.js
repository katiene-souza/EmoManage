import { EmoManage } from "../EmoManage.js";
import { User } from "../User.js";
import { availableEmotions } from "../constants/availableEmotions";

describe('testando a classe EmoManage', () => {
    let maria,
        mariaRegister;

    beforeEach(() => {
        maria = new User("maria", "helena", 23, "12/11/1999");
        mariaRegister = new EmoManage(maria);
    });

    it('Deve adicionar um usuário que seja uma instância da classe User', () => {
        expect(mariaRegister.user).toBeInstanceOf(User);
    });

    it('Deve checar se a emoção cadastrada existe', () => {
         const consoleSpy = jest.spyOn(console, 'log');
    
         mariaRegister.checkEmotions();
 
         expect(consoleSpy).toHaveBeenCalledWith("Segue todas as emoções disponíveis para cadastro:", availableEmotions);
         
         consoleSpy.mockRestore();
    });

    it('Deve retornar a descrição da emoção cadastrada', () => {
        const result = mariaRegister.descriptionEmotions("expectativa");
        const expected = {
            'Emoção': 'expectativa',
            'Descrição': 'Esperança de que algo aconteça, podemos curtir as coisas com mais energia e ela desperta o entusiasmo.'
        };

        expect(result).toEqual(expected);
    });

    it('Deve cadastrar uma o registro do dia', () => {
        const emotion = 'alívio',
        situation = 'Consegui finalizar meu projeto final.',
        reflection = 'realização pessoal',
        attitude = 'Festejei de alegria';

        mariaRegister.registerEmotion(emotion, situation, reflection, attitude);

        expect(mariaRegister.card).toEqual([
            {
                register: {
                    day: 1, 
                    date: expect.any(String), 
                    emotion: emotion,
                    situation: situation,
                    reflection: reflection,
                    attitude: attitude,
                },
            },
        ]);
    })

});