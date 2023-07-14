import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import CountriesInfo from './CountryInfo';
import { getCountryByName } from '../../Store/Action/countriesActions';
import Loading from '../../Loading.js/Loading';

function CountriesDetail(props) {
    const themeContext = useContext(ThemeContext);
    const slug = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const country = useSelector(state => state.Countries.country);
    const loading = useSelector(state => state.Countries.loading);

    useEffect(() => {
        dispatch(getCountryByName(slug.countryName))
    }, [slug.countryName, dispatch])

    return (
        <>
            {
                loading ? (<Loading />) :
                    (
                        <Wrapper>
                            <button className={`goback-btn ${themeContext.theme}`} onClick={() => navigate(-1)}>Go back</button>
                            <CountriesContainer>
                                <div className='flagCountry'>
                                    <img src={country ? country.flag : 'https://via.placeholder.com/300x200?text=Image+Error'} alt='' />
                                </div>
                                <CountriesInfo />
                            </CountriesContainer>
                        </Wrapper>
                    )
            }
        </>
    );
}

export default CountriesDetail;

const Wrapper = styled.div`
    padding-top: 20px;
    .goback-btn {
        display: block;
        width: 80px;
        height; 28px;
        line-height: 28px;
        padding: 2px 4px;
        border-radius: 4px;
        border: none;
        text-align: center;
        font-weight: 500;
        filter: brightness(0.9);
        transition: all 0.2s linear;
        &:hover {
            filter: brightness(1);
            font-weight: bold;
            cursor: pointer;
            user-select: none;
        }
    }    
`

const CountriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px; 
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-item: center;
    }   
    .flagCountry {
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-bottom: 12px;
        box-shadow: var(--boxShadow);
        img {
            width: 100%;
            height: 100%;
        }
    }
`