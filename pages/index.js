import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import MainCointainer from "../components/MainContainer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RapidStake from "../contract/abis/rapidStake.json";
import RapidToken from "../contract/abis/rapidToken.json";
import Rusd from "../contract/abis/rusd.json";
import Swal from 'sweetalert2'
import Web3 from "web3";

const rapidStakeAddr = "0x664Ea31420bbf0dC33716Ce0b5E52b9939e69BD2";
const rapidTokenAddr = "0x5E0bE16D0604c8011B1950698fb09a402bc8A853";
const rusdAddr = "0x54AE4ce7806d031B0efa32D6f3570A6B2E1cCa19";

export default function Home() {
  const [address, setAddress] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [rapidStakeContractData, setRapidStakeContractData] = useState(null);
  const [rapidTokenContractData, setRapidTokenContractData] = useState(null);
  const [rusdContractData, setRusdContractData] = useState(null);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const connectWalletHandler = async () => {
    setError("");
    setSuccessMsg("");
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        /* request wallet connection */
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // alert("hola")
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);

        const rapidStakeContract = new web3.eth.Contract(RapidStake.abi, rapidStakeAddr);
        const rapidStakeContractAbi = rapidStakeContract.abi;
        setRapidStakeContractData(rapidStakeContract);

        const rapidTokenContract = new web3.eth.Contract(RapidToken.abi, rapidTokenAddr);
        const rapidTokenContractAbi = rapidTokenContract.abi;
        setRapidTokenContractData(rapidTokenContract);

        const rusdContract = new web3.eth.Contract(Rusd.abi, rusdAddr);
        const rusdContractAbi = ruselessContract.abi;
        setRusdContractData(rusdContract);

        window.ethereum.on("accountsChanged", async () => {
          const accounts = await web3.eth.getAccounts();
          setAddress(accounts[0]);
        });

        window.ethereum.on("networkChanged", async () => {
          console.log("network change detected");
          await web3.eth.net.getId().then((networkID) => {
            if (NETWORK_ID != networkID) {
              setAddress(null);
              setShowChangeNetwork(true);
            }
          });
        });
      } catch (err) {
        setError(err.message);
      }
    } else {
      /* MetaMask is not installed */
      Swal.fire({
        icon: 'error',
        title: 'No Wallet!',
        text: `Metamask not installed.`,
      })
    }
  };

  return (
    <>
      <Flex height="100vh" direction="column" justifyContent="space-between" alignItems="center">
        <NavBar address={address} connectWalletHandler={connectWalletHandler} />
        <MainCointainer />
        <Footer />
      </Flex>
    </>
  );
}
