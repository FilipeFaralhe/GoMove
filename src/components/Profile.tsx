import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(challengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/FilipeFaralhe.png" alt="Filipe Faralhe" />
      <div>
        <strong>Filipe Faralhe</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
            Level { level }
        </p>
      </div>
    </div>
  )
}