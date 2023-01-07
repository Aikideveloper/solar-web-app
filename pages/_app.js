import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import FloatingWhatsApp from 'react-floating-whatsapp';
import '../styles/globals.css';
import Footer from '../components/Footer/Footer';

import {useEffect} from 'react';
import {useRouter} from 'next/router';
import * as gtag from '../lib/google-analytics';

function MyApp({ Component, pageProps }) {
const router = useRouter()
const { asPath } = useRouter();
const forbiddenPath = asPath === '/lgpd_autoconsumo_solar' || asPath === '/lgpd_solar_panel_optimal_tilt';


  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }

  }, [router.events])

  return (
    <div id="MyApp">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      </Head>
      {!forbiddenPath && <Navbar />}
      <Component {...pageProps} />
      <Footer className={forbiddenPath ? 'hidden' : 'footer'}>
      {/* <Link href="/lgpd">Términos y condiciones</Link> */}
    </Footer>
      <FloatingWhatsApp
        avatar="/img/logo_nav.png"
        phoneNumber="+34636920777"
        accountName="Autoconsumo 🔆 Solar"
        statusMessage="Preguntanos!"
        chatMessage={`🔆 Hola! ¿Cómo podemos ayudarte?`}
      />
    </div>
  )
}

export default MyApp
