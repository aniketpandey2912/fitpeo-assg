import { Box } from "@chakra-ui/react";
import Main from "./components/Main";

function App() {
  return (
    <Box
      className="App"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      fontSize={{ base: "sm", md: "md" }}
    >
      <Main />
    </Box>
  );
}

export default App;
