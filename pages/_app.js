import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import FloatingWhatsApp from 'react-floating-whatsapp';
import '../styles/globals.css';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {

  return (
    <div id="MyApp">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
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
      <Footer/>
    </div>
  )
}

export default MyApp
