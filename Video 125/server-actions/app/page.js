"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()

  // const submitAction = async (e) => {
  //   "use server"
  //   console.log(e.get("name"), e.get("add"))
  //   let a = await fs.writeFile("harry.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`)
  //   console.log(a)
  // }

  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black bg-white mx-4" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black bg-white mx-4" type="text" />
        </div>
        <div>
        <button className="border border-white px-3">Submit</button>
        </div>
      </form>
    </div>
  );
}
