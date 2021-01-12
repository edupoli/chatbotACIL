const banco = require("../banco");
function execute(user, msg) {
    function checaOpcao(str, x) {
        if ((str >= 1) && (str <= x)) {
            return true;
        } else {
            return false;
        }
    }
    if (msg === "#") {
        banco.db[user].stage = 1;
        banco.db[user].itens.pop();
        return [
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

    if (msg == "voltar" || msg === "Voltar" || msg === "VOLTAR") {
        banco.db[user].itens.pop();
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

    if ((checaOpcao(msg, 4) === true) && (banco.db[user].itens[1] === "1")) {
        banco.db[user].itens.push(msg);
        banco.db[user].stage = 3;
        if (msg === "1") {
            return [
                `*PRESIDENTE:* \n` + `Fernando Maurício de Moraes \n` +
                `*VICE-PRESIDENTE:* \n` + `Marcia Regina Vieira Mocelin Manfrin \n` +
                `*1° DIRETOR SECRETÁRIO:* \n` + `Fabrício Massi Salla \n` +
                `*DIRETOR FINANCEIRO:* \n` + `Rodolfo Tramontini Zanluchi \n` +
                `*2º DIRETOR FINANCEIRO:* \n` + `Ricardo Beraldi Rodrigues \n` +
                `*DIRETOR COMERCIAL:* \n` + `Angelo Pamplona da Costa \n` +
                `*DIRETOR INDUSTRIAL:* \n` + `Marcus Vinicius Gimenes \n` +
                `*DIRETORA DE SERVIÇOS:* \n` + `Sheila Alves Dal-Ry Issa \n` +
                `*DIRETOR DE PRODUTOS:* \n` + `Adelino Favoretto Junior \n` +
                `*DIRETOR INSTITUCIONAL:* \n` + `Olavo Batista Junior \n` +
                `*DIRETORA JOVEM EMPRESARIO:* \n` + `Fernanda Boechat \n` +
                `*PRESIDENTE DO CONSELHO DA MULHER EMPRESÁRIA:* \n` + `Marisol Chiesa \n`
            ];
        }
        if (msg === "2") {
            return [
                `*O braço sociocultural da entidade.* \n` +
                `Em 25 de março de 2003, nascia o Instituto ACIL. Trata-se de uma organização da sociedade civil de interesse público, sem fim econômico, de direito privado, com autonomia administrativa e financeira, voltada às seguintes finalidades: \n` +
                `- Promoção do desenvolvimento econômico e social e combate à pobreza; \n` +
                `- Defesa, preservação e conservação do meio ambiente e promoção do desenvolvimento sustentável; \n` +
                `- Promoção da cultura, defesa e conservação do patrimônio histórico e artístico; \n` +
                `- Experimentação, não lucrativa, de novos modelos associado-produtivos e de sistemas alternativos de produção, comércio, emprego e créditos; \n` +
                `- Estudos e pesquisas, desenvolvimento de tecnologias alternativas, produção e divulgação de informações e conhecimentos técnicos e científicos; \n` +
                `- Promoção da ética, da paz, da cidadania, dos direitos humanos, da democracia e outros valores universais; \n` +
                `- Desenvolvimento de campanhas e programas de orientação e de apoio às instituições da sociedade civil; \n` +
                `- Desenvolvimento de atividades com o setor público e privado; \n` +
                `- Promoção de eventos, encontros, seminários, congressos, palestras, etc; \n` +
                `- Integrar as atividades com programas oficiais do governo; \n` +
                `- Formar parcerias com instituições educacionais públicas e privadas; \n` +
                `- Desenvolver programas, projetos, estudos e pesquisas na área social; \n` +
                `- Desenvolver programas e projetos para integrar as atividades sociais com setor empresarial.`
            ];
        }
        if (msg === "3") {
            return [
                `O Fórum Desenvolve Londrina é um movimento composto por entidades e pessoas de diversos segmentos com o objetivo de unir a sociedade organizada e mobilizar a comunidade para o desenvolvimento sustentável de Londrina e região. Isso é conquistado por meio da atividade permanente de planejamento estratégico. O fórum foi instituído pelo Decreto Municipal nº.556 de 11 de Novembro de 2005.`
            ];
        }
        if (msg === "4") {
            return [
                `*O FUTURO DA CIDADE PASSA POR AQUI* \n\n` +
                `Criado em 2009, o Núcleo de Desenvolvimento Empresarial de Londrina é o articulador de alguns dos principais projetos econômicos da cidade. Formado por representantes de entidades locais, o Núcleo reúne semanalmente na ACIL para garantir a execução e o aperfeiçoamento de políticas de desenvolvimento sustentável local. Entre os principais temas trabalhados pelo grupo - e que dificilmente se realizariam sem ele -, estão a ampliação do Aeroporto de Londrina; o programa Compra Londrina; a Sala do Empreendedor; a Lei Municipal de Metas; a implantação da Pedagogia Empreendedora nas escolas municipais; o estudo de viabilidade do Centro de Convenções; a viabilização do Tecnocentro, do Centro de Transferência Tecnológica e da Cidade Industrial de Londrina; a criação de cursos de Engenharia - e várias outras questões essenciais para que a cidade tenha um futuro melhor, com desenvolvimento e qualidade de vida.`
            ];
        }
    }
    else {
        if ((checaOpcao(msg, 4) === false) && (banco.db[user].itens[1] === "1")) {
            return ["❌ Opção inválida"];
        }
    }
    if ((checaOpcao(msg, 2) === true) && (banco.db[user].itens[1] === "2")) {
        banco.db[user].itens.push(msg);
        banco.db[user].stage = 3;
        if (msg === "1") {
            return [
                `*Nota Fiscal Eletrônica* \n\n` +
                `Associados ACIL podem contar com o serviço de Nota Fiscal Eletrônica, uma forma prática, econômica e segura de cumprir a determinação de emitir o documento por meio virtual.\n` +
                `O serviço é composto por um sistema de emissão que pode ser acessado de forma fácil e rápida de qualquer computador com acesso à internet.\n` +
                `Conheça algumas vantagens em utilizar o serviço de Nota Fiscal Eletrônica da ACIL.`
            ];
        }
        if (msg === "2") {
            return [
                `*SPC ACIL* \n\n` +
                `Um modo simples e prático de obter informações atualizadas.\n` +
                `Os serviços de proteção ao crédito da ACIL trazem informações sobre: Pessoa Jurídica, Pessoa Física,Cheque e Outras Consultas.\n` +
                `Ele tem parceria com SPC Brasil que amplia a cobertura para o território Nacional.\n` +
                `Simples e prático, o SPC ACIL é a ferramenta mais eficiente para que você obtenha informações estratégicas e seguras em suas transações de venda à vista ou a prazo.\n` +
                `Nossas Consultas incluem informações sobre cheques, CPFs,CNPJs e veículos.\n` +
                `É a credibilidade da ACIL a serviço do comércio e da economia. Afinal, informação confiável é um dos bens mais preciosos no desenvolvimento de uma sociedade.`
            ];
        }
    }
    else {
        if ((checaOpcao(msg, 2) === false) && (banco.db[user].itens[1] === "2")) {
            return ["❌ Opção inválida"];
        }
    }
    if ((checaOpcao(msg, 5) === true) && (banco.db[user].itens[1] === "3")) {
        banco.db[user].itens.push(msg);
        banco.db[user].stage = 3;
        if (msg === "1") {
            return [
                `*Compra Londrina* \n\n` +
                `As compras públicas são uma alternativa para o desenvolvimento das micro e pequenas empresas, além de valorizar os negócios locais e aquecer a economia de uma cidade. Foi atenta a este mercado que, em 2010, ACIL, Sebrae, Sinduscon, Sindimetal, Sescap, Codel e Sincoval idealizaram o programa Compra Londrina como um instrumento permanente de incentivo, capacitação de empresas locais, fomento ao desenvolvimento e à competitividade por meio da participação em licitações, pregões eletrônicos e outras modalidades definidas pela lei.`
            ];
        }
        if (msg === "2") {
            return [
                `*Empreender* \n\n` +
                `Em ação desde 1999 na ACIL, o Programa Empreender já atendeu centenas de empresas dos mais diversos segmentos tendo como ponto de partida o associativismo. Na prática, a proposta é unir empresários de um mesmo setor, tornando parceiros os que antes se viam como concorrentes. Na busca de solução para problemas comuns, todos saem ganhando. `
            ];
        }
        if (msg === "3") {
            return [
                `*Fomento Paraná* \n\n` +
                `Como forma de auxiliar micro e pequenas empresas no enfrentamento à crise provocada pelo novo coronavírus, a Fomento Paraná, instituição financeira do Governo do Estado, está oferecendo linhas de crédito destinadas à manutenção de salários e empregos (com equalização), bem como para giro puro (sem equalização, uso no dia a dia do empreendimento).\n` +
                `A ACIL, como Correspondente Fomento Paraná, abre caminho para as propostas de solicitações financiamentos a partir de 25.000 até R$ 1,5 milhão, além de oferecer todo o apoio técnico no acompanhamento para os empreendedores`
            ];
        }
        if (msg === "4") {
            return [
                `*Sala do Empreendedor* \n\n` +
                `Projeto importante para o desenvolvimento social e econômico de Londrina, a Sala do Empreendedor é um local que serve de fonte de informações às pessoas que querem constituir um Empreendedor Individual, bem como àqueles que já o são. O projeto conta com a participação de funcionários treinados e capacitados para dar as orientações necessárias e inscrever os trabalhadores na categoria Micro Empreendedor Individual.\n` +
                `A Sala do Empreendedor foi uma iniciativa conjunta da ACIL (Associação Comercial e Industrial de Londrina), Codel (Instituto de Desenvolvimento de Londrina), CRC (Conselho Regional de Contabilidade), SEBRAE (Serviço de Apoio às Micro e Pequenas Empresas do Estado do Paraná), SESCAP (Sindicato das Empresas de Serviços Contábeis e das Empresas de Assessoria, Perícias, Informações e Pesquisa do Estado do Paraná), SINCOLON (Sindicato dos Contabilistas de Londrina) e Prefeitura de Londrina.\n` +

                `*SERVIÇO:* \n` +
                `Sala do Empreendedor \n` +
                `Av. Duque de Caxias, 635 (piso térreo da Prefeitura de Londrina).  \n` +
                `Fone: (43) 3372-4108. \n` +
                `Horário de atendimento: segunda a sexta-Feira, das 12 às 18 horas.`
            ];
        }
        if (msg === "5") {
            return [
                `*Frente a Frente* \n\n` +
                `Encontro para tratar de temas contemporâneos, com um especialista esclarecendo as dúvidas dos associados e ativando um bate-papo com os participantes. É um diferencial para envolver o associado nas rotinas da instituição e conhecer mais claramente suas demandas. `
            ];
        }
    }
    else {
        if ((checaOpcao(msg, 5) === false) && (banco.db[user].itens[1] === "3")) {
            return ["❌ Opção inválida"];
        }
    }
    if ((checaOpcao(msg, 3) === true) && (banco.db[user].itens[1] === "4")) {
        banco.db[user].itens.push(msg);
        banco.db[user].stage = 3;
        if (msg === "1") {
            return [
                `*Encontro de empresários* \n\n` +
                `O Mabu Thermas Grand Resort, em Foz do Iguaçu, foi o cenário do 30º Encontro Empresarial Paranaense, realizado neste fim de semana com uma programação intensa de reuniões, palestras, painéis e apresentações. A ACIL foi representada pelo presidente Fernando Moraes e a vice-presidente Marcia Manfrin (foto). \n` +
                `Dentro do evento, foi realizada a última reunião do ano do Conselho de Administração da Faciap - Federação das Associações Comerciais e Empresariais do Estado do Paraná - e também a última da gestão de Marco Tadeu à frente da entidade. A reunião ocorreu na sede da ACIFI - Associação Comercial e Empresarial de Foz do Iguaçu, fez um balanço das conquistas dos últimos quatro anos, teve formato híbrido - presencial e virtual - e também contou com a presença de Fernando Moraes, além de outros representantes do associativismo paranaense.  `
            ];
        }
        if (msg === "2") {
            return [
                `*Black Friday estende horário do comércio de rua em Londrina* \n\n` +
                `Fonte: Assessoria ACIL \n` +
                `O comércio de rua de Londrina funcionará das 9 às 20 horas no dia 27 de novembro, sexta-feira, quando acontece a Black Friday. \n` +
                `No sábado, 28, o atendimento das lojas de rua será das 9 às 18 horas. \n` +
                `A data, criada nos Estados Unidos, e já tradicional no Brasil, é aguardada com ansiedade por tratar-se de um dia de descontos especiais e grandes promoções.`
            ];
        }
        if (msg === "3") {
            return [
                `*Informação protegida* \n\n` +
                `Fonte: Fernanda Bressan - Revista Mercado em Foco/ACIL \n` +
                `Desde 18 de setembro, a Lei Geral de Proteção de Dados (LGPD) está em vigor. O cuidado com os dados pessoais de clientes precisa ser redobrado e usado de acordo com a nova legislação. É importante conhecer em detalhes, pois os artigos determinam o que as empresas podem e não podem fazer no que tange guardar, compartilhar ou usar as informações que cada cliente fornece. Em resumo, a lei define a forma como dados pessoais e sensíveis devem ser tratados e armazenados pelas empresas. \n` +
                `Poucas estão conscientes do que devem fazer. “Mais de 65% ainda nem começaram o processo de adequação à LGPD. O começo é a conscientização, e este passo inicial está sendo esquecido”, destaca a advogada atuante na área de proteção de dados e direito digital, Taísa Scripes. Ela aponta que vamos viver uma mudança de cultura em relação à proteção de dados, um processo parecido com o que vivemos quando a Lei do Consumidor entrou em vigor. “Aos poucos, a mudança vai se tornar automatizada, mas reforço que o primeiro passo é sempre conscientizar.”`
            ];
        }
    }
    else {
        if ((checaOpcao(msg, 3) === false) && (banco.db[user].itens[1] === "4")) {
            return ["❌ Opção inválida"];
        }
    }
    if ((checaOpcao(msg, 3) === true) && (banco.db[user].itens[1] === "5")) {
        banco.db[user].itens.push(msg);
        banco.db[user].stage = 3;
        if (msg === "1") {
            return [
                `*Endereço* \n\n` +
                `Rua Minas Gerais, 297, 1º Andar, Londrina - PR, CEP: 86010-905`
            ];
        }
        if (msg === "2") {
            banco.db[user].stage = 4;
            return [
                `📞 *Nós Ligamos para você* ☎️ \n\n` +
                `Agora ficou muito mais facil entrar em contato com a ACIL. \n` +
                `Basta nos informar seu *nome* e um *telefone*. Ah se preferir nos diga qual seria o melhor horario que ligamos para você.\n\n` +
                `Vamos la me diga qual é o seu nome ? ✍🏼`
            ];
        }
        if (msg === "3") {
            return [
                `*Telefone* \n` +
                `43 3374-3000 \n` +

                `*WhatsApp* \n` +
                `(43) 98457-1486`
            ];
        }
    }
    else {
        if ((checaOpcao(msg, 3) === false) && (banco.db[user].itens[1] === "5")) {
            return ["❌ Opção inválida"];
        }
    }
}

exports.execute = execute;