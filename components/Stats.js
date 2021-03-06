import { Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Spacer } from "@chakra-ui/react";

const Stats = ({ stats }) => {
  return (
    <Flex justifyContent={"space-between"} width="100%" mb={"10"}>
      <Stat>
        <StatLabel>Stakers</StatLabel>
        <StatNumber>{stats.totalStakers || 0}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total Staked</StatLabel>
        <StatNumber>{stats.totalStakedAmount && Number(stats.totalStakedAmount).toFixed(4) || 0}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total Withdrawn</StatLabel>
        <StatNumber>{stats.totalWithdrawnAmount && Number(stats.totalWithdrawnAmount).toFixed(4) || 0}</StatNumber>
      </Stat>
    </Flex>
  );
};

export default Stats;
