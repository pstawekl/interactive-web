import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/MenuNavbar';
import Footer from './Components/Footer';
import ScrollButton from './Components/ScrollButton';
import './Styles/style.scss';
import { Grid } from '@chakra-ui/react';
import { Router } from './Utils/RouteUtils';

export const TAGNAME = "ie";

function App() {
  return (
    <Grid className={TAGNAME}>
      <Sidebar />
      <Router />
      <Footer />
      <ScrollButton />
    </Grid>
  );
}

export default App;
