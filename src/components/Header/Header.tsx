import { Autocomplete, Group, Burger, rem, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";

import classes from "./HeaderSearch.module.css";

import camera from "../../assets/icons/camera.svg";
import user from "../../assets/icons/Userpic.png";
import notification from "../../assets/icons/notification.svg";
import apps from "../../assets/icons/apps.svg";
export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header
      style={{
        position: "fixed",
        top: "0",

        paddingBottom: "12px",
      }}
      className={`${classes.header} py-3 `}
    >
      <div className={classes.inner}>
        <Group
          style={{ justifyContent: "space-between", width: "100%" }}
          className="d-flex items-center justify-between"
        >
          <Group className="d-flex  gap[47px] ">
            <Input
              visibleFrom="xs"
              style={{
                "--input-bd": "unset",
                "--input-bg": "unset",
                "--input-bd-focus": "unset",
                position: "fixed",
                left: "53%",
                transform: "translateX(-50%)",
              }}
              variant="filled"
              className={
                "w-[700px] rounded-3xl bg-[#EBEBEB10] text-[#ffffff40]"
              }
              placeholder="Search"
              rightSection={
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              // visibleFrom="xs"
            />
          </Group>
          <Group visibleFrom="xs" gap={20} className={classes.links}>
            <img src={camera} alt="" />
            <img src={apps} alt="" />
            <img src={notification} alt="" />
            <img src={user} alt="" />
          </Group>
          <Group hiddenFrom="xs" gap={20} className={classes.links}>
            <IconSearch
              style={{ width: rem(20), height: rem(20), color: "white" }}
              stroke={1.5}
            />
            <img src={user} alt="" />
          </Group>
        </Group>
      </div>
    </header>
  );
}
