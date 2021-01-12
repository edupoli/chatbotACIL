const bot = require("../index");
const banco = require("../banco");
function execute(user, msg) {

    banco.db[user].stage = 1;
    var telefone = ((String(`${user}`).split('@')[0]).substr(2));
    banco.db[user].itens.push(telefone);

    return [
        `Olá  seja bem vindo ao atendimento virtual 🤖 da ACIL.\n` +
        `Aqui você poderá conhecer nossos produtos e serviços e outras informações.🙂\n\n` +
        `Por favor *escolha uma opção:*\n\n` +

        `*MENU PRINCIPAL*\n` +
        `🏭 *1* - Institucional. \n` +
        `🛠️ *2* - Produtos e Serviços. \n` +
        `🎯 *3* - Programas Estratégicos. \n` +
        `📢 *4* - Notícias. \n` +
        `📬 *5* - Contato. \n\n` +

        `A qualquer momento durante a navegação pelos Menus, envie a palavra *VOLTAR* \n` +
        `para retornar ao *Menu Anterior* e envie *SAIR* para finalizar o atendimento`

    ];
};
exports.execute = execute;