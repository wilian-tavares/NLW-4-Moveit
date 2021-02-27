import { useContext } from 'react';

import styles from '../styles/Components/ChallengeBox.module.css';

import { CountdownContext } from '../Contexts/CountdownsContext';
import { ChallengesContext } from '../Contexts/ChallengesContext';


export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.ChallengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}.</p>
                    </main>

                    <footer>
                        <button type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button type="button"
                            className={styles.challengeSucceedeButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                            </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                            Avance de Level completando desafios
                        </p>
                    </div>
                )}
        </div>
    )
}