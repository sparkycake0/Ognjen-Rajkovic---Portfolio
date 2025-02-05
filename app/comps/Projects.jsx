import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main
      className="mt-20 bg-neutral-950 rounded-md p-6 flex flex-col gap-10"
      id="ProjectsPage"
    >
      <div className="flex w-full justify-center">
        <motion.h1
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.25, duration: 2, ease: "easeInOut" }}
          className="text-red-400 overflow-hidden whitespace-nowrap text-6xl text-center font-bold"
        >
          Projects
        </motion.h1>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ delay: 1, duration: 1 }}
        className="p-4 bg-neutral-800 gap-5 rounded-md flex flex-col items-center "
      >
        <motion.h1
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 1.25, duration: 8 }}
          className="text-red-400 whitespace-nowrap overflow-hidden text-3xl text-center font-bold mb-8"
        >
          Personal Projects
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.75 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          <div className="bg-neutral-700 p-4 rounded-md">
            <h1 className="font-bold text-center text-xl">
              Liquidus - Todo App
            </h1>
            <h1 className="text-lg text-center text-red-300 font-medium">
              <Link
                href={"https://liquidus-todo.vercel.app"}
                className="hover:underline"
              >
                liquidus-todo.vercel.app
              </Link>
            </h1>
            <p className="text-lg text-justify">
              This is one of my most favorite websites I made because of a clean
              design and very good backend I did. I made it I think in a less
              then 3 hours which I was very proud of. Its powered by Vercel and
              made in NextJS and Firebase.
            </p>
          </div>
          <div className="bg-neutral-700 p-4 rounded-md">
            <h1 className="font-bold text-center text-xl">
              Xenity - Live Chat
            </h1>
            <h1 className="text-lg text-center text-red-300 font-medium">
              <Link
                href={"https://xenity.vercel.app"}
                className="hover:underline"
              >
                xenity.vercel.app
              </Link>
            </h1>
            <p className="text-lg text-justify">
              This is my biggest project I made. It functions like social media
              where you can login and chat with other peoples on live chat. In
              future I will most likely add private chats but for now i am very
              proud of this.
            </p>
          </div>

          <div className="bg-neutral-700 p-4 rounded-md">
            <h1 className="font-bold text-center text-xl">
              Cold-Calling - Personal Helper
            </h1>
            <h1 className="text-lg text-center text-red-300 font-medium">
              <Link
                href={"https://cold-calling-three.vercel.app"}
                className="hover:underline"
              >
                cold-calling-three.vercel.app
              </Link>
            </h1>
            <p className="text-lg text-justify">
              This website I made for my brother and his business. He was very
              satisfied how it ended and is very thankfull for my commitment.
              I've done this in very short time even though it's logic is very
              complex and hard to understand.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="p-4 bg-neutral-800 grid grid-cols-1 gap-5 rounded-md">
        <h1 className="text-red-400 text-3xl text-center font-bold">
          Freelance Projects
        </h1>
        <div className="bg-neutral-700 p-4 rounded-md">
          <h1 className="font-bold text-center text-xl">
            DripWear - Shopping Website
          </h1>
          <h1 className="text-lg text-center text-red-300 font-medium">
            <Link
              href={"https://dripwear.vercel.app"}
              className="hover:underline"
            >
              dripwear.vercel.app
            </Link>
          </h1>
          <p className="text-lg text-justify">
            This website I made for my brother and his business. He was very
            satisfied how it ended and is very thankfull for my commitment. I've
            done this in very short time even though it's logic is very complex
            and hard to understand.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
