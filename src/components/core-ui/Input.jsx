import React from "react"
const Style = [
  "field_item"

]
export default function Input({type, id, name, value, onChange, inputStyle, placeholder}) {
  const checkInputStyle = Style.includes(inputStyle)
      ? inputStyle
      : Style[0]
  return (
      <input className={checkInputStyle} type={type} id={id} name={name}
             value={value} onChange={onChange} placeholder={placeholder}/>

  )
}
