const Migrations = artifacts.require("Migrations");
const MyContract = artifacts.require("MyContract");

module.exports = function (deployer) {
  deployer.deploy(Migrations).then(function() {
    return deployer.deploy(MyContract);  // Migrar también MyContract
  });
};
