import { User } from "./User.js";
import { availableEmotions } from "./constants/availableEmotions.js";
import { emotions } from "./constants/emotions.js";

export class EmoManage {
    counter = 1;
    emotions = [];

    constructor(user) {
        this.user = this.#checkUser(user);
        this.card = [];
    }

    #checkUser(user) {
        if (user instanceof User) {
            console.log("Cadastro realizado com sucesso!");
        } else {
            console.log("Informe um usuário válido!");
        }

        return user;
    }

    checkEmotions() {
        console.log("Segue todas as emoções disponíveis para cadastro:", availableEmotions);
    }

    descriptionEmotions(emotion) {
        const validEmotion = emotions[emotion];
        

        if (validEmotion) {
            const result = {
                Emoção: emotion,
                Descrição: validEmotion,
            };
            return result;
        } else {
            console.log("Essa emoção não existe em nosso sistema, certifique-se de que a escrita está correta!");
        };
    }

    registerEmotion(emotion, situation, reflection, attitude) {

        const emotionExists = availableEmotions.includes(emotion),
            newDate = new Date();

        this.emotions.push(emotion);

        if (emotionExists) {
            this.card.push({
                register: {
                    day: this.counter++,
                    date: newDate.toLocaleString('pt-BR', { timezone: 'UTC' }),
                    emotion: emotion,
                    situation: situation,
                    reflection: reflection,
                    attitude: attitude,
                },
            });

            console.log("Registro do dia realizado com sucesso!");
        } else {
            console.log("Essa emoção não existe em nosso sistema, certifique-se de que a escrita está correta!");
        };
    }

    deleteRegister(day) {
        const registers = this.card.length;

        if(day < 1) {
            return "Você precisa colocar um número maior que 0 para conseguir deletar!";
        } else if (day > registers) {
            console.log("Você precisa colocar um número menor que a quantidade de registros para conseguir deletar!");
            return `Número de registros: ${registers}`;
        } else {
            const removeRegister = day - 1;
            this.card.splice(removeRegister, 1);

            console.log("Removido com sucesso!");

            return this.card;
        };
    }

    get checkRecords() {
        console.log("Segue todos os seus registros:");
        return this.card;
    }

    get progressDiary() {
        const diary = {
            QuantidadeDeRegistros: this.card.length,
            EmoçõesSentidas: this.emotions,
        };

        return diary;
    }
}

