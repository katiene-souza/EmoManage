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
            console.log("cadastro realizado com sucesso!");
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

            console.log("registro do dia realizado com sucesso!");
        } else {
            console.log("Essa emoção não existe em nosso sistema, certifique-se de que a escrita está correta!");
        };
    }

    get checkRecords() {
        console.log("Segue todos os seus registros:")
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

