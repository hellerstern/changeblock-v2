import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themeInfos } from './styles/theme';
import './App.css';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <ThemeProvider theme={themeInfos}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
