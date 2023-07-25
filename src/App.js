import logo from './logo.svg';
import './App.css';
import './assets/root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Hero from './components/Hero';
import InvestCoin from './components/InvestCoin';
import Laptop from './components/Laptop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DotSlider from './components/DotSlider';
import TransformSlick from './components/TransformSlick';
import Bussiness from './components/Bussiness';
import Foot from './components/Foot';
import LinearSlider from './components/LinearSlider';
import TwoGirl from './components/TwoGirl';
import InputSection from './components/InputSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollButton from './components/ScrollButton';
import { Fragment } from "react";

function App() {
  useEffect(() => {
    AOS.init({ once: false });
  }, [])
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Hero />
        <InvestCoin />
        <TransformSlick />
        <Laptop />
        <TwoGirl />
        <LinearSlider />
        <DotSlider />
        <Bussiness />
        <InputSection />
        <Foot />
      </div>
      <ScrollButton />
    </Fragment>
  );
}

export default App;
