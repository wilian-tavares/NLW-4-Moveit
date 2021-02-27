import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';
import Styles from '../Styles/Components/CompletedChallenges.module.css';


export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={Styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}