const bot = require("../index");
const banco = require("../banco");
function execute(user, msg) {

    if (msg === "voltar" || msg === "Voltar" || msg === "VOLTAR") {
        banco.db[user].itens.pop();
        banco.db[user].stage = 2;
        if (banco.db[user].itens[1] === "1") {
            return [
                `*MENU INSTITUCIONAL*\n\n` +
                `1️⃣ - Diretoria Executiva \n` +
                `2️⃣ - Instituto Acil \n` +
                `3️⃣ - Fórum Desenvolve Londrina \n` +
                `4️⃣ - Núcleo de Desenvolvimento Empresarial \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if (banco.db[user].itens[1] === "2") {
            return [
                `*MENU PRODUTOS E SERVIÇOS*\n\n` +
                `1️⃣ - Nota Fiscal Eletrônica \n` +
                `2️⃣ - SPC ACIL \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if (banco.db[user].itens[1] === "3") {
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
        if (banco.db[user].itens[1] === "4") {
            return [
                `*MENU NOTÍCIAS*\n\n` +
                `1️⃣ - Encontro de empresários \n` +
                `2️⃣ - Black Friday estende horário do comércio de rua em Londrina \n` +
                `3️⃣ - Informação protegida \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if (banco.db[user].itens[1] === "5") {
            return [
                `*MENU CONTATO*\n\n` +
                `1️⃣ - Nosso Endereço \n` +
                `2️⃣ - Solicitar contato \n` +
                `3️⃣ - Telefones \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
    }
};
exports.execute = execute;