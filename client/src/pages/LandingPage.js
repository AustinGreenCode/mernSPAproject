import React from 'react';
import { useQuery } from '@apollo/client';

import HeroJumbotron from '../components/HeroJumbotron';
import FavoriteBreweries from '../components/FavoriteBreweries';

const LandingPage = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (

          <HeroJumbotron />

          <FavoriteBreweries />

export default LandingPage;