import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '@mantine/carousel/styles.css';
import { Divider, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';

import './App.css';
import AppRoutes from './AppRoutes';
import { Footer, Header } from './components';
import Store from './store/Store';

function App() {
  const theme = createTheme({
    colors: {
      mineShaft: [
        '#f6f6f6',
        '#e7e7e7',
        '#d1d1d1',
        '#b0b0b0',
        '#888888',
        '#6d6d6d',
        '#5d5d5d',
        '#4f4f4f',
        '#454545',
        '#3d3d3d',
        '#2d2d2d',
      ],
      brightSun: [
        '#fffbeb',
        '#fff3c6',
        '#ffe588',
        '#ffd149',
        '#ffbd20',
        '#f99b07',
        '#dd7302',
        '#b75006',
        '#943c0c',
        '#7a330d',
        '#461902',
      ],
    },
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'brightSun',
    primaryShade: 4,
  });
  return (
    <Provider store={Store}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Notifications position="top-center" zIndex={1000} />
        <BrowserRouter>
          <div className="relative">
            <Header />
            <Divider mr="md" size="xs" />
            <AppRoutes />
            <Footer />
          </div>
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  );
}

export default App;
