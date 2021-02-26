import Head from 'next/head'
import {GetServerSideProps} from 'next';

import {Profile} from "../components/Profile";

import {ExperienceBar} from "../components/ExperienceBar";

import styles from '../styles/components/Home.module.css';
import {CompletedChallenges} from '../components/CompletedChallenges'

import {Countdown} from '../components/Countdown'
import {ChallengeBox} from '../components/ChallengeBox';
import {CountdownProvider} from '../contexts/CountdownContext';
import {ChallengesProvider} from '../contexts/ChallengesContext';

interface HomeProps {
  level:number; 
  currentExperience:number;  
  challengesCompleted:number; 
}

export default function Home(props) {
    console.log(props)
    return (
        <ChallengesProvider 
        level={props.level}
        currentExperience={props.currentExperience}
        challengeCompleted={props.challengesCompleted}
        >
            <div className={
                styles.container
            }>

                <Head>
                    <title>Início | move.it</title>
                </Head>
                <ExperienceBar/>

                <CountdownProvider>
                    <section>
                        <div>
                            <Profile/>
                            <CompletedChallenges/>
                            <Countdown/>
                        </div>
                        <div>
                            <ChallengeBox/>

                        </div>
                    </section>
                </CountdownProvider>
            </div>
        </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

    const user = {
        level: Number(level), 
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted)
    }


    console.log(user)
    return {props: user}
}
