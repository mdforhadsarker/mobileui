import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Button from "./components/Button";
import './App.css'

export default function App() {
  return (
    <MantineProvider>
      <Button />
    </MantineProvider>
  );
}
