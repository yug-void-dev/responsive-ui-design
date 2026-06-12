<<<<<<< HEAD
import Navbar from "./components/layout/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
=======
import HeroSection from "./components/sections/HeroSection";
import WhyCompliance from "./components/sections/WhyCompliance";
>>>>>>> 1a6a23c1dec81dc38518bcab3cd787aa16f8ae7c

function App() {
  return (
    <>
      <HeroSection />
      <WhyCompliance />
    </>
  );
}

export default App;