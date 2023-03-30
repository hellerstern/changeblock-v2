import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from 'styled-components';
import { themeInfos } from './styles/theme';
import Routers from './routes';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={themeInfos}>
      <SnackbarProvider />
      <Routers />
    </ThemeProvider >
  );
}

export default App;
