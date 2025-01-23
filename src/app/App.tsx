import { MantineProvider } from '@mantine/core';
import theme from '../shared/ui/theme';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from '../pages/home';
import { NotFoundPage } from '../pages/notFound';

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
