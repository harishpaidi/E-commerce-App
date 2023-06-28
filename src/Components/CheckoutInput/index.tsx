import { CheckoutInputProps } from "./types";
import * as React from 'react';

export const CheckoutInput: React.FC<CheckoutInputProps> = ({ 
  name,
  id,
  type,
  placeholder,
  onchange
}): JSX.Element => {
  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    onchange(evt)
  }

  return(
    <div className="CheckoutInput">
      <label htmlFor={id}>{name}</label>
      {type === "select" ? (
        <select id={id} onChange={handleChange}>
          <option>Choose a country</option>
          <option value="ind">India</option>
          <option value="aus">Australia</option>
          <option value="sg">Singapore</option>
          <option value="us">United States</option>
          <option value="can">Canada</option>
        </select>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </div>
  )
}