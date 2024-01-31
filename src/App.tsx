import "@mantine/core/styles.css";
import Button from "./components/Button";
import "./App.css";
import { NavbarMinimal } from "./components/NavBarMinimal";
import { createTheme, MantineProvider } from "@mantine/core";

export default function App() {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "cyan",

  });

  return (
    <MantineProvider theme={theme}>
      <NavbarMinimal />
      <Button />
    </MantineProvider>
  );
}
