import React, {useState} from "react";

function Toggle() {
  const[isOff, setIsOff] = useState('OFF')

  function handleOnOff() {
    setIsOff(isOff === "OFF" ? "ON" : "OFF")
  }

  const color = isOff === "OFF" ? "white" : "red"
  
  return <button style={{background: color}} onClick={handleOnOff}> {isOff === "OFF" ? "OFF" : "ON"}</button>;
}

export default Toggle;
