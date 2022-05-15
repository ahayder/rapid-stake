import { Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Spacer } from "@chakra-ui/react";

const Stats = () => {
  return (
    <Flex justifyContent={"space-between"} width="100%" mb={"10"}>
      <Stat>
        <StatLabel>Total Staked</StatLabel>
        <StatNumber>345,670</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total Rewards Distributed</StatLabel>
        <StatNumber>45</StatNumber>
      </Stat>
    </Flex>
  );
};

export default Stats;
