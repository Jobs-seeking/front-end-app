import React from "react"
const Style = [
    "btn--solid",
    "btn--outline",
    "btn--register__submit",
    "btn--login__submit",
    "btn-item"
]

export default function Button({children, type, onClick, buttonStyle}){
    const checkButtonStyle = Style.includes(buttonStyle)
    ? buttonStyle
    : Style[0]
    return(
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>

    )
}