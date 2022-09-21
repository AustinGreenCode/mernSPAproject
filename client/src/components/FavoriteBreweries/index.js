import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteBreweries = () => {
  return (
    <section id="favorite-breweries" className="container intro">
        <div className="row">
            <h2 className="section-title primary-border">Some our our favorite breweries!</h2>
        </div>

        <div className="row breweries col-12">

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://www.craftybastardbrewery.com/" target="_blank">
                <img src="./assets/images/breweries/CraftyBastardHeadstockLogo-black.png" alt="Crafty Bastard Brewery" /></a>
        </div>

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://eastnashbeerworks.com/" target="_blank">
                <img src="./assets/images/breweries/ENBW_Stacked_Alt_Logo.svg" alt="East Nashville Beer Works" /></a>
        </div>

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://www.newbelgium.com/" target="_blank">
                <img src="./assets/images/breweries/new-belgium-brewing-logo.jpeg" alt="New Belgiun Brewing" /></a>
        </div>

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://www.nextlevelknox.com/" target="_blank">
                <img src="./assets/images/breweries/NextLevelBrewing_FullColor_Logo.png" alt="Next Level Brewing" /></a>
        </div>

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://www.tnbrew.com/" target="_blank">
                <img src="./assets/images/breweries/TNBW-logo.png" alt="Tennessee Brew Works" /></a>
        </div>

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://yeehawbrewing.com/" target="_blank">
                <img src="./assets/images/breweries/yeehaw-brewing-company.png" alt="Yee Haw Brewing" /></a>
        </div>

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://beardedirisbrewing.com/" target="_blank">
                <img src="./assets/images/breweries/Bearded-Iris-full-logo-black-web.png" alt="Bearded Iris Brewing" /></a>
        </div>

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://www.southerngristbrewing.com/" target="_blank">
                <img src="./assets/images/breweries/Southern-Grist_Logo_Primary.png" alt="Southern Grist Brewing" /></a>
        </div>

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://www.wickedweedbrewing.com/" target="_blank">
                <img src="./assets/images/breweries/wicked-weed-logo.avif" alt="Wicked Weed Brewing" /></a>
        </div>

        <div className="brewery col-sm-5 col-md-3 col-lg-2">
            <a href="https://www.booneshine.beer/" target="_blank">
                <img src="./assets/images/breweries/BooneshineHexAI.png" alt="Booneshine Brewing" /></a>
        </div>

        </div>

    </section>
  );
};

export default FavoriteBreweries;