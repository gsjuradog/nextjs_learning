import Layout from '../components/Layout';
import '../styles/globals.css';
import {ThemeProvider} from 'theme-ui'
import theme from '../theme';
import NavFromMasters from '../components/NavFromMasters';

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Layout>
     <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
  )
}

export default MyApp
