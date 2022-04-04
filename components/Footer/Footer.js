import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer font-small bg-dark c-white pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-12 mt-md-0 mt-3">
            <div className="d-flex align-items-center justify-content-center">
              <Image alt="logo image" src="/img/logo_nav.png" width="40" height="40" />
              <h5 className="text-uppercase mb-0 ml-2">
                Autoconsumo Solar
              </h5>
            </div>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3"/>
            <div className="col-md-12 mb-md-0 mb-3">
              <div className="d-flex align-items-center justify-content-center mt-3">
                <div className="px-2">
                <Link href="https://www.facebook.com/autoconsumosolaresp" replace>
                  <a>
                    <i style={{ fontSize: "1.25rem" }} className="fab fa-facebook mr-1"></i>
                  </a>
                </Link>
                </div>
                <div className="px-2">
                <Link href="https://www.instagram.com/autoconsumosolar/?hl=es" replace>
                  <a>
                    <i style={{ fontSize: "1.25rem" }} className="fab fa-instagram mr-2"></i>
                  </a>
                </Link>
                </div>
                <div className="px-2">
                <Link href="https://play.google.com/store/apps/details?id=es.autoconsumo.solar.calculo.fotovoltaica&gl=ES" replace>
                  <a>
                    <i style={{ fontSize: "1.25rem" }} className="fab fa-google-play mr-2"></i>
                  </a>
                </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="footer-copyright text-center pb-3">
        <Link href="/lgpd">Términos y condiciones</Link>
      </div>

    </footer>
  );
};

export default Footer;