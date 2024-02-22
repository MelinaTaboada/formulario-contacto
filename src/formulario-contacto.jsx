import React from "react";
import "./App.css";
import { useState } from "react";

export const FormularioContacto = () => {
  const initialState = {
    Argentina: false,
    Brasil: false,
    Chile: false,
    Paraguay: false,
    Uruguay: false,
    Bolivia: false,
  };

  const [inputs, setInputForm] = useState({
    inputNombre: "",
    inputApellido: "",
    inputDni: "",
    inputGenero: "",
    estadoCivil: "",
    paises: initialState,
    provincias: false,
  });

  const onInputChange = (event) => {
    setInputForm({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    setInputForm((prevState) => ({
      ...prevState,
      paises: { ...prevState.paises, [name]: checked },
      provincias: checked && name === "Argentina",
    }));
  };

  const paisSeleccionado = [];

  for (const pais in inputs.paises) {
    if (inputs.paises[pais]) {
      paisSeleccionado.push(pais);
    }
  }

  const handleSelectChange = (event) => {
    setInputForm({ ...inputs, estadoCivil: event.target.value });
  };

  const handleProvinciaChange = (event) => {
    setInputForm({ ...inputs, provincias: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.estadoCivil);
    alert(
      "Los datos ingresados son:" +
        "\n Nombre: " +
        inputs.inputNombre +
        "\n Apellido: " +
        inputs.inputApellido +
        "\n DNI: " +
        inputs.inputDni +
        "\n Género: " +
        inputs.inputGenero +
        "\n Pais de origen: " +
        paisSeleccionado +
        "\n Provincia: " +
        inputs.provincias +
        "\n Estado civil: " +
        inputs.estadoCivil
    );
  };

  return (
    <>
      <h1>Formulario de contacto</h1>
      <form className="form-contacto" onSubmit={onSubmit}>
        <label>Ingrese su nombre</label>
        <input
          type="text"
          name="inputNombre"
          placeholder="Escribe aqui tu nombre"
          value={inputs.inputNombre}
          onChange={onInputChange}
        />
        <label>Ingrese su apellido</label>
        <input
          type="text"
          name="inputApellido"
          placeholder="Escribe aqui tu apellido"
          value={inputs.inputApellido}
          onChange={onInputChange}
        />
        <label>Seleccione su Género</label>
        <div className="genero">
          <input
            type="radio"
            name="inputGenero"
            value="Femenino"
            onChange={onInputChange}
            checked={inputs.inputGenero === "Femenino"}
          />
          Femenino
          <input
            type="radio"
            name="inputGenero"
            value="Masculino"
            onChange={onInputChange}
            checked={inputs.inputGenero === "Masculino"}
          />
          Masculino
        </div>
        <label>Ingrese su número de DNI</label>
        <input
          type="text"
          name="inputDni"
          placeholder="Escribe aqui tu numero de DNI"
          value={inputs.inputDni}
          onChange={onInputChange}
        />

        <label>Selecciona tu país de origen:</label>
        <div className="paises">
          <input
            type="checkbox"
            name="Argentina"
            checked={inputs.paises.Argentina}
            onChange={handleChange}
          />
          Argentina
          <input
            type="checkbox"
            name="Brasil"
            checked={inputs.paises.Brasil}
            onChange={handleChange}
          />
          Brasil
          <input
            type="checkbox"
            name="Chile"
            checked={inputs.paises.Chile}
            onChange={handleChange}
          />
          Chile
          <input
            type="checkbox"
            name="Paraguay"
            checked={inputs.paises.Paraguay}
            onChange={handleChange}
          />
          Paraguay
          <input
            type="checkbox"
            name="Uruguay"
            checked={inputs.paises.Uruguay}
            onChange={handleChange}
          />
          Uruguay
          <input
            type="checkbox"
            name="Bolivia"
            checked={inputs.paises.Bolivia}
            onChange={handleChange}
          />
          Bolivia
        </div>
        {inputs.provincias && (
          <div>
            <label>Selecciona tu provincia:</label>
            <select value={inputs.provincias} onChange={handleProvinciaChange}>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Jujuy">Jujuy</option>
            <option value="Cordoba">Cordoba</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Salta">Salta</option>
            <option value="Neuquen">Neuquen</option>
            <option value="Misiones">Misiones</option>
            </select>
          </div>
        )}

        <label>Estado Civil:</label>
        <select value={inputs.estadoCivil} onChange={handleSelectChange}>
          <option value="">Selecciona...</option>
          <option name="Soltera/o">Soltera/o</option>
          <option name="Casada/o">Casada/o</option>
          <option name="Divorciada/o">Divorciada/o</option>
          <option name="Viuda/o">Viuda/o</option>
        </select>
        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};
