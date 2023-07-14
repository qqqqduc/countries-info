import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Option(props) {
    const { region } = props;
    const navigate = useNavigate();

    const handleValueOption = () => {
        if(region.value !== 'ALL') {
            navigate(`/region/${region.value}`)
        }else {
            navigate(`/`)
        }
    }

    return (
        <OptionItem onClick={handleValueOption}>
            <region.icon />
            <span>{region.value}</span>
        </OptionItem>
    )
}

export default Option;

const OptionItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    padding; 4px 8px;

    &:hover {
        font-weight: bold;
        background: var(--selectOptionBackground);
    }

    span {
        margin-left: 4px;
    }  
`