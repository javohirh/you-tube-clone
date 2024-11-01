import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeaderSearch } from "../components/Header/Header";
import { NavbarSegmented } from "../components/Navbar/Nav";
import SwiperSlide from "../components/Carousel/Swiper";
import Video from "../components/Video";

function VideoPage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 80,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        style={{ backgroundColor: "transparent", borderBottom: "none" }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <HeaderSearch />
      </AppShell.Header>

      <AppShell.Navbar
        style={{ backgroundColor: "transparent", borderRight: "none" }}
        p="md"
      >
        <NavbarSegmented />
      </AppShell.Navbar>

      <AppShell.Main style={{ paddingLeft: "0px" }}>
        <Video />
      </AppShell.Main>
    </AppShell>
  );
}

export default VideoPage;