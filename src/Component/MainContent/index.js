import React from 'react';
import SearchAndFilter from '../MainContent/SearchAndFilter';
import Countries from '../MainContent/Countries';

function MainContent(props) {
    return (
        <div>
            <SearchAndFilter />
            <Countries />
        </div>
    );
}

export default MainContent;