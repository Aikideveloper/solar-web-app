import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import FloatingWhatsApp from 'react-floating-whatsapp';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div id="MyApp">
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <FloatingWhatsApp
        avatar="/img/logo_nav.png"
        phoneNumber="+34699031554"
        accountName="Autoconsumo 🔆 Solar"
        statusMessage="Preguntanos!"
        chatMessage={`🔆 Hola! ¿Cómo podemos ayudarte?`}
      />
    </div>
  )
}

export default MyApp
