import React, { useState, useEffect } from "react";

const initailForm = {
  name: "",
  dateOfBirth: "",
  eyeColour: "",
  hairColour: "",
  id: null,
  hogwartsStudent: true,
  hogwartsStaff: true,

};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.dateOfBirth || !form.eyeColour || !form.hairColour ) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div className="wrapper">
      <h3>{dataToEdit ? "" : ""}</h3>
      <form onSubmit={handleSubmit}>
        <p className="label">Nombre
          <input className='input_text'
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
          /></p>
         <p className="label">Cumpleanos
          <input className='input_text'
            type="text"
            name="dateOfBirth"
            onChange={handleChange}
            value={form.dateOfBirth}
          /></p>
         <p className="label">Color de ojos
          <input className='input_text'
            type="text"
            name="eyeColour"
            onChange={handleChange}
            value={form.eyeColour}
          /></p>
         <p className="label">Color de pelo
          <input className='input_text'
            type="text"
            name="hairColour"
            onChange={handleChange}
            value={form.hairColour}
          /></p>
        <p className="label">Genero <br />
        <input 
            type="radio" 
            name="gender" value="male"       
            onChange={handleChange} 
        />Mujer
        
        <input 
            type="radio" 
            name="gender" value="female"       
            onChange={handleChange} 
        />Hombre</p>
        <p className="label">Posicion<br />
        <input 
            type="radio" 
            name="hogwartsStudent" value   
            onChange={handleChange} 
        />Staff
        
        <input 
            type="radio" 
            name="hogwartsStaff" value     
            onChange={handleChange} 
        />Estudiante</p>
        <input type="submit" value="GUARDAR" className="ButtonSave"/>
        <input type="reset" value="LIMPIAR" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;