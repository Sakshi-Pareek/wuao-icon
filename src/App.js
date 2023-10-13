import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import LayersSection from './components/LayersSection';
import OurProject from './components/OurProject';
import Benefit from './components/Benefit';
import Whitepapper from './components/Whitepapper';
import RoadMap from './components/RoadMap';
import TimerClock from './components/TimerClock';
import Tokenomics from './components/Tokenomics';
import Platforms from './components/Platforms';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='overflow-hidden'>
        <HeroSection />
        <LayersSection />
        <OurProject />
        <Benefit />
        <Whitepapper />
        <RoadMap />
        <TimerClock />
        <Tokenomics />
        <Platforms />
        <Footer />
      </div>
    </>
  );
}

export default App;
