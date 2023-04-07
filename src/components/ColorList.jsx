import React from 'react';
import "./ColorList.css";
import Swal from "sweetalert2";

const ColorList = ({lista = []}) => {
  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color);
    Swal.fire({
      title: `Color: ${color} Copied`,
      position: "top-end",
      icon: 'success',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true
    });
  }
  
  const listItems = lista && lista.length > 0 ? lista.map((color, index) =>
  <button 
    aria-current="true" 
    title="Copiar" 
    key={index} 
    type="button" 
    style={{
        background: color
    }}
    onClick={()=> handleCopyColor(color)}
    className="list-group-item list-group-item-action text-primary botonLista">
        {color}
  </button>
):(<div className="alert alert-danger" role="alert">
    <b>Sin elementos por mostrar...</b>
  </div>);
  return (
    <div className="list-group text-center">
        {listItems}
    </div>
  )
}

export default ColorList;