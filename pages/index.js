import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import MainCointainer from "../components/MainContainer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RapidStake from "../contract/abis/rapidStake.json";
import RapidToken from "../contract/abis/rapidToken.json";
import RapidRewardToken from "../contract/abis/rapidRewardToken.json";
import Swal from "sweetalert2";
import Web3 from "web3";

const rapidStakeAddr = "0xb6782709816146d46052813251299Dd1B1078548";
const rapidTokenAddr = "0x2B9C86c6AAc6b13DB640a3f3e30CDBAd7f19317D";
const rapidRewardTokenAddr = "0x061ac65d2B2e15388901c1BDCf3FdaB575665D7F";

export default function Home() {
  const [address, setAddress] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [rapidStakeContractData, setRapidStakeContractData] = useState(null);
  const [rapidTokenContractData, setRapidTokenContractData] = useState(null);
  const [rapidRewardTokenData, setRapidRewardTokenData] = useState(null);
  const [stats, setStats] = useState({});
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (rapidStakeContractData) {
      getStats();
    }
  }, [rapidStakeContractData]);

  const connectWalletHandler = async () => {
    setError("");
    setSuccessMsg("");
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        /* request wallet connection */
        await window.ethereum.request({ method: "eth_requestAccounts" });

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

  const getStats = async () => {
    try {
      setIsLoading(true);
      const totalStakers = await rapidStakeContractData.methods.getTotalStakers().call();
      const totalStakedAmount = await rapidStakeContractData.methods.totalStakedAmount().call();
      const totalWithdrawnAmount = await rapidStakeContractData.methods.totalWithdrawn().call();
      setStats({
        totalStakers: totalStakers,
        totalStakedAmount: totalStakedAmount,
        totalWithdrawnAmount: totalWithdrawnAmount,
      });
      setIsLoading(false);
      return stats;
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  // get approval for rusd contract
  const getApproval = async () => {
    console.log("hola");
    try {
      const approval = await rapidTokenContractData.methods.approve(rapidStakeAddr, "1000000000000000000000000").send({ from: address });
      console.log(approval);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStake = async (amount) => {
    const stake = await rapidStakeContractData.methods.stakeTokens(amount).send({ from: address });
    console.log(stake);
  };

  const getMyStakedRPT = async () => {
    const myStakedRPT = await rapidStakeContractData.methods.stakingBalance(address).call();
    console.log(typeof(myStakedRPT));
    return myStakedRPT;
  };

  const unStake = async () => {
    const unstake = await rapidStakeContractData.methods.unstakeTokens().send({ from: address });
    console.log(unstake);
  }

  return (
    <>
      <Flex height="100vh" direction="column" justifyContent="space-between" alignItems="center">
        <NavBar address={address} connectWalletHandler={connectWalletHandler} />
        <MainCointainer unStake={unStake} getMyStakedRPT={getMyStakedRPT} stats={stats} getApproval={getApproval} handleStake={handleStake} />
        <Footer />
      </Flex>
    </>
  );
}
