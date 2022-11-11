require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind erosion half private blue soon'; 
let testAccounts = [
"0xc1649e44d57039ae6a869f40c86f048878faf1f7b05cdda4d8876c3417a2d0c9",
"0xc829b0d3084e7edb5dcec0d2ecd79e8070e6d33b99ccdcd97456c07118ada0a3",
"0x28619412d2bb393c2c432e29e4e98fb3094384b851cac9ac23a6c630476507f7",
"0x18b099dd2f0f9d71008a5502103823d3813b03b084d0bda61f1070194ac9d70b",
"0x338399e72bf9e97094e6bd6480ebe30648341dc83231533fb5c3e20eb827e7c8",
"0x5ddf87950048011d2fb09ce874b77721bd931021fb25631ca166c5cd4a1a0bd5",
"0x5296dcb6d642430d08f8d57d1b2dc6395fb710ee383a99b4af81e84c10b093c7",
"0x80045a742aa0475aca46e128eb947787be124b5ba6367d9f89264cc0b246a010",
"0xc5a43460c2d4828d01991df8e7236af898801785474e8ee30bb309e53b0601fd",
"0x006eaf107e4e7c36db523d7c96bafa72f2ec5391b9eb767985082e8a3e9b2d70"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


