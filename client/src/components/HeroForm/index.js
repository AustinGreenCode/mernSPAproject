import React from 'react';
import { Link } from 'react-router-dom';

const HeroForm = () => {
  return (

<div className="hero-form">
    <form>
        <input type="text" placeholder="First Name" name="firstname" id="firstname" className="form-input" />
        <input type="text" placeholder="Last name" name="lastname" id="lastname" className="form-input" />
        <input type="email" placeholder="Email" name="email" id="email" className="form-input" />
        <input type="tel" placeholder="Phone" name="phone" id="phone" className="form-input" />
            <span class="checkbox-wrapper">
                <input type="checkbox" name="age-confirm" id="checkbox" />
                <label for="checkbox">I acknowledge I am at least 18 years of age.</label>
            </span>
        </p>
        <button type="submit">Submit your information</button>
    </form>
</div>

  );
};

export default HeroForm;