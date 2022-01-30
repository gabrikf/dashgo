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
import { SubmitErrorHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),

  confirmPassword: yup
    .string()
    .required("Confirmar senha obrigatória")
    .oneOf([null, yup.ref("password")], "Senhas devem ser iguais"),
});

export default function CreateUser() {
  const { handleSubmit, formState, register } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitErrorHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" px="6">
        <SideBar />
        <Box
          flex="1"
          borderRadius={8}
          bg={"gray.800"}
          p={["6", "8"]}
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading fontSize="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome complento"
                type="text"
                {...register("name")}
                error={errors.name}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                label="Senha"
                type="password"
                {...register("password")}
                error={errors.password}
              />
              <Input
                name="confirmPassword"
                label="Confirmar senha"
                type="password"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="6" justify="end">
            <HStack spacing="4">
              <Link passHref href="/users">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
