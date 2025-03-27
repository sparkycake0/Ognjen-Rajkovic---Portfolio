import { motion } from "framer-motion";
import Project from "./elements/Project";

export default function ProjectsPage() {
  return (
    <main
      className="mt-20 bg-neutral-950 rounded-md p-6 flex flex-col gap-10"
      id="ProjectsPage"
    >
      <div className="flex w-full justify-center">
        <motion.h1 className="text-red-400 overflow-hidden whitespace-nowrap text-6xl text-center font-bold">
          Projects
        </motion.h1>
      </div>
      <motion.div className="p-4 bg-neutral-800 gap-5 rounded-md flex flex-col items-center ">
        <motion.h1 className="text-red-400 whitespace-nowrap overflow-hidden text-3xl text-center font-bold mb-8">
          Personal Projects
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Project
            name="Liquidus - Todo App"
            link="liquidus-todo.vercel.app"
            desc="This is one of my most favorite websites I made because of a clean
        design and very good backend I did. I made it I think in a less then 3
        hours which I was very proud of. Its powered by Vercel and made in
        NextJS and Firebase."
            motionTime={2}
          />
          <Project
            name="Xenity - Live Chat"
            desc="This is my biggest project I made. It functions like social media
              where you can login and chat with other peoples on live chat. In
              future I will most likely add private chats but for now i am very
              proud of this."
            link="xenity.vercel.app"
            motionTime={2.5}
          />
          <Project
            name="Cold-Calling - Personal Helper"
            desc="Its very simple and easy to use i made it as my personal helper for cold calling and managing phone numbers."
            link="cold-calling-three.vercel.app"
            motionTime={3}
          />
        </div>
      </motion.div>
      <motion.div className="p-4 bg-neutral-800 grid grid-cols-1 place-items-center gap-5 rounded-md">
        <motion.h1 className="text-red-400 whitespace-nowrap overflow-hidden text-3xl text-center font-bold">
          Freelance Projects
        </motion.h1>
        <Project
          name="DripWear - Shopping Website"
          link="dripwear.vercel.app"
          motionTime={4}
          desc="
            This website I made for my brother and his business. He was very
            satisfied how it ended and is very thankfull for my commitment. I've
            done this in very short time even though it's logic is very complex
            and hard to understand."
        />
        <Project
          name="FlipsBalkan - Reselling Group"
          link="flipsbalkan.com"
          motionTime={4.5}
          desc="This is my first paid website and the client was very satisfied 
          with results. It turned out to very well made and communication was very
          good, like he said."
        />
      </motion.div>
    </main>
  );
}
