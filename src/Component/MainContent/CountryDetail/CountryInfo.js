import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ScrollBar from 'react-perfect-scrollbar';
import styles from './CountryInfo.module.scss';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

const getLanguages = (country) => {
    let result = '';
    country.languages.forEach(languages => {
        if (result !== '') {
            result = result + '-' + languages.name;
        } else {
            result += languages.name;
        }
    })
    return result;
}

const getCountryNameByCode = async (code) => {
    const result = await axios.get(`https://restcountries.com/v2/alpha?codes=${code}`)
    return result.data;
}

function CountryInfo(props) {
    const themeContext = useContext(ThemeContext);
    const [countriesBorder, setCountriesBorder] = useState([]);
    const country = useSelector(state => state.Countries.country);

    useEffect(() => {
        if (country && country.borders) {
            getCountryNameByCode(country.borders)
                .then(res => {
                    const countryName = res.map(country => country.name)
                    setCountriesBorder(countryName)
                })
                .catch(err => console.log(err))
        }
    }, [country])

    return (
        <ScrollBar style={{maxHeight: '70vh', overflow: 'hidden'}}>
            <div className={styles.countryInfo}>
                {
                    country && (
                        <>
                            <h3 className={styles.countryName}>{country.name}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Native Name</td>
                                        <td>:</td>
                                        <td className={styles.countryInfoValue}>{country.nativeName}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Official</td>
                                        <td>:</td>
                                        <td className={styles.countryInfoValue}>{country.altSpellings}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Population</td>
                                        <td>:</td>
                                        <td className={styles.countryInfoValue}>{new Intl.NumberFormat().format(country.population)}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Region</td>
                                        <td>:</td>
                                        <td className={styles.countryInfoValue}>{country.region}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Sub Region</td>
                                        <td>:</td>
                                        <td className={styles.countryInfoValue}>{country.subregion}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Capital</td>
                                        <td>:</td>
                                        <td className={styles.countryInfoValue}>{country.capital}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Top Level Domain</td>
                                        <td>:</td>
                                        <td className={styles.countryInfoValue}>{country.topLevelDomain}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Currencies</td>
                                        <td>:</td>
                                        <td className={styles.countryInfoValue}>{`${country.currencies[0].code} - ${country.currencies[0].name}`}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Languages</td>
                                        <td>:</td>
                                        <td className={styles.countryInfoValue}>{getLanguages(country)}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryInfoTitle}>Border Countries</td>
                                        <td>:</td>
                                        <td className={styles.borderList}>
                                            {
                                                countriesBorder.length > 0 && countriesBorder.map(country => (
                                                    <Link to={`/country/${country}`} key={country}>
                                                        <div className={clsx(styles.borderItem, themeContext.theme)}>{country}</div>
                                                    </Link>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )
                }
            </div>
        </ScrollBar>
    );
}

export default CountryInfo;