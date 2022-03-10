import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../components/Button/Button';
import styles from '../components/Button/Button.module.css';

const about = () => {

  return (
    <div id="AboutPage" className="pt-5">
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container p-4">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-12">
              <h1 className="display-5">Calcula tu propia <i className="fas fa-bolt c-primary"></i> instalación sostenible</h1>
              <div className="row">
              <p className="lead col-lg-6 mx-auto">Where you choose to work has impact on your productivity and creativity. It also says a lot about your business. We are the right office space.</p>
              </div>
            </div>
          </div>
          <div className="lead row justify-content-center">
                <div className="col-lg-4 col-xl-3 col-xs-12 text-center mt-3">
                  {/* <Button type="primary" content="Solicita tu presupuesto"></Button> */}
                 <Link href='/contact'>
                 <a  className={`${styles.Button} ${styles.Button_primary}`} >Solicita tu presupuesto</a>
                 </Link>
                </div>
                <div className="col-lg-4 col-xl-3 col-xs-12 text-center mt-3">
                  <Button action="https://play.google.com/store/apps/details?id=es.autoconsumo.solar.calculo.fotovoltaica&gl=ES" type="primary" content="Descarga la aplicación" outline></Button>
                </div>
              </div>
        </div>
      </div>
      <section id="sec-features" className="sec-features pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 text-center pt-5 pb-5">
              <Image
                width="200"
                height="200"
                alt="solar and energy"
                src="/img/solar-panel-icon.svg"
                className="w-100"
              ></Image>
            </div>
            <div className="col-md-6">
              <h2 className="">Lockers</h2>
              <hr className="bg-app-primary" />
              <p>Lockers come in all different shapes and sizes and can be hired in any building, even if it’s not your home building.</p>
            </div>
          </div>

          <div className="row align-items-center">


            <div className="col-md-6 text-right">
              <h2 className="">Building address/Mail handling</h2>
              <hr className="bg-app-primary"/>
              <p>A Czech business address for you and your mail. We can either hold your mail for you to collect, or forward it on to wherever you are.</p>
            </div>
            <div className="col-md-6 text-center pt-5 pb-5">
              <Image
                width="200"
                height="200"
                alt="solar and energy"
                src="/img/voltmeter.svg"
                className="w-100"
              ></Image>
            </div>
          </div>

          <div className="row align-items-center">
          <div className="col-md-6 text-center pt-5 pb-5">
              <Image
                width="200"
                height="200"
                alt="solar and energy"
                src="/img/renewable.svg"
                className="w-100"
              ></Image>
            </div>
            <div className="col-md-6">
              <h2 className="">Call answering</h2>
              <hr className="bg-app-primary"/>
              <p>We’ll provide someone to answer your calls professionally using your company name. They’ll be put through to you, or we’ll take a message if you’re unavailable.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default about;