import './App.css';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import ScrollDownArrow from './Components/ScrollDownArrow/ScrollDownArrow';
import NavBar from './Components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <ScrollDownArrow />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
