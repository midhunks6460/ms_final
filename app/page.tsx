import Image from "next/image";
import Navbar from "./components/Navbar";
import Index from "./components/Index";

export default function Home() {
  return (
    <div className=" bg-white">
      <Navbar />
      <Index />
    </div>
  );
}
