import { motion } from "framer-motion";
import Navbar from "../Header/Navbar/Navbar";

export default function ComingSoon() {
  return (
    <div className="bg-black">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="h-lvh flex items-center justify-center">
        <motion.h1
          className="text-5xl text-center font-extrabold uppercase text-white"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div></div>
          Coming Soon
        </motion.h1>
      </div>
    </div>
  );
}
