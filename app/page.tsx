import Header from "./components/Header";
import Hero from "./components/Hero";
import ComprehensiveForDiners from "./components/ComprehensiveForDiners";
import ComprehensiveForRestaurants from "./components/ComprehensiveForRestaurants";
import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ComprehensiveForDiners />
      <ComprehensiveForRestaurants />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
