import Image from "next/image";
import Link from "next/link";
import me from "../assets/me.jpg";
import github from "../assets/github-brands-solid.svg";
import instagram from "../assets/instagram-brands-solid.svg";
import phone from "../assets/phone-solid.svg";
import linkedin from "../assets/linkedin-brands-solid.svg";

export default function HomePage() {
  return (
    <main
      id="HomePage"
      className="w-full h-full rounded-md flex flex-col lg:flex-row p-6 mt-12 bg-neutral-950"
    >
      <div className="w-full flex flex-col items-center lg:justify-center py-3">
        <Image
          src={me}
          alt="My Photo"
          className="w-5/12 lg:w-8/12 rounded-full"
        />
      </div>
      <div className="w-full flex flex-col gap-6 lg:justify-center">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-5xl lg:text-8xl font-bold">
            Hi, It's <span className="text-red-400">Ognjen</span>
          </h1>
          <h1 className="text-3xl lg:text-6xl font-bold">
            I'm a <span className="text-red-400">Web Developer</span>
          </h1>
          <h1 className="text-md lg:text-lg text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, unde
            commodi. Autem repellat
          </h1>
        </div>
        <div className="w-full flex gap-4">
          <div className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200">
            <Image src={instagram} alt="" />
          </div>
          <div className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200">
            <Image src={phone} alt="" />
          </div>
          <div className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200">
            <Image src={linkedin} alt="" />
          </div>
          <div className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200">
            <Image src={github} alt="" />
          </div>
        </div>
        <div>
          <button className="border-2 border-red-400 text-red-400 p-2 rounded-full px-8 hover:bg-red-400 hover:text-black transition-colors duration-500 lg:text-xl">
            Hire me
          </button>
        </div>
      </div>
    </main>
  );
}
