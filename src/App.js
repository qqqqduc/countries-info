import styled from 'styled-components';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/index.js'
import MainContent from './Component/MainContent';
import { ThemeContext } from './Component/ThemeContext/ThemeContext';
import CountryDetail from './Component/MainContent/CountryDetail';
import Footer from './Component/Footer.js';

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <AppContainer className={themeContext.theme}>
      <BrowserRouter>
        <Header />
        <ContentContainer>
          <Routes>
            <Route exact path='/' element={<MainContent />} />
            <Route path='/region/:regionName' element={<MainContent />} />
            <Route path='/country/:countryName' element={<CountryDetail />} />
            <Route path='/search/:name' element={<MainContent />} />
          </Routes>
        </ContentContainer>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

const ContentContainer = styled.div`
    max-width: 1200px;
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 0 12px;
`