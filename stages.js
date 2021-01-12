var stages = {
    0: {
        descricao: "Saudação Inicial",
        obj: require("./stages/0-inicio"),
    },
    1: {
        descricao: "Informa Menu Principal",
        obj: require("./stages/1-menuPrincipal"),
    },
    2: {
        descricao: "Informa o SubMenu",
        obj: require("./stages/2-subMenus"),
    },
    3: {
        descricao: "faz a tratativa dos dados",
        obj: require("./stages/3-tratamento"),
    },
    4: {
        descricao: "Coleta o nome informado",
        obj: require("./stages/4-informaNome"),
    },
    5: {
        descricao: "Confirma o nome",
        obj: require("./stages/5-confirmaNome"),
    },
    6: {
        descricao: "Coleta o telefone",
        obj: require("./stages/6-informaTelefone"),
    },
    7: {
        descricao: "Confirma Telefone",
        obj: require("./stages/7-confirmaTelefone"),
    },
    8: {
        descricao: "Confirma o horario",
        obj: require("./stages/8-descricaoChamado"),
    },



};

exports.step = stages;