import React, { ButtonHTMLAttributes } from 'react'

type Button = ButtonHTMLAttributes<HTMLButtonElement>


export function Button(props: Button) {
    return (
        <button {...props} />
    )
}