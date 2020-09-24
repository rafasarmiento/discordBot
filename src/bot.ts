//nucleo de la app
import { config } from "dotenv";
config();

import { Client, Message } from "discord.js";//el cliente para conectarse al discord
import { prefix } from "./config.json"

const client: Client = new Client();//"client:Client" es para declarar que el objeto es de tipo "Client"

client.on("ready", () => {
    console.log("bot is Ready!");
})

client.on("message", async (message: Message) => {
    console.log(message.content);

    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send("pong madafaka");
        message.reply("es contigo!");
    }

    if (message.content.startsWith(`${prefix}ban`)) {
        if (message.member?.hasPermission(["KICK_MEMBERS"])) {
            const onlyMember = message.mentions.members?.first();
            if (onlyMember) {
                const bannedMember = await onlyMember.kick();
                console.log(`${bannedMember.user.username} baneado papu`);
                return message.channel.send(`${bannedMember.user.username} ha sido baneado por puto`);
            } /*else if (message.mentions.members?.size > 1) {
            console.log("Baneados:");
            for (let x = 0; x < message.mentions.members?.array.; x++) {
                const element = message.mentions.members?.size];

            }
        }*/
        }

        message.reply(message.member?.user.username + "no tienes permisos para eso mmgvo");

    }



});

/**
 * Se procede a acceder al bot ingresando su token
 * pero para mayor seguridad (que nadie pueda acceder al token de tu bot)
 * es mejor pasarle como parametro al login el token en una variable de entorno
 **/

client.login(process.env.PERSONALBOT_TOKEN)