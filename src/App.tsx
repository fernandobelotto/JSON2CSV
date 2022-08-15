import {
  Box,
  Button,
  Center,
  FormLabel, Textarea,
  useClipboard,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";

export default function App() {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");
  const { hasCopied, onCopy } = useClipboard(csv);
  function generateCSV(jsonString: string) {
    const headers = Object.keys(JSON.parse(jsonString));
    const values = Object.values(JSON.parse(jsonString));

    setCsv(headers.join(",") + " \n\n " + values.join(","));
  }
  return (
    <Center h="100vh">
      <VStack spacing={2}>
        <FormLabel>JSON</FormLabel>
        <Textarea value={json} onChange={(e: any) => setJson(e.target.value)} />
        <Button onClick={() => generateCSV(json)}>Convert!</Button>

        <Box bg="gray.100" p={2} rounded="lg" w="300px">
          {csv}
        </Box>

        <Button onClick={onCopy} ml={2}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </VStack>
    </Center>
  );
}
