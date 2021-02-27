import { FC, useContext } from 'react';
import { CountdownContext, CountdownProvider } from '../Contexts/CountdownsContext';
import Styles from '../Styles/Components/Countdown.module.css';



export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
    } = useContext(CountdownContext)


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')




    return (
        <div>
            <div className={Styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={Styles.countdownButton}
                >
                    Ciclo Encerrado
                </button>

            ) : (
                    <>
                        { isActive ? (
                            <button type="button"
                                className={`${Styles.countdownButton} ${Styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar Ciclo
                            </button>
                        ) : (
                                <button type="button"
                                    className={Styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar Um Ciclo

                                </button>
                            )}
                    </>
                )}
        </div>
    );
}