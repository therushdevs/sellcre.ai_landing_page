import HeroSection from "@/components/molecules/HeroSection";
import NavBar from "@/components/molecules/NavBar";
import Image from "next/image";
import { Feature01 } from "../../public/assets";
import Features from "@/components/molecules/Features";
import Samples from "@/components/molecules/Samples";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Features />
      <Samples />
    </div>
  );
}
