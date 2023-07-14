import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ScrollBar from 'react-perfect-scrollbar';
import { useParams } from 'react-router-dom';
import Country from './Country';
import { getCountries, getCountriesByName, getCountriesByRegion } from '../../Store/Action/countriesActions';
import Loading from '../../Loading.js/Loading';

function Countries(props) {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.Countries.countries);
    const loading = useSelector(state => state.Countries.loading);
    const slug = useParams();

    useEffect(() => {
        if (slug.regionName) {
            dispatch(getCountriesByRegion(slug.regionName));
        } else if (slug.name) {
            dispatch(getCountriesByName(slug.name));
        } else {
            dispatch(getCountries());
        }
    }, [dispatch, slug.regionName, slug.name])

    return (
        <>
            {
                loading ? (<Loading />) :
                    (
                        <ScrollBar style={{ maxHeight: '68vh', overflow: 'hidden' }}>
                            <CountriesContainer >
                                {
                                    countries.map((country, index) => (
                                        <Country
                                            name={country.name}
                                            flag={country.flag}
                                            population={country.population}
                                            region={country.region}
                                            capital={country.capital}
                                            key={index}
                                        />
                                    ))
                                }
                            </CountriesContainer>
                        </ScrollBar>
                    )
            }
        </>
    );
}

export default Countries;

const CountriesContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 12px;
    padding: 4px 1px;
    
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3,1fr);
        gap: 10px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2,1fr);
        gap: 8px;
    }

    @media screen and (max-width: 680px) {
        grid-template-columns: repeat(1,auto);
    }
`