import { Bot } from "grammy";

const bot = (token: string) => {
  const bot = new Bot(token);
  bot.start().then(() => console.log("Bot launched"));
  listenToCommands(bot);
  return bot;
};

export default bot;

const listenToCommands = (bot: Bot) => {
  bot.on("message", (ctx) => ctx.reply("Hi there!"));

  bot.start();
};
