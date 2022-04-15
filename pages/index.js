import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import styles from '../styles/Home.module.css';
import buttonStyles from '../components/Button/Button.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solar | Instalación de placas solares | Autoconsumo Solar</title>
        <meta name="description" content="Solar: Instalar placas solares en tu vivienda y solicita las subvenciones. Ahorro de un 50% en la instalación ¡Infórmate sin compromiso! - Autoconsumo Solar" />
        <link rel="icon" href="/img/logo_nav.png" />
      </Head>

      <main className={`${styles.main}`}>
        <div className="h-100">
          <div className="mx-auto row h-100">
            <div className="col-xl-6 col-md-6 col-sm-12 d-flex justify-content-center text-align-center flex-column">
              <h1 className={`${styles.title} pl-3 text-center`}>
                <span className={styles.autoconsume}>Autoconsumo </span>
                <span className={styles.solar}>Solar</span>
              </h1>

              <p className={`${styles.description} pl-3 text-center`}>
                Súmate al cambio y empieza  <br></br> a ahorrar en la factura de la luz.
              </p>
              <div className="text-center mt-3">
                <Link href='/about'>
                  <a  className={`${buttonStyles.Button} ${buttonStyles.Button_primary}`} >Simula tu instalación</a>
                </Link>
              </div>

            </div>
            <div
              className={`${styles.imageHeader} col-xl-6 col-md-6 col-sm-12`}
              style={{ backgroundImage: "url(/img/village-solar.jpg)" }}
            >
            </div>
          </div>
        </div>
      </main>

      <section className="container">
        <div className="h-100">
          <div className={`${styles.section_1} row h-100 pt-5`}>
            <div className="col-xl-6 col-md-6 col-sm-12 d-flex justify-content-center flex-column">
              <h2 className="c-title pb-2 border-bottom border-app">Aprovecha <b>las subvenciones</b></h2>

              <p className={`${styles.section_1_p} default-text c-gray-2`}>
                Haz el cambio al autoconsumo y consigue un <b>50% de ahorro</b> en la instalación de tus paneles y baterías. No te preocupes, te lo gestionamos todo.
              </p>
              <div className="pt-3 text-sm-center">
                <Link href='/contact'>
                  <a  className={`${buttonStyles.Button} ${buttonStyles.Button_primary}`} >Solicita tu presupuesto</a>
                </Link>
              </div>

            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 d-flex align-items-end justify-content-end">
              <Image
                width="500"
                height="500"
                alt="solar and energy"
                src="/img/sun_care.png"
                className={`${styles.section_1_img} w-100`}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-app-primary" id="contact-form">
        <div className="mx-auto justify-content-center container p-5 mb-5">
          <h4 className="c-dark text-center">
            «La radiación solar en España es un privilegio que debemos aprovechar»
          </h4>
        </div>
      </section>



      <section>
        <div className="container px-4 py-2 mb-1" id="custom-cards">
          <h2 className="c-title pb-2 border-bottom border-app">Genera tu propia <b>energía renovable</b></h2>

          <div className="row align-items-stretch g-4 py-5">

            <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <div className="overflow-hidden text-white text-center mb-4">
                <Image
                  width="200"
                  height="200"
                  alt="solar and energy"
                  src="/img/solar-panel-icon.svg"
                  className="w-100"
                ></Image>
              </div>
              <div className="text-center">
                <h4 className="c-title">Solución integral</h4>
                <p className="c-gray-2">Nos encargamos de todo. Desde el estudio previo hasta la instalación completa. Te asesoramos durante todo el proceso.</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <div className="overflow-hidden text-white text-center mb-4">
                <Image
                  width="200"
                  height="200"
                  alt="solar and energy"
                  src="/img/voltmeter.svg"
                  className="w-100"
                ></Image>
              </div>
              <div className="text-center">
                <h4 className="c-title">Maximiza el ahorro</h4>
                <p className="c-gray-2">Reduce tu factura de la luz desde el primer día y recibe una compensación por la energía que no consumas</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <div className="overflow-hidden text-white text-center mb-4">
                <Image
                  width="200"
                  height="200"
                  alt="solar and energy"
                  src="/img/renewable.svg"
                  className="w-100"
                ></Image>
              </div>
              <div className="text-center">
                <h4 className="c-title">Energía verde</h4>
                <p className="c-gray-2">Consume tu propia energía renovable y protege al medio ambiente</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section id="contact-form" className="container">
        <h2 className="c-title pb-2 border-bottom border-app">Solicita <b>tu presupuesto</b> sin compromiso</h2>
        <div className="row mx-auto justify-content-center mb-5 ">
          <div className="col-xs-12 col-md-6 col-xl-6 mt-5">
            <div className='container'>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
