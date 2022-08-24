import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();
  const [timerState, setTimerState] = useState();
  const [horaState, setHoraState] = useState(0);

  let num = 0;
  function cambiarTiempo(tiempo){
    return tiempo
  }
  useEffect(() => {
  console.log("aca")
  setTimerState(setInterval(() => {
      const date = new Date();
      
       
      
      num = num + 1
      setClockState(num);
    }, cambiarTiempo(1000)));

    
  }, []);
  function adelantarTiempo(){
    console.log(timerState)
    clearInterval(timerState)
    setInterval(() => {
      num = num + 1
      setClockState(num);
    }, 100);

  }

  return <div style={{ fontSize: "25px", margin: "30px" }}>{clockState}<span><b>  <button className='btn btn-success' onClick={() => adelantarTiempo()}>
  Adelantar Tiempo 
</button></b></span></div> ;
}

export default Clock;