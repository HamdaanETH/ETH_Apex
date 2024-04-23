require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/wbTic9r0HsSGFAzQehhHGdTs3EJb0_53',
      accounts: ['private_key(dont put your private key here)'],
    },
  },
};