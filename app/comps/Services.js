import Image from "next/image";
import plus from "../assets/plus-solid.svg";
import backend from "../assets/code-solid.svg";
import frontend from "../assets/computer-solid.svg";

export default function ServicesPage() {
  return (
    <main
      id="ServicesPage"
      className="w-full h-max mt-20 flex flex-col lg:flex-row gap-10 lg:text-2xl text-justify bg-neutral-950 p-6 rounded-md"
    >
      <div className="p-4 flex flex-col bg-neutral-900 rounded-md gap-6">
        <Image
          src={frontend}
          alt=""
          className="flex self-center w-2/12 lg:w-2/12"
        />
        <h1 className="text-red-400 text-3xl text-center font-bold">
          Showcase websites
        </h1>
        <h1>
          These are just websites which are good looking and don't have some
          complicated functions behind the scene. They are used for showcase
          like portfolio websites.
        </h1>
      </div>
      <div className="p-4 flex flex-col bg-neutral-900 rounded-md gap-6">
        <Image
          src={backend}
          alt=""
          className="flex self-center w-2/12 lg:w-2/12"
        />
        <h1 className="text-red-400 text-3xl text-center font-bold">
          High backend websites
        </h1>
        <h1>
          They are called high backend because they are not focused on design
          and entertaining design, they are rather focused on strong function
          behind the scene. These are websites like shopping websites and some
          calculators and that stuff.
        </h1>
      </div>
      <div className="p-4 flex flex-col bg-neutral-900 rounded-md gap-6">
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
        <h1 className="text-red-400 text-3xl text-center font-bold">
          Fully developed websites
        </h1>
        <h1>
          All, entertaining design which leads people to visit it and interact
          with it and good and strong function which does it's job. These are
          professional and are mostly payed more than other two but I can
          promise you it's worth it!
        </h1>
      </div>
    </main>
  );
}
