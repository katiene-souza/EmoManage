import { EmoManage } from "./EmoManage.js"
import { User } from "./User.js"


const daniel = new User("Daniel", "Santos", 21, "20/06/2002", "nível 2");
const danielRegistration = new EmoManage(daniel); //cadastro realizado com sucesso!

/* danielRegistration.checkEmotions(); //Segue todas as emoções disponíveis para cadastro: ['ternura', 'amor', 'ódio', ...]
danielRegistration.descriptionEmotions("insegurança");  */
/* {
    'Emoção': 'insegurança', 
    'Descrição': 'a insegurança é falta de confiaça em nós ou nos outros, quando nos sentimos inseguros, 
    adotamos o mecanismo de defesa e às vezes por insegunça agimos com timidez.'
} */

danielRegistration.registerEmotion("insegurança", "me sinto inseguro para tirar fotos.", "conclui resolver meus problemas de auto-imagem.", 
"pedi ajuda para meus amigos me ajudar a tirar fotos e selecionar uma."
);
danielRegistration.registerEmotion("medo", "me sinto inseguro para tirar fotos.", "conclui resolver meus problemas de auto-imagem.", 
"pedi ajuda para meus amigos me ajudar a tirar fotos e selecionar uma."
);

/*  {
    register: {
        day: 1,
        date: '14/09/2023 22:26:45',
        emotion: 'insegurança',
        situation: 'me sinto inseguro para tirar fotos.',
        reflection: 'conclui resolver meus problemas de auto-imagem.',
        attitude: 'pedi ajuda para meus amigos me ajudar a tirar fotos e selecionar uma.'
      }
    } */

console.log(danielRegistration.progressDiary)