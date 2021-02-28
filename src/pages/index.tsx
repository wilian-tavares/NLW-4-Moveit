import Head from 'next/head';
import { GetServerSideProps } from 'next';
/*
  QUANDO FOR FAZER O DEPLOY PELO vercel:
  vercel --prod
  desta forma o deploy vai direto para produção
*/

import { CompletedChallenges } from "../Components/CompletedChallenges";
import { Countdown } from "../Components/Countdown";



import styles from '../Styles/pages/Home.module.css';
import { ChallengeBox } from "../Components/ChallengeBox";
import { CountdownProvider } from '../Contexts/CountdownsContext';
import { ChallengesProvider } from '../Contexts/ChallengesContext';
import { Profile } from '../Components/Profile';
import { ExperienceBar } from '../Components/ExperienceBar';




interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props)

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;


  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}


