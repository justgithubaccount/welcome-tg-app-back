// https://core.telegram.org/bots/webapps#implementing-mini-apps

function inlineButton(webAppUrl) {
    return {
        inline_keyboard: [
            [{ text: 'Сделать заказ (inline button)', web_app: { url: webAppUrl } }]
        ]
    };
 }
 
 module.exports = inlineButton;