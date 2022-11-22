import { Header } from './components/Header';
import { Switchers } from './components/Switchers';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { GreySection } from './components/GreySection';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Statistics } from './components/Statistics';
import { Contact } from './components/Contact';
import './App.scss';

export const App: React.FC = () => {
  return (
    <>
      <Switchers />
      <Header />
      <main>
        <About />
        <Experience />
        <Portfolio />
        <GreySection />
        <Services />
        <Statistics />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
