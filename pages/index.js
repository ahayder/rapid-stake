import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import MainCointainer from "../components/MainContainer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RapidStake from "../contract/abis/rapidStake.json";
import RapidToken from "../contract/abis/rapidToken.json";
import RapidRewardToken from "../contract/abis/rapidRewardToken.json";
import Swal from "sweetalert2";
import Web3 from "web3";

const rapidStakeAddr = "0x7aaf44E8aD179E99B8cc17DDC61Ea424ee55ef70";
const rapidTokenAddr = "0x2B9C86c6AAc6b13DB640a3f3e30CDBAd7f19317D";
const rapidRewardTokenAddr = "0x061ac65d2B2e15388901c1BDCf3FdaB575665D7F";

export default function Home() {
  const [address, setAddress] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [rapidStakeContractData, setRapidStakeContractData] = useState(null);
  const [rapidTokenContractData, setRapidTokenContractData] = useState(null);
  const [rapidRewardTokenData, setRapidRewardTokenData] = useState(null);
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
        setRapidStakeContractData(rapidStakeContract);

        const rapidTokenContract = new web3.eth.Contract(RapidToken.abi, rapidTokenAddr);
        setRapidTokenContractData(rapidTokenContract);

        const rapidRewardToken = new web3.eth.Contract(RapidRewardToken.abi, rapidRewardTokenAddr);
        setRapidRewardTokenData(rapidRewardToken);

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
        icon: "error",
        title: "No Wallet!",
        text: `Metamask not installed.`,
      });
    }
  };

  // get approval for rusd contract
  const getApproval = async () => {
    console.log("hola")
    try {
      const approval = await rapidRewardTokenData.methods.approve(rapidStakeAddr, "1000000000000000000000000").send({ from: address });
      console.log(approval);
    } catch (err) {
      console.log(err);
    }
  }

  const handleStake = async (amount) => {
    const stake = await rapidStakeContractData.methods.stakeTokens(amount).send({from: address});
    console.log(stake);
  }

  return (
    <>
      <Flex height="100vh" direction="column" justifyContent="space-between" alignItems="center">
        <NavBar address={address} connectWalletHandler={connectWalletHandler} />
        <MainCointainer getApproval={getApproval} handleStake={handleStake} />
        <Footer />
      </Flex>
    </>
  );
}
