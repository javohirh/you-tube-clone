import img from "../assets/Video-player.png";
import SwiperSlide from "./Carousel/Swiper";

import profileIcon from "../assets/icons/profileIcon.svg";
import notification from "../assets/icons/notification.svg";
import { Button } from "@mantine/core";

const Video = () => {
  return (
    <div className="ps-0 md:ps-20">
      <div className="flex flex-col md:flex-row">
        <div className="w-full   md:w-[60%] mt-10">
          <img src={img} alt="" />
          <hr className="mt-3" />
          <div className=" flex  items-start   mt-8 justify-between">
            <div className="flex items-start  gap-3">
              <img className=" " src={profileIcon} alt="" />
              <div>
                <h2 className="font-bold text-xl md:text-[26px] text-white">
                  Food & Drink
                </h2>
                <p className="text-[#C2C2C2] text-xs  md:text-sm">
                  245K subscribed
                </p>
                <p className="text-[#ffffff60] hidden md:block mt-3 text-xs  md:text-sm">
                  Your cheap internet-based banner advertising will become one
                  of the sought for ads there are. Today, the world of Internet
                  advertising is rapidly evolving beyond banner ads and
                  intrusive pop-ups. Bayles A common medium for advertising on
                  the Internet is the use of banner ads.{" "}
                </p>
              </div>
            </div>
            <div className=" hidden md:flex  gap-4 ">
              <img
                className="w-6 hidden   md:block"
                src={notification}
                alt=""
              />
              <Button variant="filled" color="red" radius="xl">
                Subscribe 2.3m
              </Button>
              ;
            </div>
            <h2 className="text-red-600 block md:hidden">Subscribe</h2>
          </div>
        </div>
        <div className=" w-full md:max-w-[35%]">
          <div>
            <h2>Next</h2>
          </div>
          <SwiperSlide />
        </div>
      </div>
    </div>
  );
};

export default Video;
