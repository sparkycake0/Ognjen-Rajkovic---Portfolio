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
          width={50}
          className="flex self-center w-1/8 lg:w-1/6"
        />
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          eligendi eius officia quidem. Amet assumenda doloribus deleniti
          pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          aspernatur quod consectetur, beatae veniam eum dolores vitae saepe
          tempore consequatur a quas et quo, voluptas sunt
        </h1>
      </div>
      <div className="p-4 flex flex-col bg-neutral-950 rounded-md gap-6">
        <Image
          src={backend}
          alt=""
          width={50}
          className="flex self-center w-1/8 lg:w-1/6"
        />
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          eligendi eius officia quidem. Amet assumenda doloribus deleniti
          pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          aspernatur quod consectetur, beatae veniam eum dolores vitae saepe
          tempore consequatur a quas et quo, voluptas sunt
        </h1>
      </div>
      <div className="p-4 flex flex-col bg-neutral-950 rounded-md gap-6">
        <div className="flex justify-center gap-6">
          <Image
            src={frontend}
            alt=""
            width={50}
            className="flex self-center w-1/8 lg:w-1/6"
          />
          <Image
            src={backend}
            alt=""
            width={50}
            className="flex self-center w-1/8"
          />
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          eligendi eius officia quidem. Amet assumenda doloribus deleniti
          pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          aspernatur quod consectetur, beatae veniam eum dolores vitae saepe
          tempore consequatur a quas et quo, voluptas sunt
        </h1>
      </div>
    </main>
  );
}
