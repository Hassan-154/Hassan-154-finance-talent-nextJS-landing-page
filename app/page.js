import Image from "next/image";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";

export default function page() {
  return (
    <div className="">
      <Home/>
      <HowItWorks/>
      <Features/>
    </div>
  );
}
