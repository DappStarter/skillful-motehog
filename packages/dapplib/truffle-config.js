require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember pupil inner clip bridge sorry'; 
let testAccounts = [
"0x043b0fa16ada5815fef0680afd210f2fa0635192c19020aa4bf3f460ef5e51fb",
"0x075af6b95c2b62466bd1f6abc9a40b7955f37a5b431bb582e22064fffb835006",
"0x1c9005dfcb6c2f012f73596d5b5ccc1e1b1cf34b61a193725884fd54e3c4c211",
"0x9ceb8e85ac11b148855bfcaa82892bd77c7bb9f7f916305c6a7a5d962a7c78b9",
"0xca5e56e191761dd05bc85981610db1babab0ea72acfa278630c7e7715f636121",
"0xb75f8a33294fa5dcc9941808764cea14dc7d13a2df5e0ccbaba79391698dd192",
"0x4e8bc38247786112f426d5028e7153272df3274d0da7e5255497e29af004b3a1",
"0x39eccb9c8540a6275e666fc042dfdeccba629c09d6dca7b0b24382621f8a6376",
"0xb0a690f259b6b8ea668d93e2df30b9aaa16e9b61bdb4dd3f23076e5af91a3223",
"0x97ed8ccda0b31d236bbb13cc3e62586725930ee289fb03d2985240c60d9ed627"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
