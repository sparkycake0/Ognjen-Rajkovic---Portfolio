import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main
      className="mt-20 bg-neutral-950 rounded-md p-6 flex flex-col gap-10"
      id="ProjectsPage"
    >
      <h1 className="text-red-400 text-6xl text-center font-bold">Projects</h1>
      <div className="p-4 bg-neutral-800 gap-5 rounded-md">
        <h1 className="text-red-400 text-3xl text-center font-bold">
          Personal Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-neutral-700 p-4 rounded-md">
            <h1 className="font-bold text-center text-xl">
              Liquidus - Todo App
            </h1>
            <h1 className="text-lg text-center text-red-300 font-medium">
              <Link href={"liquidus.vercel.app"} className="hover:underline">
                liquidus.vercel.app
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
              <Link href={"liquidus.vercel.app"} className="hover:underline">
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
        </div>
      </div>
      <div className="p-4 bg-neutral-800 grid grid-cols-1 gap-5 rounded-md">
        <h1 className="text-red-400 text-3xl text-center font-bold">
          Freelance Projects
        </h1>
      </div>
    </main>
  );
}
