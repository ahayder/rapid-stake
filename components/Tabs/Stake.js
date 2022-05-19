import { useState } from "react";
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Flex, Button, useColorModeValue, Text } from "@chakra-ui/react";

const Stake = ({ handleStake }) => {
  const [stakeAmount, setStakeAmount] = useState(0);

  return (
    <Flex direction={"column"}>
      <Flex bg={"rapidYellow.900"} p="5" direction={"column"} borderRadius={"md"}>
        <Text fontSize={"xl"} fontWeight="bold">
          Stake RUSD
        </Text>
        <NumberInput defaultValue={20} onChange={(valueString) => setStakeAmount(parseInt(valueString))}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>

      <Button onClick={() => handleStake(stakeAmount)} mt={"3"} size={"lg"} bg={useColorModeValue("gray.900", "gray.400")} color={useColorModeValue("white", "gray.900")}>
        Stake
      </Button>
    </Flex>
  );
};

export default Stake;
