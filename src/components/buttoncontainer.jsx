import styles from "./buttoncontainer.module.css";
const Button = ({ onButtonClick }) =>{
    const buttonnames=["C","1","2","*","3","4","-","5","6","*","7","8","/","=","9","0",".","+"];
 return(   
<div className={styles.buttonContainer}>
{buttonnames.map((buttonnames) =>(  <button className={styles.button} onClick={()=>onButtonClick(buttonnames)}>{buttonnames}</button>
 ) )}
</div>
 );
}
export default Button;