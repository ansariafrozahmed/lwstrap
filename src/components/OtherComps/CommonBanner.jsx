import { FaChevronRight } from "react-icons/fa6";

const CommonBanner = ({ bgImg, page }) => {
  return (
    <div
      className=" bg-bottom h-auto text-white py-20 md:py-32 object-cover relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="flex flex-col items-start px-10 justify-center relative z-10">
        <h2 className="text-4xl lg:text-5xl uppercase font-semibold">{page}</h2>
        <div>
          <ul className="flex items-center text-sm justify-center gap-1 pt-2">
            <li className="font-medium text-gray-100">Home</li>
            <FaChevronRight />
            <li>{page}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
