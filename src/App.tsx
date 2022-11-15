import { Header } from './blocks/Header';
import { Switcher } from './blocks/Switcher';
import { About } from './blocks/About';
import { Experience } from './blocks/Experience';
import { Portfolio } from './blocks/Portfolio';
import { Grey } from './blocks/Grey';
import { Services } from './blocks/Services';
import { Footer } from './blocks/Footer';
import { Statistics } from './blocks/Statistics';
import { Contact } from './blocks/Contact';
import './App.scss';

export const App: React.FC = () => {
  return (
    <>
      <Switcher />
      <Header />
      <main>
        <About />
        <Experience />
        <Portfolio />
        <Grey />
        <Services />
        <Statistics />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
