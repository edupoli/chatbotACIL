const banco = require("../banco");
function execute(user, msg) {
    banco.db[user].itens.push(msg);
    banco.db[user].stage = 0;

    return [
        "✅ Ok tudo certo entraremos em contato 👋🏼👋🏼\n" +
        "Agradecemos pelo interesse em nossos serviços \n" +
        "Ate logo. 🤝🏻👋🏻👋🏻"
    ];
}
exports.execute = execute;