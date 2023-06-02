import { useTableContext } from "../../Contexts/TableContext";
import { useDebounce } from "../../hooks/useDebounce";
import { Flex, Input, InputGroup, InputRightElement, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";


export function TableFilter() {

  const { setFilter } = useTableContext();
  const [query, setQuery] = useState('');
  const searchQuery = useDebounce(query, 500);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  useEffect(() => {
    if (setFilter)
      setFilter(searchQuery);
  }, [searchQuery]);




  return (
    <Flex as="form" flexDir={"row"} justifyContent={"flex-end"} alignItems={"center"}>
      <InputGroup size="md" {...isWideVersion && { w: "300px" }}>
        <Input
          name="filter"
          focusBorderColor="green.500"
          bg="gray.900"
          variant="filled"
          _hover={{
            bgColor: "gray.900"
          }}
          size="lg"
          placeholder="Filtro"
          type={"text"}
          onChange={(event) => setQuery(event.target.value)} value={query}
        />
        <InputRightElement
          children={<RiSearchLine color='gray.300' />}
          cursor={"pointer"}
        />
      </InputGroup>
    </Flex>
  );
}