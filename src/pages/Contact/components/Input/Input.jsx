import React from "react";
import "./Input.css";

export default function Input({ label, handleInput, id, value }) {

    const label_splitted = label.split(' ');

  return (
    <div className="d-flex flex-column input_container">
      <label htmlFor="name" className="label">{label_splitted[0]} <span className="label_second">{label_splitted[1]}</span></label>
      <input type="text" onChange={handleInput} value={value} id={id} placeholder={`Enter ${label}`} className="input_field" />
    </div>
  );
}
