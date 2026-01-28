import { Header, Footer, BackToTop } from './components/layout';
import {
  Hero,
  About,
  Programs,
  Admissions,
  Research,
  Campus,
  News,
  Testimonials,
  Faculty,
  FAQ,
  Contact,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Programs />
        <Admissions />
        <Research />
        <Campus />
        <News />
        <Testimonials />
        <Faculty />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
