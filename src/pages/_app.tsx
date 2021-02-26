import { useState } from 'react';

import '../styles/global.css';

import { ChallengesContext, ChallengesProvider } from '../Contexts/ChallengesContext'



function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
