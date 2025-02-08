import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main
      className="mt-20 bg-neutral-950 rounded-md p-6 flex flex-col lg:px-48 mb-20"
      id="ContactPage"
    >
      <motion.h1
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 0.5, duration: 2 }}
        className="text-red-400 whitespace-nowrap self-center overflow-hidden text-6xl text-center font-bold"
      >
        Contact
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 1.5, duration: 2 }}
        className="text-red-400 whitespace-nowrap overflow-hidden self-center font-semibold w-full flex justify-center"
      >
        <Link
          href={"https://lunarweb.css@gmail.com"}
          className="text-center text-xl lg:text-3xl hover:underline"
        >
          lunarweb.css@gmail.com
        </Link>
      </motion.div>
      <motion.h1
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 2.5, duration: 2 }}
        className="text-lg self-center whitespace-nowrap overflow-hidden text-center mt-6"
      >
        Feel free to ask for anything!
      </motion.h1>
      <motion.form
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 3.25, duration: 0.5 }}
        action="https://formspree.io/f/xpwzlery"
        method="POST"
        className="mt-10 p-4  bg-neutral-800 rounded-md flex flex-col"
      >
        <div className="flex justify-between gap-4">
          <input
            type="text"
            name="name"
            className="lg:w-1/3 w-3/6 rounded-md bg-neutral-700 text-xl p-2 shadow-2xl outline-none"
            placeholder="Name..."
            required
          />
          <input
            type="text"
            name="email"
            className="lg:w-1/3 w-3/6 rounded-md bg-neutral-700 text-xl p-2 shadow-2xl outline-none"
            placeholder="Email..."
            required
          />
        </div>
        <textarea
          type="text"
          name="message"
          required
          className="mt-4 rounded-md bg-neutral-700 resize-none w-full h-48 text-xl p-2 shadow-2xl outline-none"
          placeholder="Message..."
        />
        <button
          type="submit"
          className="mt-8 text-xl p-2 bg-neutral-800 border-4 border-red-400 rounded-md text-center self-center hover:border-neutral-800 hover:bg-red-400 hover:text-black transition-color duration-200 shadow-2xl w-2/6"
        >
          Submit
        </button>
      </motion.form>
    </main>
  );
}
