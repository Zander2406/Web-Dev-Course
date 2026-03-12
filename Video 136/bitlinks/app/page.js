import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "900",

});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortner in the Market
          </p>
          <p className="px-56 text-center">
            We are the most straightforward URL shortner in the world. Most of the URL shortners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortner.
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white'>Github</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} fill={true} alt="An image of a vector" />
        </div>
      </section>
    </main>
  );
}
