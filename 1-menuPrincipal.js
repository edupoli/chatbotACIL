const banco = require("../banco");
function execute(user, msg) {

    function checaOpcao(str, x) {
        if ((str >= 1) && (str <= x)) {
            return true;
        } else {
            return false;
        }
    }
    if (msg === "voltar" || msg === "Voltar" || msg === "VOLTAR") {
        banco.db[user].itens.pop();
        banco.db[user].stage = 1;
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
    }
    if (msg === "sair" || msg === "Sair" || msg === "SAIR") {
        banco.db[user].itens.pop();
        banco.db[user].stage = 0;
        return [
            `🚫  Atendimento foi finalizado. 🚫\n` +
            `Ficamos felizes por utilizar nossos serviços e estaremos a disposição sempre que precisar 🙂 \n` +
            `Ate logo 👋🏻👋🏻`
        ];
    }

    if (msg === "1") {
        banco.db[user].stage = 2;
        banco.db[user].itens.push(msg);
        return [
            `*MENU INSTITUCIONAL*\n\n` +
            `1️⃣ - Diretoria Executiva \n` +
            `2️⃣ - Instituto Acil \n` +
            `3️⃣ - Fórum Desenvolve Londrina \n` +
            `4️⃣ - Núcleo de Desenvolvimento Empresarial \n` +
            `#️⃣ - Voltar ao Menu Principal`
        ];
    }
    if (msg === "2") {
        banco.db[user].stage = 2;
        banco.db[user].itens.push(msg);
        return [
            `*MENU PRODUTOS E SERVIÇOS*\n\n` +
            `1️⃣ - Nota Fiscal Eletrônica \n` +
            `2️⃣ - SPC ACIL \n` +
            `#️⃣ - Voltar ao Menu Principal`
        ];
    }
    if (msg === "3") {
        banco.db[user].stage = 2;
        banco.db[user].itens.push(msg);
        return [
            `*MENU PROGRAMAS ESTRATÉGICOS*\n\n` +
            `1️⃣ - Compra Londrina \n` +
            `2️⃣ - Empreender \n` +
            `3️⃣ - Fomento Paraná \n` +
            `4️⃣ - Sala do Empreendedor \n` +
            `5️⃣ - Frente a Frente \n` +
            `#️⃣ - Voltar ao Menu Principal`
        ];
    }
    if (msg === "4") {
        banco.db[user].stage = 2;
        banco.db[user].itens.push(msg);
        return [
            `*MENU NOTÍCIAS*\n\n` +
            `1️⃣ - Encontro de empresários \n` +
            `2️⃣ - Black Friday estende horário do comércio de rua em Londrina \n` +
            `3️⃣ - Informação protegida \n` +
            `#️⃣ - Voltar ao Menu Principal`
        ];
    }
    if (msg === "5") {
        banco.db[user].stage = 2;
        banco.db[user].itens.push(msg);
        return [
            `*MENU CONTATO*\n\n` +
            `1️⃣ - Nosso Endereço \n` +
            `2️⃣ - Solicitar contato \n` +
            `3️⃣ - Telefone \n` +
            `#️⃣ - Voltar ao Menu Principal`
        ];
    }

    if ((checaOpcao(msg, 5) === false) && (msg != "voltar" || msg != "Voltar" || msg != "VOLTAR")) {
        return ["❌ Opção inválida"];
    }
}

exports.execute = execute;