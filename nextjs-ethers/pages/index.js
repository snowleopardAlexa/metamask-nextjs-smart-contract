import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";


function Home() {
const [isConnected, setIsConnected] = useState(false)
const [signer, setSigner] = useState(undefined)

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      setIsConnected(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setSigner(provider.getSigner());
    } catch (e) {
      console.log(e);
    }
  } else {
    setIsConnected(false);
  }
}

async function execute() {
  if (typeof window.ethereum !== "undefined") {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const abi =  [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_favoriteNumber",
            "type": "uint256"
          }
        ],
        "name": "addPerson",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "nameToFavoriteNumber",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "people",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "favoriteNumber",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "retrieve",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_favoriteNumber",
            "type": "uint256"
          }
        ],
        "name": "store",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
    // stick metamask to ethers
   const contract = new ethers.Contract(contractAddress, abi, signer)
   try {
     await contract.store(42)
     } catch(error) {
       console.log(error)
     } 
   } else {
     document.getElementById("executeBtn").innerHTML = "Please install Metamask"
   }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend for Metamask</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isConnected ? (
        <>
        Connected!
        <button onClick={() => execute()}>Execute</button>
        </>
      ) : (
        <button onClick={() => connect()}>Connect</button>
      )}

    </div>
  )
}

export default Home;