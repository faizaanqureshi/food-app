import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      <Hero />
      <ProblemSolution />
    </div>
  );
}
