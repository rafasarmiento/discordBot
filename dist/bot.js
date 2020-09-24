"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//nucleo de la app
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js"); //el cliente para conectarse al discord
const config_json_1 = require("./config.json");
const client = new discord_js_1.Client(); //"client:Client" es para declarar que el objeto es de tipo "Client"
client.on("ready", () => {
    console.log("bot is Ready!");
});
client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    console.log(message.content);
    if (message.content.startsWith(`${config_json_1.prefix}ping`)) {
        message.channel.send("pong madafaka");
        message.reply("es contigo!");
    }
    if (message.content.startsWith(`${config_json_1.prefix}ban`)) {
        if ((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission(["KICK_MEMBERS"])) {
            const onlyMember = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
            if (onlyMember) {
                const bannedMember = yield onlyMember.kick();
                console.log(`${bannedMember.user.username} baneado papu`);
                return message.channel.send(`${bannedMember.user.username} ha sido baneado por puto`);
            } /*else if (message.mentions.members?.size > 1) {
            console.log("Baneados:");
            for (let x = 0; x < message.mentions.members?.array.; x++) {
                const element = message.mentions.members?.size];

            }
        }*/
        }
        message.reply(((_c = message.member) === null || _c === void 0 ? void 0 : _c.user.username) + "no tienes permisos para eso mmgvo");
    }
}));
/**
 * Se procede a acceder al bot ingresando su token
 * pero para mayor seguridad (que nadie pueda acceder al token de tu bot)
 * es mejor pasarle como parametro al login el token en una variable de entorno
 **/
client.login(process.env.PERSONALBOT_TOKEN);
