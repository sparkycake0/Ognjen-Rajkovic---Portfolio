import graduationCap from "../assets/graduation-cap-solid.svg";

export default function EducationPage() {
  return (
    <main
      id="EducationPage"
      className="mt-20 bg-neutral-950 rounded-md p-6 flex flex-col lg:flex-row"
    >
      <div className="w-full flex flex-col p-4 gap-8">
        <h1 className="text-6xl text-center text-red-400 font-bold">
          Education
        </h1>
        <div className="flex flex-col p-4 bg-neutral-800 gap-5 rounded-md h-3/6">
          <h1 className="text-3xl text-center text-red-400 font-bold">
            Middle School
          </h1>
          <h1 className="text-2xl text-justify">
            Finished middle school ETS Mija Stanimirovic in Serbia, Nis. It was
            it sector where I started learning about programming and got into
            industry and the rest was finished using online courses and self
            learning and dedication.
          </h1>
        </div>
        <div className="flex flex-col p-4 bg-neutral-800 gap-5 rounded-md h-3/6">
          <h1 className="text-3xl text-center text-red-400 font-bold">
            Middle School
          </h1>
          <h1 className="text-2xl text-justify">
            Finished middle school ETS Mija Stanimirovic in Serbia, Nis. It was
            it sector where I started learning about programming and got into
            industry and the rest was finished using online courses and self
            learning and dedication.
          </h1>
        </div>
      </div>
      <div className="h-full bg-red-400 w-2 rounded-full hidden lg:flex"></div>
      <div className="w-full flex flex-col p-4 gap-8">
        <h1 className="text-6xl text-center text-red-400 font-bold">
          Experience
        </h1>
        <div className="flex flex-col p-4 bg-neutral-800 gap-5 rounded-md h-3/6">
          <h1 className="text-3xl text-center text-red-400 font-bold">
            Building websites for own purpose
          </h1>
          <h1 className="text-2xl text-justify">
            My first experience was building websites for my own purposes (like
            this portfolio) and for my friends and family.
          </h1>
        </div>
        <div className="flex flex-col p-4 bg-neutral-800 gap-5 rounded-md h-3/6">
          <h1 className="text-3xl text-center text-red-400 font-bold">
            No other
          </h1>
          <h1 className="text-2xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            asperiores eius inventore? Ratione fuga unde, quam ut, nostrum quod
            provident earum nam minima autem ad vel voluptatibus, libero quidem
            labore!
          </h1>
        </div>
      </div>
    </main>
  );
}
