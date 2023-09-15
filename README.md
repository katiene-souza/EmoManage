<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=957af1&height=120&section=header"/>

 <div align="center">
     <img width="tamanho da imagem" src="https://github.com/katiene-souza/EmoManage/assets/85809975/17eb7bef-ad92-4e3f-a520-35e17d89f6e4"/>
</div> 

#
  ### Tecnologia utilizadas
  ![JavaScript](https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D1117)&nbsp;
  ![Jest](https://img.shields.io/badge/-Jest-0D1117?style=for-the-badge&logo=jest&labelColor=0D1117)&nbsp;
#
O EmoManage é um gerenciador de emoções diárias. Ele oferece funcionalidades para cadastrar, checar e descrever emoções disponíveis. Essa documentação descreve o uso básico da classe e suas funcionalidades.
 
### Criando um usuário
Antes de começar a registrar emoções, você precisa criar um usuário usando a classe User. 
#### main.js 
```javascript
import { EmoManage } from "./EmoManage.js"
import { User } from "./User.js"


const daniel = new User("Daniel", "Santos", 21, "20/06/2002");
const danielRegistration = new EmoManage(daniel); //cadastro realizado com sucesso!
```
###  Inicializando o EmoManage
Crie uma instância do EmoManage passando o usuário criado como parâmetro:
```javascript
const danielRegistration = new EmoManage(daniel); //cadastro realizado com sucesso!
```
### Registrando Emoções
Você pode registrar emoções usando o método registerEmotion da seguinte maneira:
```javascript
danielRegistration.registerEmotion(
"insegurança",
"me sinto inseguro para tirar fotos.",
"conclui resolver meus problemas de auto-imagem.", 
"pedi ajuda para meus amigos me ajudar a tirar fotos e selecionar uma."
);

console.log(danielRegistration.card);
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
```

###  Descrevendo Emoções Disponíveis
Você pode obter informações sobre as emoções disponíveis usando o método descriptionEmotions
```javascript
danielRegistration.checkEmotions(); //Segue todas as emoções disponíveis para cadastro: ['ternura', 'amor', 'ódio', ...]
danielRegistration.descriptionEmotions("insegurança"); 
/* {
    'Emoção': 'insegurança', 
    'Descrição': 'a insegurança é falta de confiaça em nós ou nos outros, quando nos sentimos inseguros, 
    adotamos o mecanismo de defesa e às vezes por insegunça agimos com timidez.'
} */
```
## Classes utilizadas
### User
A classe User é uma parte essencial do projeto EmoManage e é usada para representar informações de usuário, como nome, sobrenome, idade e data de nascimento. Esta classe é responsável por criar instâncias de usuário que podem ser associadas ao gerenciamento de emoções.
#### User.js
 ```Javascript
  export class User {
    constructor(name, surname, age, dateBirth ) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.dateBirth = dateBirth;
    }
} 

 ```
### EmoManage 
A classe EmoManage é o núcleo do projeto e permite aos usuários registrar e gerenciar suas emoções diárias. Suas principais funcionalidades são cadastrar emoções e descrevê-las. Esta classe torna possível acompanhar e refletir sobre as experiências emocionais ao longo do tempo.
#### EmoManage.js
```Javascript
import { User } from "./User.js";
import { availableEmotions } from "./constants/availableEmotions.js";
import { emotions } from "./constants/emotions.js";

export class EmoManage {
    couter = 1;

    constructor(user) {
        this.user = this.#checkUser(user);
        this.card = [];
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
```

## Constantes 
A constante "emotions" é um objeto que contém diversas emoções e suas respectivas descrições. Ela é usada no projeto EmoManage para permitir aos usuários registrar e descrever suas emoções diárias. Abaixo está uma descrição resumida das principais emoções presentes nesta constante:
#### emotions.js
```Javascript
export const emotions = {
    ternura: "ternura é proximidade, afeto e compaixão, é um passo para o amor e pode ser despertada...",
    amor:"amor é o oposto de ódio e pode despertar um sorriso gigantesco ou lágrimas, existe...",
}
```
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=957af1&height=120&section=footer"/>
