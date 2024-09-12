import Image from "next/image";
import { Inter } from "next/font/google";
import Content from "./message.mdx";
import Header from "./(components)/header";
import Sections from "./(components)/sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen">
      <Header/>
      <Sections/>
    </main>
  );
}
