import { useEffect, useState } from "react";

export default function useTime(){
  
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeToDisplay = time.toLocaleTimeString('en-NL', { timeZone: 'Europe/Amsterdam' })

  return {
    timeToDisplay
  }
}