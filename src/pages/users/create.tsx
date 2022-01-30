import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg={"gray.800"} p={["6", "8"]}>
          <Heading fontSize="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
              <Input name="name" label="Nome complento" type="text" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="confirmPassword"
                label="Confirmar senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="6" justify="end">
            <HStack spacing="4">
              <Link passHref href="/users">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
