import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themeInfos } from './styles/theme';
import './App.css';

import { PUBLIC_ROUTES } from './config/routes';
import Landing from './pages/Landing/Landing';
import Features from './pages/Features/Features';

function App() {
  return (
    <ThemeProvider theme={themeInfos}>
      <BrowserRouter>
        <Routes>
          <Route path={PUBLIC_ROUTES.default} element={<Landing />} />
          <Route path={PUBLIC_ROUTES.features} element={<Features />}></Route>
        </Routes>
      </BrowserRouter>h
    </ThemeProvider>
  );
}

export default App;
