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
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
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
        <section id="contact">
          <Contact />
          <StarsCanvas />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
