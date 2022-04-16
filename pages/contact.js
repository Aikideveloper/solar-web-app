import Head from 'next/head';
import React from 'react';
import Form from '../components/Form/Form';

const contact = () => {
  return (
    <div>
      <div className="contact-desktop container pt-5 vh-100 d-flex align-items-center">
     //jma-ini
      <Head>
        <title>Solar | Instalación de placas solares | Autoconsumo Solar</title>
        <meta name="description" content="Solar: Instalar placas solares en tu vivienda y solicita las subvenciones. Ahorro de un 50% en la instalación ¡Infórmate sin compromiso! - Autoconsumo Solar" />
        <link rel="icon" href="/img/logo_nav.png" />
      </Head>
//jma-fin
        <div id="leftHalf" className="d-flex align-items-center justify-content-center ">
          <div className="p-4">
            <h1 className="pb-3">Solicita tu presupuesto gratuito</h1>
            <Form />
          </div>
        </div>
        <div id="rightHalf">
        </div>
      </div>
      <div className="contact-mobile ">
        <div className="contact-overlay container pt-5 d-flex align-items-center">
          <div className="pt-2 pb-4">
            <h1 className="pb-3 c-white">Solicita tu presupuesto</h1>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
