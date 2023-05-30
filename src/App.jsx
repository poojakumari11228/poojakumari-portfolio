import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Education,
  Footer,
  Blogs
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>

        {/*<div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">*/}
          <Education />
        {/*</div>*/}
        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <Blogs />
        </div>

        <div className="relative z-0 bg-center bg-no-repeat">
          <Contact />
        </div>

        <div className='bg-footer'>
          <Footer />
        </div>

      </div>

    </BrowserRouter>
  );
};

export default App;
