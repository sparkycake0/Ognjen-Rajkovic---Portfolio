import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      className="mt-20 bg-neutral-950 rounded-md p-6 flex flex-col lg:px-48 mb-20"
      id="ContactPage"
    >
      <h1 className="text-red-400 text-6xl text-center font-bold">Contact</h1>
      <div className="text-red-400 font-semibold w-full flex justify-center">
        <Link
          href={"https://lunarweb.css@gmail.com"}
          className="text-center text-3xl hover:underline"
        >
          lunarweb.css@gmail.com
        </Link>
      </div>
      <h1 className="text-lg text-center mt-6">
        Feel free to ask for anything!
      </h1>
      <form
        data-aos="fade-up"
        action="https://formspree.io/f/xpwzlery"
        method="POST"
        className="mt-10 p-4 bg-neutral-800 rounded-md flex flex-col"
      >
        <div className="flex justify-between gap-4">
          <input
            type="text"
            name="name"
            className="lg:w-1/3 w-3/6 rounded-md bg-neutral-700 text-xl p-2 shadow-2xl outline-none"
            placeholder="Name..."
            required
          />
          <input
            type="text"
            name="email"
            className="lg:w-1/3 w-3/6 rounded-md bg-neutral-700 text-xl p-2 shadow-2xl outline-none"
            placeholder="Email..."
            required
          />
        </div>
        <textarea
          type="text"
          name="message"
          required
          className="mt-4 rounded-md bg-neutral-700 resize-none w-full h-48 text-xl p-2 shadow-2xl outline-none"
          placeholder="Message..."
        />
        <button
          type="submit"
          className="mt-8 text-xl p-2 bg-neutral-800 border-4 border-red-400 rounded-md text-center self-center hover:border-neutral-800 hover:bg-red-400 hover:text-black transition-color duration-200 shadow-2xl w-2/6"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
