const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();

// Получаем информацию о пользователе
oauth.getUser(access_token)
  .then(user => {
    // Получаем список серверов, где есть бот и где пользователь является владельцем
    const bot_guilds = [];
    const user_guilds = [];

    user.guilds.forEach(guild => {
      if (guild.permissions.includes("BOT")) {
        bot_guilds.push(guild);
      }
      if (guild.owner) {
        user_guilds.push(guild);
      }
    });

    // Выводим список серверов
    console.log('Серверы с ботом:');
    bot_guilds.forEach(guild => {
      console.log(guild.name);
      console.log(guild.iconURL());
    });

    console.log('Серверы пользователя:');
    user_guilds.forEach(guild => {
      console.log(guild.name);
      console.log(guild.iconURL());
    });
  })
  .catch(console.error);


  export default getUser;