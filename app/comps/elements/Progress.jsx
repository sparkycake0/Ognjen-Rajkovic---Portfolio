import { motion } from "framer-motion";

export default function Progress({ value }) {
  return (
    <main className="h-3/5 w-1/2 bg-neutral-800 rounded-full flex">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 0.75, type: "spring" }}
        className="h-full bg-red-400 rounded-full"
        style={{ width: `${value}%` }}
      ></motion.div>
    </main>
  );
}
