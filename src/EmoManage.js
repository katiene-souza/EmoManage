import { User } from "./User.js";
import { availableEmotions } from "./constants/availableEmotions.js";
import { emotions } from "./constants/emotions.js";

export class EmoManage {
    couter = 1;

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
            console.log({
                Emoção: emotion,
                Descrição: validEmotion,
            });
        } else {
            console.log("Essa emoção não existe em nosso sistema, certifique-se de que a escrita está correta!");
        };
    }

    registerEmotion(emotion, situation, reflection, attitude) {
        const emotionExists = availableEmotions.includes(emotion),
            newDate = new Date();

        if (emotionExists) {
            this.card.push({
                register: {
                    day: this.couter++,
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
}

