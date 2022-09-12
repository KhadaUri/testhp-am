import React from "react";

const CrudTableRow = ({ el, setDataToEdit }) => {
  let { name, dateOfBirth, eyeColour, hairColour, hogwartsStudent, hogwartsStaff } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{dateOfBirth}</td>
      <td>{eyeColour}</td>
      <td>{hairColour}</td>
      <td>{hogwartsStudent}</td>
      <td>{hogwartsStaff}</td>

      {/* <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        
      </td> */}
    </tr>
  );
};

export default CrudTableRow;