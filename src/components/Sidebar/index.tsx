import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSideBarContext } from "../../context/SideBarDrawerContext";
import SideBarNavigation from "./SideBarNavigation";

export default function SideBar() {
  const { isOpen, onClose } = useSideBarContext();

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSideBar) {
    return (
      <>
        <Drawer
          size="md"
          isFullHeight
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
        >
          <DrawerOverlay width="100%" height="100%" />
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNavigation />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNavigation />
    </Box>
  );
}
