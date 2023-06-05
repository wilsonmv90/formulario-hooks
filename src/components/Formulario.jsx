import React, { useState } from "react";
import "../css/styles.css";

const initialForm = {
  nombre: "",
  apellido: "",
  edad: "",
  email: "",
};

function Formulario() {
/*const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
  }); */

  const [form, setForm] = useState({ ...initialForm });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
  };


  return (
    <>
      <div className="container">
        <h1 className="text-center">Formulario</h1>
        <form onSubmit={handleSubmit} className="wrapper mt-4">
          <div className="row">
            <div className="col-6 mb-3 ">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                onChange={handleChange}
                value={form.nombre}
              />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="apellido"
                onChange={handleChange}
                value={form.apellido}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <label className="form-label">edad</label>
              <input
                type="text"
                className="form-control"
                name="edad"
                onChange={handleChange}
                value={form.edad}
              />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary col-8 mt-3 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Formulario;
