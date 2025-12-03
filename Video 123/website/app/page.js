import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
      {/* <Image className="mx-auto" width={700} height={700} src="https://www.menucool.com/src/ninja-slider/img/a.jpg" alt="" srcset="" /> */}
      <Image className="mx-auto object-cover" fill={true} src="https://www.menucool.com/src/ninja-slider/img/a.jpg" alt="" srcset="" />
    </div>
  );
}
