import { MantineProvider } from '@mantine/core';
import HomePage from './pages/home/Home';
import theme from './styles/theme/theme';
import { BrowserRouter, Route, Routes } from 'react-router';
import NotFound from './pages/notFound/NotFound';
import MainMenu from './components/navigation/mainMenu/MainMenu';

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MainMenu />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
