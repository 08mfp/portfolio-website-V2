import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <section id="about" className="relative z-0">
          <About />
          <StarsCanvas />
        </section>
        <section id="experience" className="relative z-0">
          <Experience />
          <StarsCanvas />
        </section>
        <section id="skills">
          <Tech />
        </section>
        <section id="projects">
          <Works />
        </section>
        <section id="certifications">
          <Feedbacks />
        </section>
        <section id="contact" className="relative z-0">
          <Contact />
          <StarsCanvas />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
