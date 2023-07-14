import React from 'react';
import styled from 'styled-components';
import { useContext, useEffect, useRef} from 'react';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import Option from './Option';
import { GiEarthAsiaOceania, GiWorld } from 'react-icons/gi';
import { FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa';

const RegionList = [
    { icon: GiWorld, value: 'ALL'},
    { icon: FaGlobeAfrica, value: 'Africa'},
    { icon: FaGlobeAmericas, value: 'Americas'},
    { icon: FaGlobeAsia, value: 'Asia'},
    { icon: FaGlobeEurope, value: 'Europe'},
    { icon: GiEarthAsiaOceania, value: 'Oceania'}
]

function Options({isShowOptions}) {
    const themeContext = useContext(ThemeContext);
    const refOptions = useRef(null);

    useEffect(() => {
        const showOptions = () => {
            if(isShowOptions) {
                refOptions.current.maxHeight = `${refOptions.current.scrollHeight}px`;
                refOptions.current.style.transform = `scaleY(1)`;
            }else {
                refOptions.current.maxHeight = `0`;
                refOptions.current.style.transform = `scaleY(0)`;
            }
        }
        showOptions();
        document.addEventListener('resize', showOptions);
        return () => {
            document.removeEventListener('resize', showOptions);
        }
    }, [isShowOptions])
    return (
        <OptionsPane className={themeContext.theme} ref={refOptions}>
            {RegionList.map((region, index) => (
                <Option region={region} key={index}/>
            ))}
        </OptionsPane>
    );
}

export default Options;

const OptionsPane = styled.div`
    width: 100%;
    margin-top: 2px;
    border-radius: 4px;
    position: absolute;
    overflow: hidden;
    z-index: 10;
`