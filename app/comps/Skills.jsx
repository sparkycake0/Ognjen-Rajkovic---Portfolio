import Progress from "./elements/Progress";

export default function SkillPage() {
  return (
    <main
      id="SkillsPage"
      className="mt-20 bg-neutral-950 p-3 lg:p-6 rounded-md grid grid-cols-1 lg:grid-cols-2 text-xl lg:text-2xl gap-3 lg:gap-8 justify-between"
    >
      <div className="flex items-center justify-between w-full p-2">
        <label>HTML</label>
        <Progress value={100} />
      </div>
      <div className="flex items-center justify-between p-2">
        <label>CSS</label>
        <Progress value={90} />
      </div>
      <div className="flex items-center justify-between p-2">
        <label>JavaScript</label>
        <Progress value={100} />
      </div>
      <div className="flex items-center justify-between p-2">
        <label>NextJS</label>
        <Progress value={100} />
      </div>
      <div className="flex items-center justify-between p-2">
        <label>TailwindCSS</label>
        <Progress value={100} />
      </div>
      <div className="flex items-center justify-between p-2">
        <label>React</label>
        <Progress value={100} />
      </div>
      <div className="flex items-center justify-between p-2">
        <label>Firebase</label>
        <Progress value={90} />
      </div>
      <div className="flex items-center justify-between p-2">
        <label>Git</label>
        <Progress value={80} />
      </div>
      <div className="flex items-center justify-between p-2">
        <label>TypeScript</label>
        <Progress value={100} />
      </div>
      <div className="flex items-center justify-between p-2">
        <label>Framer Motion</label>
        <Progress value={80} />
      </div>
    </main>
  );
}
