import Image from "next/image";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";

export default function page() {
  return (
    <main className="scroll-smooth">
      <section id="home">
        <Home/>
      </section>
      <section id="how-it-works">
        <HowItWorks/>
      </section>
      <section id="features">
        <Features/>
      </section>
    </main>
  );
}
