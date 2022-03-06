import React from 'react';
import Form from '../components/Form/Form';

const contact = () => {
  return (
    <div className="container pt-5 vh-100 d-flex align-items-center">

      <div id="leftHalf" className="d-flex align-items-center justify-content-center ">
        <div className="p-4">
          <h1 className="pb-3">Contacta con nosotros</h1>
          <Form/>
        </div>
      </div>
      <div id="rightHalf">
      </div>

    </div>
  );
};

export default contact;