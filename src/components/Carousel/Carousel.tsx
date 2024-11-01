import { Link, useNavigate } from "react-router-dom";

const Carousel = ({ data, end }) => {
  const navigate = useNavigate();
  return (
    <div
      id="hero"
      className="w-full  mx-auto flex gap-[20px] flex-wrap justify-center mb-[50px]"
    >
      {data?.data?.items.slice(0, end).map((video) => (
        <div className="w-[300px] cursor-pointer" key={video.id.videoId}>
          <Link onClick={() => navigate("/video")} to={""}>
            <img
              className="w-full rounded-xl"
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
          </Link>
          <div className="flex gap-[20px] items-start mt-[10px]">
            <div>
              <h3 className="text-[#c2c2c2]">
                {video.snippet.title.slice(0, 40)} ...
              </h3>
              <p className="w-[100px] text-sm text-[#c2c2c2]">
                {video.snippet.channelTitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
