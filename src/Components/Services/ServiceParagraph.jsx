import { FaPenNib } from "react-icons/fa6";
import ServiceButton from "./ServiceButton";
import ServicesIcon from "./ServicesIcon";

const ServiceParagraph = () => {
  return (
    <div>
      <h5 className="flex items-center bg-red-100 w-[208px] gap-2 px-8 py-2 rounded-full text-red-700 border-1 border-red-700 font-bold mb-6 uppercase">
        {" "}
        <FaPenNib className="text-2xl" />
        Our services
      </h5>
      <p className="text-xl font-medium text-[#303838] leading-6 w-full">
        {" "}
        We offer a full range of marketing services, from strategic branding and
        digital marketing to content creation and campaign management. Our
        expertise ensures your brand stands out and thrives in a competitive
        market.
      </p>
      <ServicesIcon></ServicesIcon>
      <ServiceButton></ServiceButton>
    </div>
  );
};

export default ServiceParagraph;
