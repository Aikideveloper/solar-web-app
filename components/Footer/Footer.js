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
                  <i class="fab fa-facebook mr-1"></i> <Link href="#!">Facebook</Link>
                </div>
                <div className="px-2">
                  <i class="fab fa-instagram mr-2"></i><Link href="#!">Instagram</Link>
                </div>
                <div className="px-2">
                  <i className="fab fa-google-play mr-2"></i><Link href="#!">Play store</Link>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="footer-copyright text-center pb-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>

    </footer>
  );
};

export default Footer;