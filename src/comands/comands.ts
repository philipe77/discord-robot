export class ComandsService {
    
    comands: Comands[] = [{
        nome: '!terminal',
        desc: 'Aqui você encontra um tutorial para utilizar o terminal da melhor forma',
        link_help: 'https://comunidade.codigopratodos.com/t/introducao-ao-terminal-de-comandos/277',
        color:'0x000000'
    },
    {
        nome: '!ajuda',
        desc: 'Comandos disponíveis: ',
        link_help: '!twitch, !Cs50_0, !Cs50_1, !Cs50_2, !terminal',
        color:'0xff0000'
    },
    {
        nome: '!twitch',
        desc: 'Aqui você encontra todas as resoluções dos excercícios cs50',
        link_help: 'https://www.twitch.tv/leordev',
        color:'0x0000FF'
    },
    {
        nome: "!Cs50_0",
        desc: "Crie um jogo animado só com a sua criatividade e lógica",
        link_help: 'https://comunidade.codigopratodos.com/t/semana-0-scratch-24-05-2020/219',
        color:'0x00FF00'
    },
    {
        nome: "!Cs50_1",
        desc: "Aprenda C para saber como tudo funciona por trás dos panos",
        link_help: 'https://comunidade.codigopratodos.com/t/semana-1-c-31-05-2020/264',
        color:'0x00FF00'
    },
    {
        nome: "!Cs50_2",
        desc: "Semana 2 - Arrays",
        link_help: 'https://comunidade.codigopratodos.com/t/semana-2-arrays-07-06-2020/291',
        color:'0x00FF00'
    }];
}

export interface Comands {
    nome: string,
    desc: string,
    link_help: string,
    color?:string
}