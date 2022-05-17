import {
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}>
    {children}
  </Link>
);

export default function NavBar({ address, connectWalletHandler }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex bg={useColorModeValue("gray.100", "gray.400")} px={4} h={16} alignItems={"center"} justifyContent={"space-between"} width={"100%"}>
        <Image width={"10rem"} src="/logo.png" alt="Sahara Token Logo" />

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {address ? (
              <Button fontWeight="700" px="20px" py="11px" bgColor="rapidYellow.900" borderRadius="20px" border="1px solid white" color="white" cursor="pointer" ml="2" onClick={connectWalletHandler} _hover={{ color: "gray.900" }}>
                {address.substring(0, 5) + " ... " + address.slice(-4)}
              </Button>
            ) : (
              <Button fontWeight="700" px="20px" py="11px" bgColor="rapidYellow.900" borderRadius="20px" border="1px solid white" color="gray.800" cursor="pointer" ml="2" onClick={connectWalletHandler} _hover={{ color: "gray.900" }}>
                Connect Wallet
              </Button>
            )}
            <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
