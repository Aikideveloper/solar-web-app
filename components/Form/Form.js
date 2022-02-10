import React from 'react';
import Button from '../Button/Button';
import { useState } from 'react'
import { Router, useRouter } from 'next/router';

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    console.log('entro')
    e.preventDefault()
    let data = {
      name,
      email
    }

    if (name && email) {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          window.location.assign('/test')
        }
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group c-gray-2">
        <label>
          <i className="fas fa-user c-primary mr-3"></i>Nombre y apellidos
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label>
          <i className="fas fa-envelope c-primary mr-3"></i>Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mt-4">
        <Button
          isSubmit
          type="primary"
          content="Contacta"
        ></Button>
      </div>
    </form>
  );
};

export default Form;