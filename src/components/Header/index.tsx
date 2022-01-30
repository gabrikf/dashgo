import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarContext } from "../../context/SideBarDrawerContext";
import Logo from "../Header/Logo";
import NotificationNav from "../Header/NotificationsNav";
import Profile from "../Header/Profile";
import SearchBox from "../Header/SearchBox";

export default function Header() {
  const { onOpen } = useSideBarContext();
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mt="2"
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile isWide={isWideVersion} />
      </Flex>
    </Flex>
  );
}
