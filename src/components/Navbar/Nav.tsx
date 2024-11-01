import { Dispatch, SetStateAction, useState } from "react";

import classes from "./DoubleNavbar.module.css";
import YouTubeLogo from "../../assets/icons/youTube-logo.svg";
import HmaburgerMenu from "../../assets/hamburger-menu.png";
import HomeIcon from "../svgs/HomeIcon";
import TrendingIcon from "../svgs/TrendingIcon";
import Subscriptions from "../svgs/SubscriptionsIcon";

import {
  Library,
  History,
  WatchLater,
  Favourites,
  Liked,
  Music,
  Games,
  ArrowDown,
  Settings,
} from "../svgs";

import { Group } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
type link = {
  link: string;
  label: string;
  icon: JSX.Element;
};
const tabs: link[] = [
  { link: "/", label: "Home", icon: <HomeIcon /> },
  { link: "", label: "Trending", icon: <TrendingIcon /> },
  { link: "", label: "Subscriptions", icon: <Subscriptions /> },
  { link: "", label: "Library", icon: <Library /> },
  { link: "", label: "History", icon: <History /> },
  { link: "", label: "Watch Later", icon: <WatchLater /> },
  { link: "", label: "Favourites", icon: <Favourites /> },
  { link: "", label: "Liked Videos", icon: <Liked /> },
  { link: "", label: "Music", icon: <Music /> },
  { link: "", label: "Games", icon: <Games /> },
  { link: "", label: "Show More", icon: <ArrowDown /> },
  { link: "/channel", label: "Gussie Singleton", icon: <Games /> },
  { link: "/channel", label: "Nora Francis", icon: <Games /> },
  { link: "/channel", label: "Belle Briggs", icon: <Games /> },
  { link: "/channel", label: "Eunice Cortez", icon: <Games /> },
  { link: "/channel", label: "Emma Hanson", icon: <Games /> },
  { link: "/channel", label: "Leah Berry", icon: <Games /> },
  { link: "", label: "Settings", icon: <Settings /> },
];

const LinksComponent = (
  Links: link[],
  start: number,
  end: number,
  active: string,
  setActive: Dispatch<SetStateAction<string>>
): JSX.Element[] => {
  const links = Links.slice(start, end).map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <figure className="flex items-center gap-2">
        {item.icon}
        <span>{item.label}</span>
      </figure>
    </Link>
  ));
  return links;
};
export function NavbarSegmented() {
  const { pathname } = useLocation();

  const [active, setActive] = useState("Home");
  const [tab, setTab] = useState(1);
  const links: JSX.Element[] = LinksComponent(tabs, 0, 3, active, setActive);
  const links2: JSX.Element[] = LinksComponent(tabs, 3, 11, active, setActive);
  const links3: JSX.Element[] = LinksComponent(
    tabs,
    11,
    tabs.length - 2,
    active,
    setActive
  );

  return (
    <div>
      {
        <Group hiddenFrom="xs">
          <div className="flex fixed ps-2 bottom-0 w-full justify-between z-30 left-[100%] bg-black items-center  ">
            {tabs.slice(0, 4).map((item) => (
              <Link
                className={classes.link}
                style={{
                  paddingLeft: "0",
                  alignSelf: "flex-start",
                  width: "60px",
                  display: "block",
                }}
                data-active={item.label === active || undefined}
                to={item.link}
                key={item.label}
                onClick={(event) => {
                  setActive(item.label);
                }}
              >
                <figure className="flex flex-col items-center gap-2">
                  {item.icon}
                  <span className="text-xs">{item.label}</span>
                </figure>
              </Link>
            ))}
          </div>
        </Group>
      }
      <Group>
        <Group
          style={{
            position: "fixed",
            top: "-40px",
            left: "95%",
            zIndex: "11",
            width: "200px",
            background: "#17171e",
            paddingStart: "6px",
          }}
          ml={20}
          gap={5}
          className={classes.links}
          hiddenFrom="xs"
        >
          <Link
            to={""}
            className={classes.link}
            onClick={() => {
              setTab(tab === 1 ? 2 : 1);
            }}
          >
            <img src={HmaburgerMenu} alt="" />
          </Link>
          <Link to={"/"} className={classes.link}>
            <img src={YouTubeLogo} alt="" />
          </Link>
        </Group>
      </Group>
      <nav
        className={classes.navbar}
        style={{
          position: "fixed",
          top: "50px",
          left: "2px",
          background: "trasparent",
          maxHeight: "content-fit",
        }}
      >
        <Group
          style={{
            position: "fixed",
            top: "22px",
            left: "4px",
            zIndex: "11",
            width: "200px",
            background: "#17171e",
          }}
          ml={20}
          gap={5}
          className={classes.links}
        >
          <Link
            to={""}
            className={classes.link}
            onClick={() => {
              setTab(tab === 1 ? 2 : 1);
            }}
          >
            <img src={HmaburgerMenu} alt="" />
          </Link>
          <Link to={"/"} className={classes.link}>
            <img src={YouTubeLogo} alt="" />
          </Link>
        </Group>
        {tab === 1 ? (
          <>
            <Group
              visibleFrom="xs"
              style={{
                display: pathname === "/video" ? "none" : "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "24px",
              }}
            >
              {tabs.slice(0, 4).map((item) => (
                <Link
                  className={classes.link}
                  style={{
                    paddingLeft: "0",
                    alignSelf: "flex-start",
                    width: "60px",
                    display: "block",
                  }}
                  data-active={item.label === active || undefined}
                  to={item.link}
                  key={item.label}
                  onClick={() => {
                    setActive(item.label);
                  }}
                >
                  <figure className="flex flex-col items-center gap-2">
                    {item.icon}
                    <span className="text-xs">{item.label}</span>
                  </figure>
                </Link>
              ))}
            </Group>
          </>
        ) : (
          <>
            <div
              style={{ marginTop: "20px", flex: "0" }}
              className={classes.navbarMain}
            >
              {links}
            </div>
            <div
              style={{ marginTop: "25px", flex: "0" }}
              className={classes.navbarMain}
            >
              {links2}
            </div>
            <h1 className="text-lg text-white ps-[11px] mt-6">Subscriptions</h1>
            <div
              style={{ marginTop: "10px", flex: "0" }}
              className={classes.navbarMain}
            >
              {links3}
            </div>
            <div
              style={{ marginTop: "10px", flex: "0" }}
              className={classes.navbarMain}
            >
              <Link
                to=""
                data-active={
                  tabs[tabs.length - 1].label === active || undefined
                }
                className={classes.link + " flex items-center gap-2"}
                onClick={(e) => {
                  setActive(tabs[tabs.length - 1].label);
                }}
              >
                {tabs[tabs.length - 1].icon}
                <span>{tabs[tabs.length - 1].label}</span>
              </Link>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
