import servicesOne from "../../assets/services/servicesOne.jpg";
import servicesTwo from "../../assets/services/servicesTwo.jpg";
import servicesThree from "../../assets/services/servicesThree.jpg";
import "./Service.css";

const ServiceCard = () => {
  return (
    <div className="flex justify-center gap-2">
      <div className="relative cursor-pointer hover-effect">
        <div className="absolute inset-0 bg-black/60 rounded"></div>
        <img src={servicesOne} alt="" className="rounded w-[500px]" />
        <div className="absolute top-24 left-0 text-white p-4">
          <h2 className="text-[70px] leading-16 font-extrabold uppercase">
            strategic Branding
          </h2>
          <p className="mt-16 text-lg font-light">
            Advanced targeting strategies to identify and capture high-quality
            leads that convert. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Vitae facilis itaque nesciunt repellat. Molestias
            deleniti tempore suscipit dolore laudantium vel qui eveniet.
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover-effect">
        {" "}
        <div className="absolute inset-0 bg-black/60 rounded"></div>
        <img src={servicesTwo} alt="" className="rounded w-[500px]" />
        <div className="absolute top-24 left-0 text-white p-4">
          <h2 className="text-[70px] leading-16 font-extrabold uppercase">
            Visual production
          </h2>
          <p className="mt-16 text-lg font-light">
            Advanced targeting strategies to identify and capture high-quality
            leads that convert. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Vitae facilis itaque nesciunt repellat. Molestias
            deleniti tempore suscipit dolore laudantium vel qui eveniet.
          </p>
        </div>
      </div>
      <div className="relative cursor-pointer hover-effect">
        {" "}
        <div className="absolute inset-0 bg-black/60 rounded"></div>
        <img src={servicesThree} alt="" className="rounded w-[500px]" />
        <div className="absolute top-24 left-0 text-white p-4">
          <h2 className="text-[70px] leading-16 font-extrabold uppercase">
            Website design
          </h2>
          <p className="mt-16 text-lg font-light">
            Advanced targeting strategies to identify and capture high-quality
            leads that convert. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Vitae facilis itaque nesciunt repellat. Molestias
            deleniti tempore suscipit dolore laudantium vel qui eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
