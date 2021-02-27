import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';
import { CountdownContext } from '../Contexts/CountdownsContext';

import Styles from '../Styles/Components/ChallengeBox.module.css';


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
        <div className={Styles.ChallengeBoxContainer}>
            { activeChallenge ? (
                <div className={Styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}.</p>
                    </main>

                    <footer>
                        <button type="button"
                            className={Styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button type="button"
                            className={Styles.challengeSucceedeButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                            </button>
                    </footer>
                </div>
            ) : (
                    <div className={Styles.challengeNotActive}>
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
