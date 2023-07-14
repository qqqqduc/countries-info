import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

function Country(props) {
    const themeContext = useContext(ThemeContext);

    return (
        <Link to={`/country/${props.name}`}>
            <CountriesCard className={themeContext.theme}>
                <div className='flag'>
                    <img alt='' src={props.flag} />
                </div>
                <CountryInfo>
                    <h3>{props.name}</h3>
                    <div>Population:
                        <span>{props.population}</span>
                    </div>
                    <div>Region:
                        <span>{props.region}</span>
                    </div>
                    <div>Capital:
                        <span>{props.capital}</span>
                    </div>
                </CountryInfo>
            </CountriesCard>
        </Link>
    );
}

export default Country;

const CountriesCard = styled.div`
    max-width: 240px;
    width: 100%;
    filter: brightness(1);
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 12px;
    user-select: none;

    &:hover {
        filter: brightness(0.9);
    }

    &:hover img {
        transform: scale(1.1);
    }

    .flag {
        width: 100%;
        height: 160px;
        display: block;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.2s linear;
        }
    }
`

const CountryInfo = styled.div`
    padding: 10px 16px;
    h3 {
        margin: 16px 0;
        font-size: 20px;
        font-weight: bold;
        height: 50px;
    }    
    div {
        display: block;
        font-size: 16px;
        font-weight: 700;
        margin: 4px 0px;
        span {
            font-weight: 400;
            margin-left: 4px;
        }
    }
`