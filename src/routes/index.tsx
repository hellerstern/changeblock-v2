import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../context/context';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '../config/routes';
import Landing from '../pages/Landing/Landing';
import Features from '../pages/Features/Features';
import Pricing from '../pages/Pricing/Pricing';
import Faqs from '../pages/Faqs/Faqs';
import ContactUs from '../pages/ContactUs/ContactUs';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Dashboard from '../pages/Dashboard/Dashboard';

import { AuthRoute } from '../utils/auth-route';
import { ApiUrls } from '../config/APIConfig';

const Routers = () => {

  const [randomIndex, setRandomIndex] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState([]);

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [data3OfPDF, setData3OfPDF] = useState('');
  const [fileName, setFileName] = useState('');

  const getRandomIndex = async () => {
    const res = await axios(ApiUrls.GetRandomIndex);
    setRandomIndex(res.data.index);
  }

  useEffect(() => {
    getRandomIndex();
  }, [])

  return (
    <AppContext.Provider value={{
      randomIndex, getRandomIndex,
      data1, setData1,
      data2, setData2,
      data3, setData3,
      fileName, setFileName,
      data3OfPDF, setData3OfPDF,

      loading1, setLoading1,
      loading2, setLoading2,
      loading3, setLoading3,
    }}>
      <BrowserRouter>
        <Routes>
          <Route path={PUBLIC_ROUTES.default} element={<Landing />} />
          <Route path={PUBLIC_ROUTES.features} element={<Features />}></Route>
          <Route path={PUBLIC_ROUTES.pricing} element={<Pricing></Pricing>}></Route>
          <Route path={PUBLIC_ROUTES.faqs} element={<Faqs></Faqs>}></Route>
          <Route path={PUBLIC_ROUTES.contactus} element={<ContactUs></ContactUs>}></Route>
          <Route path={PUBLIC_ROUTES.login} element={<Login></Login>}></Route>
          <Route path={PUBLIC_ROUTES.signup} element={<SignUp></SignUp>}></Route>
          <Route element={<AuthRoute></AuthRoute>}>
            <Route path={PRIVATE_ROUTES.dashboard} element={<Dashboard></Dashboard>} />
          </Route>
          <Route path='*' element={<h1>404 Error</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default Routers;
