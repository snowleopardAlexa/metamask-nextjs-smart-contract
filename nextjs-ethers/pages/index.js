import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
// connect to metamask
// execute function

export default function Home() {
  const [isConnected, setIsConnect] = useState(false);
  const [provider, setProvider] = useState();

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        setSigner(connectedProvider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
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
        "Connected"
      ) : (
        <button onClick={() => connect()}>Connect!</button>
      )}
    </div>
  );
}
