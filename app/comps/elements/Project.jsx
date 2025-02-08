import { motion } from "framer-motion";
import Link from "next/link";

export default function Project({ link, desc, name, motionTime }) {
  return (
    <motion.div className="bg-neutral-700 p-4 rounded-md">
      <h1 className="font-bold text-center text-xl">{name}</h1>
      <h1 className="text-lg text-center text-red-300 font-medium">
        <Link href={`https://${link}`} className="hover:underline">
          {link}
        </Link>
      </h1>
      <p className="text-lg text-justify">{desc}</p>
    </motion.div>
  );
}
