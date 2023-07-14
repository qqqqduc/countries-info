import React, { useContext, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import Options from './Options'

function Filter(props) {
    const themeContext = useContext(ThemeContext);
    const refSelect = useRef(null);
    const [isShowOptions, setIsShowOptions] = useState(false);
    const {regionName} = useParams();
    const [valueOption, setValueOption] = useState('All')

    const handleOptions = (e) => {
        if(refSelect.current) {
            setIsShowOptions(refSelect.current.contains(e.target));
        }
    }

    useEffect(() => {
        if(regionName) {
            setValueOption(regionName)
        }else {
            setValueOption('All')
        }
    }, [regionName])

    useEffect(() => {
        if(isShowOptions) {
            document.addEventListener('click', handleOptions);
        }
        return () => {
            document.removeEventListener('click', handleOptions);
        }
    }, [isShowOptions])

    return (
        <FilterPane>
            <h3>Filter by regions:</h3>
            <SelectPane>
                <Select 
                    className={themeContext.theme}
                    ref={refSelect}
                    onClick={handleOptions}
                >
                    <span>{valueOption}</span>
                    <FaChevronDown />
                </Select>
                <Options isShowOptions={isShowOptions}/>
            </SelectPane>
        </FilterPane>
    );
}

export default Filter;

const FilterPane = styled.div`
    max-width: 180px;
    width: 100%;
    h3 {
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--textShadow);
    }
`

const SelectPane = styled.div`
    width: 100%;
    margin-top: 8px;
    position: relative;
`

const Select = styled.div`
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    height: 34px;
    user-select: none;

    span {
        font-size: 18px;
        font-weight: bold;
    }
`