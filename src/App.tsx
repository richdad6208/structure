import { Outlet } from "react-router";
import Header from "./shared/components/header";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </MantineProvider>
  );
}

export default App;
