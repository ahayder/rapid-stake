import {
  Flex,
  Button,
  useColorModeValue,
  Image,
  Spacer,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  ButtonGroup,
  Divider,
  Heading,
} from "@chakra-ui/react";

const ClaimBtcTab = () => {
  return (
    <Flex direction={"column"}>
      <Flex
        bg={"rapidYellow.900"}
        p="5"
        direction={"column"}
        borderRadius={"md"}
      >
        <Heading mb={"1rem"} color={"gray.900"}>
          Claim Your BTC Reward
        </Heading>
        <Flex
          width={"80%"}
          justifyContent={"space-between"}
          alignSelf={"center"}
          alignItems={"center"}
        >
          <Text fontWeight={"bold"} color={"gray.900"}>
            Your Reward
          </Text>
          <Text
            ml={"1rem"}
            pl={"5rem"}
            pr={"0.5rem"}
            py={"0.3rem"}
            border={"1px"}
            borderColor={"gray.900"}
            borderRadius={"lg"}
            fontWeight={"bold"}
            color={"gray.900"}
          >
            0.000009 BTC
          </Text>
        </Flex>
        <Divider
          width={"80%"}
          alignSelf={"center"}
          my={"1rem"}
          bgColor={"gray.900"}
          height={"1.5px"}
        />
        <Flex
          width={"80%"}
          justifyContent={"space-between"}
          alignSelf={"center"}
          alignItems={"center"}
        >
          <Text fontWeight={"bold"} color={"gray.900"}>
            In BTC Vest
          </Text>
          <Text
            ml={"1rem"}
            pl={"5rem"}
            pr={"0.5rem"}
            py={"0.3rem"}
            border={"1px"}
            borderColor={"gray.900"}
            borderRadius={"lg"}
            fontWeight={"bold"}
            color={"gray.900"}
          >
            0.098989 BTC
          </Text>
        </Flex>
        <Divider
          width={"80%"}
          alignSelf={"center"}
          my={"1rem"}
          bgColor={"gray.900"}
          height={"1.5px"}
        />
        <Flex
          width={"80%"}
          justifyContent={"space-between"}
          alignSelf={"center"}
          alignItems={"center"}
        >
          <Text fontWeight={"bold"} color={"gray.900"}>
            Total Dist.
          </Text>
          <Text
            ml={"1rem"}
            pl={"5rem"}
            pr={"0.5rem"}
            py={"0.3rem"}
            border={"1px"}
            borderColor={"gray.900"}
            borderRadius={"lg"}
            fontWeight={"bold"}
            color={"gray.900"}
          >
            10.00989 BTC
          </Text>
        </Flex>
        <Divider
          width={"80%"}
          alignSelf={"center"}
          my={"1rem"}
          bgColor={"gray.900"}
          height={"1.5px"}
        />
      </Flex>
      <Button
        variant="solid"
        my="1rem"
        size={"lg"}
        w="100%"
        bg={useColorModeValue("gray.900", "gray.400")}
        color={"whiteAlpha.900"}
      >
        Claim Reward
      </Button>
    </Flex>
  );
};

export default ClaimBtcTab;
