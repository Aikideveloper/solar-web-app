import React from 'react';
import Form from '../components/Form/Form';

const contact = () => {
  return (
    <div>
      <div className="contact-desktop container pt-5 vh-100 d-flex align-items-center">
        <div id="leftHalf" className="d-flex align-items-center justify-content-center ">
          <div className="p-4">
            <h1 className="pb-3">Solicita de tu presupuesto</h1>
            <Form />
          </div>
        </div>
        <div id="rightHalf">
        </div>
      </div>
      <div className="contact-mobile ">
        <div className="contact-overlay container pt-5 d-flex align-items-center">
          <div className="pt-2 pb-4">
            <h1 className="pb-3 c-white">Contacta con nosotros</h1>
            <Form />
          </div>
        </div>
      </div>
    </div>

  );
};

export default contact;