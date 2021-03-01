import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { challengeContext } from "./ChallengesContext";

interface CountdownContextData { 
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout; /* Timeout é uma tipagem global*/

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {

  const { startNewChallenge } = useContext(challengeContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60); /* arredonda o número para baixo*/
  const seconds = time % 60; /* retorna os segundos */

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout); /* cancela o Timeout*/
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }
  
  useEffect(() => {
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);


  return (
    <CountdownContext.Provider value= {{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}