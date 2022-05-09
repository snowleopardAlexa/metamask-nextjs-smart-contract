   const { ethers } = require("ethers")
   
   // connect to metamask
   function connect() {
    if (typeof window.ethereum !== "undefined") {
      await ethereum.request({ method: "eth_requestAccounts" })
     }
   }
   // send transactions
   async function execute() {
      // address
      // contract ABI (blueprint to interact with a contract)
      // function
      // node connection
   }

   // export functions
   module.exxports = {
       connect,
       execute,
   }