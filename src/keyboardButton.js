// https://core.telegram.org/bots/webapps#implementing-mini-apps

function keyboardButton(webAppUrl) {
    return {
        keyboard: [
            [{ text: 'Сделать заказ (keyboard button)', web_app: { url: webAppUrl + '/form' } }]
        ]
    };
 }
 
 module.exports = keyboardButton;