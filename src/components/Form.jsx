import { useState, useEffect } from "react";
import { Error } from "./Error";





export const Form = ({pacientes, setPacientes}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);

      return;
    }

    setError(false);

    //Objeto paciente


    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }


    setPacientes([...pacientes, objetoPaciente])

    //Reiniciar el form

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')


  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 "
          onSubmit={handleSubmit}
        >
          {error && <Error><p>Todos los campos son obligatorios</p></Error> }

          <div className="mb-5">
            <label
              htmlFor="mascota"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre Mascota
            </label>
            <input
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              id="mascota"
              placeholder="Nombre de la mascota"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre Propietario
            </label>
            <input
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
              type="text"
              id="propietario"
              placeholder="Nombre del propietario"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold"
            >
              Email
            </label>
            <input
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email del Propietario"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="alta"
              className="block text-gray-700 uppercase font-bold"
            >
              Alta
            </label>
            <input
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              type="date"
              id="alta"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="sintomas"
              className="block text-gray-700 uppercase font-bold"
            >
              Síntomas
            </label>
            <textarea
              id="sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los Síntomas"
            />
          </div>

          <input
            type="submit"
            value="Agregar Paciente"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          />
        </form>
      </div>
    </>
  );
};
