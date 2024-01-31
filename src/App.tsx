import "@mantine/core/styles.css";
import "./App.css";
import { createTheme, MantineProvider, Group } from "@mantine/core";
import DashboardPopular from "./screens/DashboardPopular";

export default function App() {
  const theme = createTheme({
    breakpoints: {
      xs: '30em',
      sm: '48em',
      md: '64em',
      lg: '74em',
      xl: '90em',
    },
  });

  return (
    <MantineProvider theme={theme}>
      <Group>
        <DashboardPopular />
        <DashboardPopular />
        <DashboardPopular />
      
       
      </Group>
    </MantineProvider>
  );
}
