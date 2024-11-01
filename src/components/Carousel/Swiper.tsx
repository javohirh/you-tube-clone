import useGetData from "../../hooks/useGetData";
import { channelVideos } from "../../utilities/API";
import Carousel from "./Carousel";
const SwiperSlide = () => {
  const { data, isLoading, isError } = useGetData(channelVideos);
  if (isLoading) <h1>Loading...</h1>;
  return <Carousel data={data} end={21} />;
};

export default SwiperSlide;
