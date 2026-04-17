import { motion } from "framer-motion";
import logo from "../assets/logo/FuelScript-logo.png"

export default function Loader() {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.img
        src={logo}
        alt="logo"
        className="logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.9, 1.05, 1],
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      {/* subtle pulse loop */}
      <motion.div
        className="ring"
        animate={{
          scale: [1, 1.4],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}