import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';

import Styles from '../Styles/Components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel)

    return (
        <header className={Styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={Styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience}xp
                </span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header >
    );
}