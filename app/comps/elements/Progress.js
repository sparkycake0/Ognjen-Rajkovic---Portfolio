export default function Progress({ value }) {
  return (
    <main className="h-3/5 w-1/2 bg-neutral-800 rounded-full flex">
      <div
        className="h-full bg-red-400 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </main>
  );
}
