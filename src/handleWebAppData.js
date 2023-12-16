async function handleWebAppData(bot, msg) {
    const chatId = msg.chat.id;
    if (msg?.web_app_data?.data) {
        try {
            const data = JSON.parse(msg?.web_app_data?.data);

            await bot.sendMessage(chatId, 'Спасибо за фидбэк!');
            await bot.sendMessage(chatId, 'Ваша страна: ' + data?.country);
            await bot.sendMessage(chatId, 'Ваша улица: ' + data?.street);

            setTimeout(async () => {
               await bot.sendMessage(chatId, 'Все уведомления Вы получите в этом чате :)');
            }, 3000);

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = handleWebAppData;
