const MyTahsinToken = artifacts.require("MyTahsinToken");

module.exports = function (_deployer) {
  _deployer.deploy(MyTahsinToken, 1000);
};
