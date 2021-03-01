import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faWindowClose, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { CountdownContext } from '../contexts/CountdownContext';




export function Countdown() {
  
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown
  } = useContext(CountdownContext);

  /* padStart = se a string não tiver dois caracteres, ele preenche com zero */
  const [minutesLeft, mintutesRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{mintutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button disabled className={ styles.countdownButton }>Ciclo encerrado <FontAwesomeIcon className={styles.chcekCircle} icon={faCheckCircle} /></button>
      ) : (
        <> 
        {isActive ? (
          <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
            Abandonar ciclo 
            <FontAwesomeIcon className={styles.faWindowClose}  icon={faWindowClose} />
          </button>
        ) : (
          <button type="button" className={ styles.countdownButton } onClick={startCountdown}>
            Iniciar um ciclo
            <FontAwesomeIcon className={styles.faPlay}  icon={faPlay} />
          </button>
        )}
        </>
      )}

    </div>
  )
}