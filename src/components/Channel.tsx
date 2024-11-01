import heroImg from "../assets/channel-page-hero.png";
import profileIcon from "../assets/icons/profileIcon.svg";
import notification from "../assets/icons/notification.svg";
import video from "../assets/video.png";
import { Button } from "@mantine/core";
import { NavLink } from "react-router-dom";
import {
  
  IconSearch,
} from "@tabler/icons-react";
import SwiperSlide from "./Carousel/Swiper";
const headers = [
  "Home",
  "Videos",
  "Playlists",
  "Channels",
  "Discussion",
  "About",
];
const Channel = () => {
  return (
    <div className="mt-24">
      <img
        className="w-screen h-[100px] md:w-full md:h-auto"
        src={heroImg}
        alt=""
      />

      <div className="absolute top-28 left-10 md:static flex flex-col items-start md:flex-row md:items-center mt-8 md:justify-between">
        <div className="flex items-start  flex-col md:flex-row md:items-center gap-3">
          <img className=" " src={profileIcon} alt="" />
          <div>
            <h2 className="font-bold text-xl md:text-[26px] text-white">
              Margaret Phelps
            </h2>
            <p className="text-[#C2C2C2] text-xs  md:text-sm">
              245K subscribed
            </p>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0 gap-4 ">
          <img className="w-6 hidden   md:block" src={notification} alt="" />
          <Button variant="filled" color="red" radius="xl">
            Subscribe 2.3m
          </Button>
          ;
        </div>
      </div>
      <div className="flex justify-between items-start mt-40 md:mt-6">
        <div className=" ">
          <div className="flex gap-9">
            <div className="flex gap-9 text-lg text-white">
              {headers.slice(0, 3).map((header) => (
                <NavLink to={""} key={header} className="">
                  {header}
                </NavLink>
              ))}
            </div>
            <div className="hidden md:flex gap-9 text-lg text-white">
              {headers.slice(3, headers.length - 1).map((header) => (
                <NavLink to={""} key={header} className="">
                  {header}
                </NavLink>
              ))}
              <IconSearch />
            </div>
          </div>

          <div className=" hidden md:flex mt-10 gap-2 max-w-[800px] ">
            <img className="w-[400px]" src={video} alt="" />
            <div>
              <h2 className="font-bold text-xl md:text-[26px] text-white">
                Choosing The Best Audio Player Software For Your Computer
              </h2>
              <p className="text-[#ffffff60] mt-3 text-xs  md:text-sm">
                Your cheap internet-based banner advertising will become one of
                the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and intrusive
                pop-ups. Bayles A common medium for advertising on the Internet
                is the use of banner ads.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <h2 className="text-[#C2C2C2] mb-4">Recommended channel</h2>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center mt-4 gap-3">
              <img className="w-16" src={profileIcon} alt="" />
              <div>
                <h2 className="font-bold text-base  text-white">
                  Margaret Phelps
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <SwiperSlide />
      </div>
    </div>
  );
};

export default Channel;
