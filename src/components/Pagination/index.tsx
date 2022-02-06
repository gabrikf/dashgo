import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import PageItem from "./PageItem";

interface PaginationProps {
  totalcountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export default function Pagination({
  totalcountOfRegisters,
  currentPage = 1,
  registersPerPage = 10,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalcountOfRegisters / registersPerPage) + 1;

  const previusPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

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
      <Stack direction="row">
        {currentPage > siblingsCount + 1 && (
          <>
            <PageItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}
        {previusPages.length > 0 &&
          previusPages.map((page) => {
            return (
              <PageItem onPageChange={onPageChange} key={page} number={page} />
            );
          })}
        <PageItem onPageChange={onPageChange} number={currentPage} isCurrent />
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PageItem onPageChange={onPageChange} key={page} number={page} />
            );
          })}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage < lastPage - 1 - siblingsCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PageItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
