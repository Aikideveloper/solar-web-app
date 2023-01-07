import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../components/Button/Button';
import styles from '../components/Button/Button.module.css';
import Head from 'next/head';

const about = () => {

  return (
    <div id="AboutPage" className="pt-5">
      <Head>
        <title>Solar | Instalación de placas solares | Autoconsumo Solar</title>
         <meta name="description" content="Solar: Instalar placas solares en tu vivienda y solicita las subvenciones. Ahorro de un 50% en la instalación ¡Infórmate sin compromiso! - Autoconsumo Solar" />
        <link rel="icon" href="/img/logo_nav.png" />
      </Head>
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container p-4">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-12">
              <h1 className="display-5">Calcula tu propia <i className="fas fa-bolt c-primary"></i> instalación sostenible</h1>
              <div className="row">
                <p className="lead col-lg-6 mx-auto">Autoconsumo Solar es ideal para el cálculo de sistemas fotovoltaicos aislados, instalaciones conectadas a red y bombeos solares.</p>
              </div>
            </div>
          </div>
          <div className="lead row justify-content-center">
           {/* <div className="col-lg-4 col-xl-3 col-xs-12 text-center mt-3">
              { <Button type="primary" content="Solicita tu presupuesto"></Button> }
              <Link href='/contact'>
                <a className={`${styles.Button} ${styles.Button_primary}`} >Solicita tu presupuesto</a>
              </Link>
            </div>*/}
            <div className="col-lg-4 col-xl-3 col-xs-12 text-center mt-3">
              <Button action="https://play.google.com/store/apps/details?id=es.autoconsumo.solar.calculo.fotovoltaica&gl=ES" type="primary" content="Descarga la aplicación" outline></Button>
            </div>
          </div>
        </div>
      </div>
      <section id="sec-features" className="sec-features pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center pt-2 pb-2">
              <Image
                width="250"
                height="450"
                alt="autoconsumo solar españa"
                title="placas solares españa"
                src="/img/1_mobile.png"
                className="w-100"
              ></Image>
            </div>
            <div className="col-md-6">
              <h2 className=""><span style={{ fontWeight: "700" }}className="c-primary">1.</span> Ubica tu instalación</h2>
              <hr className="bg-app-primary" />
              <p>Empleamos datos de irradiación solar proporcionados por el Ministerio de Agricultura, Alimentación y Medio Ambiente para dimensionar tu instalación
                de autoconsumo. Nos permitirá calcular con exactitud las características técnicas del campo fotovoltaico a instalar gracias a nuestros algoritmos de precisión.</p>
            </div>
          </div>

          <div className="row align-items-center xs-reverse-row">
            <div className="col-md-6 text-right">
              <h2 className=""><span style={{ fontWeight: "700" }}className="c-primary">2.</span> Introduce tu consumo mensual</h2>
              <hr className="bg-app-primary" />
              <p>Sabiendo tu consumo energético podremos calcular qué potencia necesita tu instalación fotovoltaica para cubrir tus necesidades. 
                Si no dispones de una factura eléctrica por ejemplo en el caso de una nueva vivienda, puedes específicar 
                cada electrodoméstico con su potencia y posibles horas de uso para un cálculo más preciso.</p>
            </div>
            <div className="col-md-6 text-center pt-2 pb-2">
              <Image
                width="250"
                height="450"
                alt="solar consumo electrico"
                title="consumo electrico vivienda"
                src="/img/2_mobile.png"
                className="w-100"
              ></Image>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6 text-center pt-2 pb-2">
              <Image
                width="250"
                height="450"
                alt="subvenciones placas solares"
                title="subvenciones placas españa"
                src="/img/3_mobile.png"
                className="w-100"
              ></Image>
            </div>
            <div className="col-md-6">
              <h2 className=""><span style={{ fontWeight: "700" }}className="c-primary c-bold">3.</span> Obtén tu presupuesto gratis</h2>
              <hr className="bg-app-primary" />
              <p>Conoce el coste estimado de tu instalación incluyendo diseño, montaje y tramitación de la subvención. No incluye la tramitación del permiso de obra específico de cada municipio.</p>
            </div>
          </div>
      {/*
          <div className="row align-items-center xs-reverse-row">
            <div className="col-md-6 text-right">
              <h2 className=""><span style={{ fontWeight: "700" }}className="c-primary">4.</span> Building address/Mail handling</h2>
              <hr className="bg-app-primary" />
              <p>A Czech business address for you and your mail. We can either hold your mail for you to collect, or forward it on to wherever you are.</p>
            </div>
            <div className="col-md-6 text-center pt-2 pb-2">
              <Image
                width="250"
                height="450"
                alt="solar and energy"
                src="/img/4_mobile.png"
                className="w-100"
              ></Image>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default about;
