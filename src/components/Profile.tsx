import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/6455114?v=4" alt="Greici Assis"/> 
            <div>

                
                <strong>Greiciane Assis</strong>
                <p>
                 <img src="icons/level.svg" alt="Level" /> 
                 Level {level}
                </p>
            </div>
        </div>
    )

}