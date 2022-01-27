import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import SideBar from "../../components/SideBar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg={"gray.800"} p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              cursor="pointer"
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr px="6">
                <Td>
                  {" "}
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Koch Fodi</Text>
                    <Text fontSize="sm" color="gray.300">
                      gabrielkochfodi@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Janeiro, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="xs"
                    fontSize="xs"
                    colorScheme="green"
                    leftIcon={<Icon as={RiPencilFill} />}
                    cursor="pointer"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}