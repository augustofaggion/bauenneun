import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <HowItWorks />
      <About />
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
