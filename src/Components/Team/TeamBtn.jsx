import { Link } from "react-router";

const TeamBtn = () => {
  return (
    <div className="flex justify-center">
      <Link to="/whoweare">
        <button
          className="uppercase mt-14 text-red-50  
        bg-[#D71921] border-[#D71921] lg:px-32 px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F9FAFB] duration-1000 border-2 hover:border-[#D71921] hover:text-[#D71921] cursor-pointer"
        >
          Discover our team
        </button>
      </Link>
    </div>
  );
};

export default TeamBtn;
