import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Filter from './Filter';

function SearchAndFilter(props) {
    return (
        <SearchAndFilterPane>
            <Search />

            <Filter />
        </SearchAndFilterPane>
    );
}

export default SearchAndFilter;

const SearchAndFilterPane = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`