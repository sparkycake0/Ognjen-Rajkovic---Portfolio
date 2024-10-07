import Image from "next/image";
import plus from "../assets/plus-solid.svg";
import backend from "../assets/code-solid.svg";
import frontend from "../assets/computer-solid.svg";

export default function ServicesPage() {
  return (
    <main
      id="ServicesPage"
      className="w-full h-full mt-20 flex flex-col lg:flex-row gap-10 lg:text-2xl"
    >
      <div className="p-4 flex flex-col bg-neutral-950 rounded-md gap-6">
        <Image
          src={frontend}
          alt=""
          className="flex self-center w-2/12 lg:w-2/12"
        />
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          eligendi eius officia quidem.
        </h1>
      </div>
      <div className="p-4 flex flex-col bg-neutral-950 rounded-md gap-6">
        <Image
          src={backend}
          alt=""
          className="flex self-center w-2/12 lg:w-2/12"
        />
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          eligendi eius officia quidem.
        </h1>
      </div>
      <div className="p-4 flex flex-col bg-neutral-950 rounded-md gap-6">
        <div className="flex justify-center gap-6">
          <Image
            src={frontend}
            alt=""
            className="flex self-center w-2/12 lg:w-2/12"
          />
          <Image
            src={backend}
            alt=""
            className="flex self-center w-2/12 lg:w-2/12"
          />
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          eligendi eius officia quidem.
        </h1>
      </div>
    </main>
  );
}
