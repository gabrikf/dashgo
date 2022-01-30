import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  isWide?: boolean;
}

export default function Profile({ isWide = true }: ProfileProps) {
  return (
    <Flex align="center">
      {isWide && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Koch Fodi</Text>
          <Text color="gray.300" fontSize="small">
            gabrielkochf@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Gabriel Koch Fodi"
        src="https://github.com/gabrikf.png"
      />
    </Flex>
  );
}
