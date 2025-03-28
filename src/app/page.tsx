
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { Statistics } from "./components/Statistics";

export default function Home() {
  return (
    <div className="  min-h-screen  w-full">
      <NavBar/>
      <HeroSection/>
      <Statistics/>
    </div>
  );
}
