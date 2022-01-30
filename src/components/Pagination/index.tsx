import { Box, HStack, Stack } from "@chakra-ui/react";
import PageItem from "./PageItem";

export default function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack>
        <PageItem number={1} isCurrent />
        <PageItem number={2} />
        <PageItem number={3} />
        <PageItem number={4} />
        <PageItem number={5} />
        <PageItem number={6} />
      </HStack>
    </Stack>
  );
}
