import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themeInfos } from './styles/theme';
import './App.css';

import { PUBLIC_ROUTES } from './config/routes';
import Landing from './pages/Landing/Landing';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import Faqs from './pages/Faqs/Faqs';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <ThemeProvider theme={themeInfos}>
      <BrowserRouter>
        <Routes>
          <Route path={PUBLIC_ROUTES.default} element={<Landing />} />
          <Route path={PUBLIC_ROUTES.features} element={<Features />}></Route>
          <Route path={PUBLIC_ROUTES.pricing} element={<Pricing></Pricing>}></Route>
          <Route path={PUBLIC_ROUTES.faqs} element={<Faqs></Faqs>}></Route>
          <Route path={PUBLIC_ROUTES.contactus} element={<ContactUs></ContactUs>}></Route>
          <Route path={PUBLIC_ROUTES.login} element={<Login></Login>}></Route>
          <Route path={PUBLIC_ROUTES.signup} element={<SignUp></SignUp>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
