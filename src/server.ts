import Discord, {MessageEmbed } from 'discord.js';
import {ComandsService} from './comands/comands';
import {Enviroment} from '../enviroment/env';

const client = new Discord.Client();
const comands = new ComandsService().comands;
const embed = new MessageEmbed();

client.on('ready', () => {
    console.log( `bot is ready!${client.user?.tag}`);
});

client.on('message', message => {
   
    comands.map(comand =>{
        if(comand.nome.toLowerCase() == message.content.toLowerCase()){
            
            embed.addField(comand.desc, comand.link_help)
            embed.setColor(comand.color);
            message.channel.send(embed);
        }
    })
})


client.login(Enviroment.discord);