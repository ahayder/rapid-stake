import { Flex, useColorModeValue, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ClaimBtcTab from "./Tabs/ClaimBtcTab";
import UnStake from "./Tabs/UnStake";
import Stake from "./Tabs/Stake";
import Stats from "./Stats";

const MainCointainer = ({ connectWalletHandler }) => {
  return (
    <Flex direction={"column"} px={4} alignItems={"center"} justifyContent={"space-between"} width={["100%", "80%", "55%", "50%", "40%"]}>
      <Flex width={"100%"}>
        <Stats />
      </Flex>
      <Tabs variant="unstyled" width={"100%"} align="center" size="lg">
        <TabList bg={useColorModeValue("gray.100", "gray.400")} borderRadius={"md"}>
          <Tab borderRadius={"md"} _selected={{ color: "gray.900", bg: "rapidYellow.900" }} width={"100%"} fontWeight={"bold"}>
            Stake
          </Tab>
          <Tab borderRadius={"md"} _selected={{ color: "gray.900", bg: "rapidYellow.900" }} width={"100%"} fontWeight={"bold"}>
            Un Stake
          </Tab>
          {/* <Tab
            borderRadius={"md"}
            _selected={{ color: "gray.900", bg: "rapidYellow.900" }}
            width={"100%"}
            fontWeight={"bold"}
          >
            Claim Btc
          </Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel px={"0"}>
            <Stake />
          </TabPanel>
          <TabPanel px={"0"}>
            <UnStake />
          </TabPanel>
          <TabPanel px={"0"}>
            <ClaimBtcTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default MainCointainer;
