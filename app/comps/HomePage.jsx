import Image from "next/image";
import Link from "next/link";
import me from "../assets/me.jpg";
import github from "../assets/github-brands-solid.svg";
import instagram from "../assets/instagram-brands-solid.svg";
import phone from "../assets/phone-solid.svg";

export default function HomePage() {
  return (
    <main
      id="HomePage"
      className="w-full h-full rounded-md flex flex-col lg:flex-row p-6 mt-12 bg-neutral-950"
    >
      <div
        data-aos="fade-right"
        className="w-full flex flex-col items-center lg:justify-center py-3"
      >
        <Image
          src={me}
          alt="My Photo"
          className="w-5/12 lg:w-8/12 rounded-full"
        />
      </div>
      <div
        data-aos="fade-left"
        className="w-full flex flex-col gap-6 lg:justify-center"
      >
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-5xl lg:text-8xl font-bold">
            Hi, It's <span className="text-red-400">Ognjen</span>
          </h1>
          <h1 className="text-3xl lg:text-6xl font-bold">
            I'm a <span className="text-red-400">Web Developer</span>
          </h1>
          <h1 className="text-md lg:text-xl text-justify">
            Hello, I am Ognjen Rajkovic freelance web developer with almost 1.5
            year of experience in building entertaining websites!
          </h1>
        </div>
        <div className="w-full flex gap-4">
          <Link
            href={"https://www.instagram.com/lunarweb.css/"}
            className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200"
          >
            <Image src={instagram} alt="" />
          </Link>
          <div className="relative group inline-block">
            <div className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200">
              <Image src={phone} alt="" />
            </div>
            <div class="absolute left-1/2 top-15 -translate-x-1/2 w-max px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              +381 61 192 6474
            </div>
          </div>
          <Link
            href={"https://github.com/sparkycake0"}
            className="border-2 p-2 border-red-400 rounded-full cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform duration-200"
          >
            <Image src={github} alt="" />
          </Link>
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
