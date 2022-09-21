import React from 'react';
import { Link } from 'react-router-dom';

import HeroForm from '../components/HeroForm';


const HeroJumbotron = () => {
  return (

    <section className="hero">
        <div className="hero-cta">
            <h2>Brewery adventure with friends</h2></br>
            <p>
                We all enjoy meeting up with friends, relaxing a bit after a busy day, and enjoying some well-deserved downtime over a beer together. So whether you're planning a meetup at a local brewery for happy-hour, a late-afternoon hike before heading to a new brewery, or perhaps a weekend adventure of brewery tours and tasting — we're here to help! Sign up, bring your friends and meet some new friends. 
            </p>
            </br>
            <p>
                Let's plan your next brewery adventure!
            </p>
        </div>

        <HeroForm />

    </section>
    
  );
};

export default HeroJumbotron;