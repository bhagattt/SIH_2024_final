import "./App.css";
import Navbar from "./components/Navbar";
import ImgOD from "./components/ImgOD";
import ImageSlider from "./components/ImageSlider";
import Services from "./components/Services";
import BlogSection from "./components/BlogSection";
import WannaHelp from "./components/WannaHelp";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImgOD />
      <ImageSlider />
      <Services />
      <BlogSection />
      <WannaHelp />
      <AboutUs />
    </div>
  );
}

export default App;
