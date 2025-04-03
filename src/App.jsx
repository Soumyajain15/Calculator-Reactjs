import Display from "./components/display";
import styles from  "./App.module.css";
import Button from "./components/buttoncontainer";
import { useState } from "react";
function App(){
   const [calVal,setCalVal]=useState("");
   const onButtonClick =(buttonText) => {
    if(buttonText==="C"){
        setCalVal("");

    }
    else if(buttonText === "="){
    const total = eval(calVal);
    setCalVal(total);
    }
        else {
        const newDisplay=calVal + buttonText;
        setCalVal(newDisplay);
    }

   }
   
 return (
 <div className={styles.calculator}>
<Display Displayvalue={calVal}></Display>
<Button onButtonClick={onButtonClick}></Button>
    </div>
 );
}
export default App;
