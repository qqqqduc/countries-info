import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useRef, useState, useEffect, useContext} from 'react';
import styles from './SwitchMode.module.scss';
import { ThemeContext } from '../ThemeContext/ThemeContext';

function SwitchMode() {
    const themeContext = useContext(ThemeContext);
    const refInput = useRef();
    const refToggle = useRef();
    const refCircle = useRef();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        refInput.current.checked = isDark;
    }, [isDark])

    const handleToggle = () => {
        refInput.current.checked = !refInput.current.checked;
        setIsDark(refInput.current.checked);
        themeContext.toggleTheme();
    }

    useEffect(() => {
        const changeBackgroundButton = () => {
            if(isDark) {
                refCircle.current.style.backgroundColor = "#222";
                refToggle.current.style.backgroundColor = "#fff";
            }else {
                refCircle.current.style.backgroundColor = "#fff";
                refToggle.current.style.backgroundColor = "var(--toggleButtonBackground)";
            }
        }
        changeBackgroundButton();
        document.addEventListener("resize", changeBackgroundButton);
        
        return () => {
            document.removeEventListener("resize", changeBackgroundButton);
        }
    }, [isDark])

    return (
        <div className={styles.toggleButton} ref={refToggle} onClick={handleToggle}>
            <input type="checkbox" className={styles.input} ref={refInput} />
            <div className={styles.moonIcon}>
                {isDark ? <BsMoonFill /> : <BsFillSunFill />}
            </div>
            <div className={styles.circle} ref={refCircle}></div>
        </div>
    )
}

export default SwitchMode;