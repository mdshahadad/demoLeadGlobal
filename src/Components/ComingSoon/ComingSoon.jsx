import { motion } from "framer-motion";
import Navbar from "../Header/Navbar/Navbar";

export default function ComingSoon() {
  return (
    <div className="home-container w-full">
      <div className="bg-black z-0">
        <Navbar></Navbar>
      </div>
      <div className="lg:h-[400px] h-[200px] flex items-center justify-center mt-16 bg-red-200 lg:max-w-5xl lg:mx-auto rounded-4xl mx-4 border-2 border-red-700">
        <motion.h1
          className="text-5xl text-center font-extrabold uppercase text-white"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h2 className="text-red-700 text-4xl">Coming Soon</h2>
        </motion.h1>
      </div>
    </div>
  );
}
