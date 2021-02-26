import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';

import styles from '../styles/Components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/wilian-tavares.png" alt="Wilian-Tavares" />
            <div>
                <strong>Wilian Tavares</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}