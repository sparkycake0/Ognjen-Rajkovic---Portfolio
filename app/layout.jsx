import { Afacad } from "next/font/google";
import Navbar from "./comps/Navbar";
import "./globals.css";

const font = Afacad({ subsets: ["latin"] });

export const metadata = {
  title: "Ognjen Rajkovic - Portfolio",
  description: "Check it out!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} w-screen h-screen p-12 bg-black text-white flex select-none flex-col `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
