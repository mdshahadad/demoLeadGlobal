import { Link } from "react-router";

const WorkBtn = () => {
  return (
    <div className="flex justify-start">
      <Link to="/whoweare">
        <button className="uppercase mt-14 bg-[rgb(255,201,204)] text-[#D71921] px-32 py-4 rounded-lg font-bold text-lg hover:bg-[#F9FAFB] duration-1000 border-2 border-[#F9FAFB] hover:border-2 hover:border-[#D71921] cursor-pointer">
          see all works
        </button>
      </Link>
    </div>
  );
};

export default WorkBtn;
