require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const tgToken = process.env.TELEGRAM_TOKEN;
const options = {
    polling: true
};
const bot = new TelegramBot(tgToken, options);

const keyboardButton = require('./src/keyboardButton');
const inlineButton = require('./src/inlineButton');
const handleWebAppData = require('./src/handleWebAppData');
const webDataRoute = require('./src/webDataRoute');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/', webDataRoute);

const webAppUrl = process.env.WEB_URL;

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Ниже появится кнопка "Сделать заказ" (keyboard button)', {
            reply_markup: keyboardButton(webAppUrl)
        })

        await bot.sendMessage(chatId, 'Заходите в наш интернет магазин по ссылке (inline button)', {
            reply_markup: inlineButton(webAppUrl)
        })
    }

    if (msg?.web_app_data?.data) {
        await handleWebAppData(bot, msg);
    }
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('Server started on PORT - ' + PORT))