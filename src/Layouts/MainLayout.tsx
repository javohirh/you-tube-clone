import { AppShell } from "@mantine/core";

import { HeaderSearch } from "../components/Header/Header";
import { NavbarSegmented } from "../components/Navbar/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 80,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Header
        style={{ backgroundColor: "transparent", borderBottom: "none" }}
      >
        <HeaderSearch />
      </AppShell.Header>

      <AppShell.Navbar
        style={{ backgroundColor: "transparent", borderRight: "none" }}
        p="md"
      >
        <NavbarSegmented />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;
