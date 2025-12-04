"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Shubham",
      role: "Coder"
    }
    let a = await fetch("/api/add", {method: "POST", 
      headers: {"Content-Type": "application/json",}, 
      body: JSON.stringify(data),
    })
    let response = await a.json()
    console.log(response)
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Next.js API Routes Demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
