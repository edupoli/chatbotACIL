const venom = require('venom-bot');
const banco = require("./banco");
const stages = require("./stages");

venom.create(
  //session
  'ACIL-Londrina',

  (base64Qrimg, asciiQR, attempts, urlCode) => {
    //console.log('Number of attempts to read the qrcode: ', attempts);
    //console.log('Terminal qrcode: ', asciiQR);
    //console.log('base64 image string qrcode: ', base64Qrimg);
    //console.log('urlCode (data-ref): ', urlCode);
  },
  (statusSession, session) => {
    console.log('Status Session: ', statusSession, '\n');
    console.log('Session name: ', session, '\n');
  },
  {
    folderNameToken: 'tokens',
    headless: true,
    devtools: false,
    useChrome: true,
    debug: false,
    logQR: true,
    browserArgs: ['--no-sandbox'],
    disableSpins: false,
    disableWelcome: true,
    updatesLog: true,
    autoClose: 60000,
    createPathFileToken: true,
  }
)
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.pushname
    );
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
    }
    console.log("Estagio " + getStage(message.from));
    console.log(getItens(message.from));

  });

  client.onStateChange((state) => {
    console.log('State changed: ', state);
    if ('CONFLICT'.includes(state)) client.useHere();
    if ('UNPAIRED'.includes(state)) console.log('logout');
  });
}

function getStage(user) {
  if (banco.db[user]) {
    return banco.db[user].stage;
  } else {
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    return banco.db[user].stage;
  }
}

function getItens(user) {
  if (banco.db[user]) {
    return banco.db[user].itens;
  } else {
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    return banco.db[user].itens;
  }
}