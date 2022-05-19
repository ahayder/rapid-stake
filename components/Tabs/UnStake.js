import React, { useState, useEffect } from "react";
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Flex, Button, useColorModeValue, Text } from "@chakra-ui/react";

const UnStake = ({ unStake, getMyStakedRPT }) => {
  const [myBalance, setMyBalance] = useState(0);

  useEffect(() => {
    if(myBalance) console.log(myBalance);
  }, [myBalance]);
  
  const showBalance = async () => {
    const value = await getMyStakedRPT();
    setMyBalance(value);
  }

  return (
    <Flex direction={"column"}>
      <Flex bg={"rapidYellow.900"} p="5" direction={"column"} borderRadius={"md"}>
        <Text fontSize={"xl"} fontWeight="bold">
          My Staked RPT
        </Text>
        <Button onClick={showBalance} type="small" variant={"link"}>Click to show my balance</Button>
        {myBalance && <Text fontSize={"xl"} fontWeight="bold">{myBalance}</Text>}
      </Flex>

      <Button onClick={unStake} mt={"3"} size={"lg"} bg={useColorModeValue("gray.900", "gray.400")} color={useColorModeValue("white", "gray.900")}>
        Un Stake
      </Button>
    </Flex>
  );
};

export default UnStake;
