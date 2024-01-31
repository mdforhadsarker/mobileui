import "@mantine/core/styles.css";
import { Text } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider>
      <Text>Welcome to Mantine UI</Text>
    </MantineProvider>
  );
}
